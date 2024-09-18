"use client"
import { Card } from "@repo/ui/card"
import { Button } from "@repo/ui/button"
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { SendToPeer } from "../app/lib/actions/sendToPeer";
import { Center } from "@repo/ui/Center";

export const SendCard = () => {
    const redirect = "dashboard";
    const [phone, setPhone] = useState(0);
    const [amount, setAmount] = useState(0);
    return <div className="">
        <Center>
            <Card title="Send Money">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder="enter valid number" label="Enter Number" onChange={(val) => { setPhone(Number(val)) }} />
                    <TextInput placeholder="amount in $" label="Amount" onChange={(val) => { setAmount(Number(val)) }} />
                    <div className="flex justify-center pt-4">
                        <Button onclick={async () => {
                            console.log("hiiiiiiiiiiiii.........", phone, amount)
                            await SendToPeer(phone, (amount * 100));
                            window.location.href = redirect;
                        }} >
                            Send Money
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}