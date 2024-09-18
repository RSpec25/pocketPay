import prisma from "@repo/prisma/client";
import { AddMoneyCard } from "../../../components/AddMoneyCard"
import { BalanceCard } from "../../../components/BalanceCard"
import { OnRampTransaction } from "../../../components/OnRampTransaction"
import { getServerSession } from "next-auth/next";
import { authOption } from "../../lib/auth";

async function getBalance() {
    const session = await getServerSession(authOption);
    const bal = await prisma.balance.findFirst({
        where: {
            userId: parseInt(session.user.id)
        }
    })

    return {
        balance: bal?.amount || 0,
        locked: bal?.locked || 0
    }

}

async function getOnRampTransaction() {
    const session = await getServerSession(authOption);
    const trsxn = await prisma.onramping.findMany({
        where: {
            userId: parseInt(session.user.id)
        }
    })
    return trsxn.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}


export default async function () {
    const bal = await getBalance();
    const trsxn = await getOnRampTransaction();
    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 font-bold mb-8">
            Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoneyCard />
            </div>
            <div>
                <BalanceCard amount={bal.balance} locked={bal.locked} />
                <div className="pt-4">
                    <OnRampTransaction transactions={trsxn} />
                </div>
            </div>
        </div>
    </div>
}