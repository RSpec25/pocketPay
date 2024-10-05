// global bigInt
import { Card } from "@repo/ui/card"

export const Transactions=({transactions,userId}:{
    transactions:{
        amount: number,
        from: number,
        to: number,
        time: Date,
        toUser: bigint,
        fromUser: bigint
    }[],
    userId: number
})=>{
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Transactions">
        {/* global bigInt */}
        <div className="pt-2 min-w-80">
        {transactions.map(trsxn =>{
            if(trsxn.from==userId){
                return <div className="flex justify-between">
                            <div>
                                <div className="text-sm"> 
                                    Sent INR to: {trsxn.toUser.toString()}
                                </div>
                                <div className="text-slate-400 text-sm">
                                    {trsxn.time.toDateString()}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                - {trsxn.amount}
                            </div>
                     </div>
            }
            else{
                return <div className="flex justify-between">
                            <div>
                                <div className="text-sm">
                                    Received INR from: {trsxn.fromUser.toString()}
                                </div>
                                <div className="text-slate-400 text-sm">
                                    {trsxn.time.toDateString()}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                + {trsxn.amount}
                            </div>
                     </div>
            }  
        })}
        </div>
    </Card>
}