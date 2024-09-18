"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SideBarItems = ({ href, title, icon }: { href: string, title: string, icon: React.ReactNode }) => {
    const router = useRouter();
    const path = usePathname();
    const select = path === href;
    return <div className={`cursor-pointer flex p-2 pl-8 ${select ? "text-[#6a51a6]" : "text-slate-500"}`} onClick={() => { router.push(href); }}>
        <div className="pr-2">
            {icon}
        </div>
        <div className={` font-bold ${select ? "text-[#6a51a6]" : "text-slate-500"} `}>
            {title}
        </div>
    </div >
}