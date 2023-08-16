import { useTypeSelector } from "../../Hooks/useTypeSelector"
import { Header } from "../Header/Header"
import { YourFurniActivity } from "../YourFurniActivity/YourFurniActivity"

export const Content: React.FC = () => {
    const { isLoadingAuth } = useTypeSelector(state => state.data)
    
    return (
        <>
            <Header />
            <YourFurniActivity />
        </>
    )
}