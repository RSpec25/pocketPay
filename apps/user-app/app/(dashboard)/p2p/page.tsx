import { SendCard } from "../../../components/Sendcard"
export default async function () {
    return <div className="text-4xl text-[#6a51a6] pt-8 font-bold mb-8">
        P2P Transfer
        <div className="w-full pt-4">
            <SendCard />
        </div>
    </div>
}