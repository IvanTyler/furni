import { contacts, events } from "../MockData/MockData"


export const useGetData = () => {

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