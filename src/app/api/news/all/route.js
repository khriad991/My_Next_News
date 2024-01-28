import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res){
    try {
        let prisma = new PrismaClient();
        let data = await prisma.news_list.findMany();

        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e})

    }
}
