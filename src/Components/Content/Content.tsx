import { useTypeSelector } from "../../Hooks/useTypeSelector"
import { Header } from "../Header/Header"
import { Welcome } from "../Welcome/Welcome"
import { YourFurniActivity } from "../YourFurniActivity/YourFurniActivity"

export const Content: React.FC = () => {
    const { isloadingId } = useTypeSelector(state => state.data)

    if (isloadingId === 'ok') {
        return (
            <>
                <Header />
                <YourFurniActivity />
            </>
        )
    }
    
    return (
        <>
            <Welcome />
        </>
    )
}
