"use server"
import prisma from "@repo/prisma/client"
import { getServerSession } from "next-auth"
import { authOption } from "../auth"



export const SendToPeer = async (receiver: number, amount: number) => {
    const session = await getServerSession(authOption);
    const from = session?.user?.id;
    if (!from) {
        return { message: "Unauthenticated Request" }
    };
    const to = await prisma.user.findFirst({
        where: {
            number: receiver
        }
    });
    if (!to) {
        return { message: "User not found!" }
    };
    try {
        await prisma.$transaction(async (tx) => {
            const bal = await tx.balance.findFirst({
                where: {
                    userId: Number(from)
                }
            })
            if (!bal || bal.amount < amount) {
                throw new Error("Insufficient Funds!")
            }
            await tx.balance.update({
                where: { userId: Number(from) },
                data: { amount: { decrement: amount } }
            })
            await tx.balance.update({
                where: { userId: to.id },
                data: { amount: { increment: amount } }
            })

            return {
                message: "Amount successfully transfered!!!"
            }
        })
    } catch (error) {
        console.log("Error while p2p", error);
        return { message: "Transfer failed!" }
    }
}