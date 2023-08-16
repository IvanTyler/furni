import { useTypeSelector } from "../../Hooks/useTypeSelector"
import { Header } from "../Header/Header"
import { Welcome } from "../Welcome/Welcome"
import { YourFurniActivity } from "../YourFurniActivity/YourFurniActivity"

export const Content: React.FC = () => {
    const { isLoadingAuth } = useTypeSelector(state => state.data)

    if (isLoadingAuth) {
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