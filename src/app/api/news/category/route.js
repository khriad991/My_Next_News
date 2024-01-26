
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url)
        let catID = parseInt(searchParams.get("catID"))
        let prisma = new PrismaClient();
        let data = await  prisma.news_list.findMany({where: {catID}})

        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"success",data:e.toString()})
    }
}