import { Card } from "@repo/ui/card";

export const OnRampTransaction = ({ transactions }: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}) => {
    console.log("inside ramp trsxn card");
    
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(trsxn => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        INR Received
                    </div>
                    <div className="text-slate-400 text-sm">
                        {trsxn.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {trsxn.amount / 100}
                </div>
            </div>)}
        </div>
    </Card>
}