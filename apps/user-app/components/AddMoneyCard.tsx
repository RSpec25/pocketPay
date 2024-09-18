"use client"
import { useState } from "react"
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/TextInput"
import { Select } from "@repo/ui/Select"
import { Button } from "@repo/ui/button";
import CreateOnRamp from "../app/lib/actions/CreateOnRamp"

const BANKS = [
    {
        name: "HDFC Bank",
        redirect: "https://netbanking.hdfcbank.com"
    },
    {
        name: "SBI",
        redirect: "https://onlinesbi.sbi"
    },
    {
        name: "Axis Bank",
        redirect: "https://www.axisbank.com"
    }
]

export const AddMoneyCard = () => {
    const [redirectUrl, setRedirectUrl] = useState(BANKS[0]?.redirect);
    const [value, setvalue] = useState(0);
    const [provider, setProvider] = useState(BANKS[0]?.name || "");
    return <Card title="Add Money">
        <div className="w-full">
            <TextInput placeholder="Amount" label="Amount" onChange={(val) => { setvalue(Number(val) * 100) }} />
            <div className="py-4 text-left"> Bank </div>
            <Select onSelect={(value) => {
                setProvider(BANKS.find(x => x.name === value)?.name || "");
                setRedirectUrl(BANKS.find(x => x.name === value)?.redirect || "");
            }}
                options={BANKS.map(x => ({ key: x.name, value: x.name }))} />
            <div className="flex justify-center pt-4">
                <Button onclick={async () => {
                    await CreateOnRamp(provider, value);
                    window.location.href = redirectUrl || "";
                }} >
                    Add Money
                </Button>
            </div>
        </div>
    </Card>
}