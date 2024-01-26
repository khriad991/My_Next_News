
import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url)
        let keyword = searchParams.get("keyword")
        let prisma = new PrismaClient();
        let data = await  prisma.news_list.findMany({
            where:{
                OR: [
                    { title: { contains: keyword } },
                    { short_des: { contains: keyword} },
                ],
            }
        })

        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"success",data:e.toString()})
    }
}