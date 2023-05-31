import { dataActionContacts } from "../Redux/Actions/dataAction";
import { useAppDispath, useTypeSelector } from "./useTypeSelector"
import { useEffect, useState } from "react"


export const useGetData = () => {


    let { codeCopied, isloading, error, contacts } = useTypeSelector(state => state.data)
    const dispath = useAppDispath()


    function getDataContactsEventsDto<T>(array: T[]): T[] {
        return array.map((el: any) => {
            return {
                ...el,
                active: false,
            }
        })
    }

    // const myDataEvents = getDataContactsEventsDto(data.events)
    const myDataContacts = getDataContactsEventsDto(contacts)

    return {
        myDataContacts,
        // myDataEvents,
        codeCopied,
        isloading,
        error,
        contacts
    }
}