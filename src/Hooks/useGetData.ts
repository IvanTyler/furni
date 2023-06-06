import { useAppDispath, useTypeSelector } from "./useTypeSelector"
import { useEffect } from "react"


export const useGetData = () => {

    let { codeCopied } = useTypeSelector(state => state.data)


    return {
        codeCopied,
    }
}