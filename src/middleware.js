import {VerifyToken} from "@/Utility/jwtTokenHelper";
import {NextResponse} from "next/server";

export async function middleware (req,res) {
    try {
        let token = req.cookies.get("token")
        let payload = await  VerifyToken(token['value'])
        let reqHeaders = new Headers(req.header)
        reqHeaders.set('email',payload['email'])
        reqHeaders.set('id',payload['id'])

        return NextResponse.next({request:{headers:reqHeaders}})
    }catch (e) {
        let reqHeader = new Headers(req.header);
        reqHeader.set("email",'0')
        reqHeader.set("id","0")
        return NextResponse.next({request:{headers:reqHeader}})
    }
}