import express from "express";
import db from "@repo/prisma/client";
const app = express();

app.use(express.json())
app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onramping.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch (e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})

app.listen(3003, () => {
    console.log("App listening on port: 3003");
});

// const data = req.body;
// data validation using zod
// check if req is from bank// origin check ideally should share a secret
// update balance in db, dont fetch and then update , 2 req come at the same time result in 1 time incr, incr can handle this.
// timescale (service)  db for interactive dashboard and graphs