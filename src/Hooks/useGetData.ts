import { useTypeSelector } from "./useTypeSelector"
import { useEffect, useState } from "react"


export const useGetData = () => {

    const [isStatus, setIsStatus] = useState(false)

    let { codeCopied, data, isloading, error, contactsFilter } = useTypeSelector(state => state.data)

    useEffect(() => {
        if (data.status) setIsStatus(true)
    }, [data])

    function getDataContactsEventsDto<T>(array: T[]): T[] {
        return array.map((el: any) => {
            return {
                ...el,
                active: false,
            }
        })
    }

    const myDataEvents = getDataContactsEventsDto(data.events)
    const myDataContacts = getDataContactsEventsDto(data.contacts)

    return {
        myDataContacts,
        myDataEvents,
        codeCopied,
        isloading,
        isStatus,
        error,
        contactsFilter
    }
}