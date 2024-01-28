
import {PrismaClient} from '@prisma/client';
import {NextResponse} from 'next/server';
import {headers} from "next/headers";

export const GET =async () => {
    try {
        let prisma = new PrismaClient();
        let headerList = headers();
        let id = parseInt(headerList.get("id"))
        let data = await prisma.users.findUnique({
            where: {id},
            select:{id:true,name:true,email:true,phone:true}
            })
        return NextResponse.json({status:"success",data})

    }catch (e) {
        return NextResponse.json({status:"fail",data:e.toString()})

    }
}