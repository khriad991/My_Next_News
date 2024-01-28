
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url)
        let id = parseInt(searchParams.get("id"))
        let prisma = new PrismaClient();
        let data = await  prisma.news_list.findMany({
            where: {id},
            include:{
                categories: {select: {id: true,name: true}},
            }

        })

        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"success",data:e.toString()})
    }
}