


import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {CreateToken} from "@/Utility/jwtTokenHelper";

export const POST = async (req,res)=>{
    try {
        let prisma = new PrismaClient();
        let reqJson = await req.json();
        let data = await prisma.users.findUnique({where:reqJson})
        if(data.length === 0 ){
            return  NextResponse.json({status:"fail",data:data['massage']})
        }else {
            let token = await CreateToken(data['email'],data['id'])
            let ExpDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const cookieString = `token=${token};expires=${ExpDuration.toUTCString()}; path=/`
            return NextResponse.json(
                {status:"success",data:token},
                {status:200,headers:{"Set-Cookie":cookieString}}
            )
        }
    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})
    }
}