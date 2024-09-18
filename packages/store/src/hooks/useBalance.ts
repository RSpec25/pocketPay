"use client"
import { BalanceAtom } from "../atoms/balance";
import { useRecoilValue } from "recoil";

export const useBalance = () => {
    const value = useRecoilValue(BalanceAtom);
    return value;
}