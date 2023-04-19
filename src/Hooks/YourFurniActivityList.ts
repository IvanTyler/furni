import axios from "axios";
import { useEffect, useState } from "react";
import { IStatsClients, IStatsPartners } from "../Interfaces/DataApi";
import { dataApi } from "../MockData/MockData";


function useYourFurniActivityList() {

    const [statsClients, setStatsClients] = useState<IStatsClients[]>([])
    const [StatsPartners, setStatsPartners] = useState<IStatsPartners[]>([])

    const [loading, setLoading] = useState(false)


    const fetchYourFurniActivityList = async () => {
        try {
            setLoading(true)

            // const response = await axios.get<IDataApi>('')
            setTimeout(() => {
                setLoading(false)
            }, 3000)

            if (!loading) {
                setStatsClients(dataApi.stats_clients)
                setStatsPartners(dataApi.stats_partners)
            }

        } catch {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchYourFurniActivityList()
    }, [])

    return { statsClients, StatsPartners, loading }
}

export default useYourFurniActivityList