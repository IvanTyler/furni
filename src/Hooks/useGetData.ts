import { contacts, events } from "../MockData/MockData"
import { useDispatch } from "react-redux"
import { codeCopiedAction } from "../Redux/Actions/ActionCodeCopied"
import { useTypeSelector } from "./useTypeSelector"


export const useGetData = () => {

    function getDataContactsEventsDto<T>(array: T[]): T[] {
        return array.map((el: any) => {
            return {
                ...el,
                active: false,
            }
        })
    }


    const { codeCopied } = useTypeSelector(state => state.codeCopied)

    const myDataContacts = getDataContactsEventsDto(contacts)
    const myDataEvents = getDataContactsEventsDto(events)


    return { myDataContacts, myDataEvents, codeCopied }
}