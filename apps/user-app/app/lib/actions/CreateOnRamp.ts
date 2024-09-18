"use server"
// use service on top of every action we create as it is used by both server and client components/ 
// + if not  server then it gets called in addMoney which doesnt hav prisma nd all client side
import prisma from "@repo/prisma/client"
import { getServerSession } from "next-auth"
import { authOption } from "../auth"

export default async function CreateOnRamp(provider: string, amount: number) {
    //ideally token would come from baking provider.
    const session = await getServerSession(authOption);
    console.log("provider", provider);
    if (!session?.user || !session?.user.id) { return { message: "Unauthenticated Request" } }

    const token = (Math.random() * 1000).toString(); // usually get from the servcice provider
    await prisma.onramping.create({
        data: {
            userId: parseInt(session.user.id),
            status: "pending",
            startTime: new Date,
            amount: amount,
            provider: provider,
            token: token
        },
    })
    return {
        message: "Done"
    }

}