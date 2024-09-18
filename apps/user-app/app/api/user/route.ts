import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOption } from "../../lib/auth";

export const GET = async () => {
    const session = await getServerSession(authOption);
    console.log("session", session);
    if (session.user) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}