import { getDataReferalCode } from "../Redux/Actions/dataAction"
import { useAppDispath, useTypeSelector } from "./useTypeSelector"
import { useEffect, useState } from "react"


export const useGetData = () => {


    let { codeCopied } = useTypeSelector(state => state.data)
    const dispath = useAppDispath()

    useEffect(() => {
        dispath(getDataReferalCode())
    }, [])

    return {
        codeCopied,
    }
}