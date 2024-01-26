
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export const POST = async (req,res)=>{
    try {
        let prisma = new PrismaClient();
        let reqJson = await  req.json();
        let data = await prisma.news_list.create({
            data:reqJson
        })

        return NextResponse.json({status:"success",data})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})

    }
}