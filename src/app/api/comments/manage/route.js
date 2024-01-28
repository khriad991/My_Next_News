import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const headerList = headers();
        const id = parseInt(headerList.get("id"));
        const result = await prisma.comments.findMany({
            where: { userID: id },
            include: { news_list: { select: { title: true } } },
        });
        if (result.length === 0) {
            return NextResponse.json({ status: "success", data: "user not exist" });
        } else {
            return NextResponse.json({ status: "success", data: result });
        }
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}

export async function POST(req, res) {
    try {
        const headerList = headers();
        const id = parseInt(headerList.get("id"));

        console.log(id)

        const reqBody = await req.json();
        reqBody.userID = id;
        const data = await prisma.comments.create({ data:reqBody });

        return NextResponse.json({ status: "success", data });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e.toString() });
    }
}

export async function DELETE(req, res) {
    try {
        const headerList = headers();
        const id = parseInt(headerList.get("id"));
        const reqBody = await req.json();
        let comment_Id = parseInt(reqBody["id"]);
        const result = await prisma.comments.deleteMany({
            where: {
                AND: {
                    userID: id,
                    id: comment_Id,
                },
            },
        });

        return NextResponse.json({
            status: "success",
            message: "comment Delete success",
            data: result,
        });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}
