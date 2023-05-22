import { getData } from "../MockData/MockData"
import { useDispatch } from "react-redux"
import { codeCopiedAction } from "../Redux/Actions/ActionCodeCopied"
import { useTypeSelector } from "./useTypeSelector"
import { useEffect, useState } from "react"


export const useGetData = () => {

    const [isStatus, setIsStatus] = useState(false)

    const { codeCopied, data, isloading } = useTypeSelector(state => state.data)

    useEffect(() => {
        if (data.status) setIsStatus(true)
    }, [data])

    function getDataContactsEventsDto(array: any) {
        return array.map((el: any) => {
            return {
                ...el,
                active: false,
            }
        })
    }


    let myDataContacts
    let myDataEvents

    if (isStatus) {
        myDataEvents = getDataContactsEventsDto(data.events)
        myDataContacts = getDataContactsEventsDto(data.contacts)
    }


    return { myDataContacts, myDataEvents, codeCopied, isloading, isStatus }
}