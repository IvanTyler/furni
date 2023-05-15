import { IGetaDataEvents } from "../Interfaces/Events"
import { IGetaDataContacts, IMyDataContacts } from "../Interfaces/contacts"
import { contacts, events } from "../MockData/MockData"


export const useGetData = () => {

    // const myDataContacts: IMyDataContacts[] = contacts.map((el: IGetaDataContacts) => {
    //     return {
    //         ...el,
    //         active: false,
    //     }
    // })

    function getDataContactsEventsDto<T>(array: T[]): T[] {
        return array.map((el: any) => {
            return {
                ...el,
                active: false,
            }
        })
    }

    const myDataContacts = getDataContactsEventsDto(contacts)
    const myDataEvents = getDataContactsEventsDto(events)


    return { myDataContacts, myDataEvents }
}