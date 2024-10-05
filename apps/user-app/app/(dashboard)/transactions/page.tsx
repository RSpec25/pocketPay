import { getServerSession } from "next-auth"
import { authOption } from "../../lib/auth"
import prisma from "@repo/prisma/client";
import {Transactions} from "../../../components/TransactionsCard";

async function getTransaction(){
    const session = await getServerSession(authOption);
    const userId = session.user.id;
    const p2pTrsxns = await prisma.p2pTransaction.findMany({
        where:{
            OR:[
                {
                    fromUserId: parseInt(userId)
                },
                {
                    toUserId: parseInt(userId)
                }
            ]
        },
        include:{
            toUser:{
                select:{
                    number: true,
                }
            },
            fromUser:{
                select:{
                    number: true
                }
            }

        }
    })
    const Txn = p2pTrsxns.map(trsxn => ({
        amount: trsxn.amount,
        time: trsxn.timestamp,
        to: trsxn.toUserId,
        from: trsxn.fromUserId,
        toUser: trsxn.toUser.number,
        fromUser: trsxn.fromUser.number
    }))
    return {Txn, userId};
}

export default async function(){
    const trsxn = await getTransaction();
    return <div >
        <div className="text-4xl text-[#6a51a6] pt-8 font-bold mb-8">
        Transactions page
        </div>
        <div>
            <Transactions transactions={trsxn.Txn} userId={trsxn.userId}/>
        </div>
    </div>
}