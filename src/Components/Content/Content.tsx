import { useTypeSelector } from "../../Hooks/useTypeSelector"
import { Header } from "../Header/Header"
import { Preloader } from "../Preloader/Preloader"
import { Welcome } from "../Welcome/Welcome"
import { YourFurniActivity } from "../YourFurniActivity/YourFurniActivity"

export const Content: React.FC = () => {
    const { isloadingId } = useTypeSelector(state => state.data)
    
    if (isloadingId === 'loading') {
        return (
            <>
                <Preloader />
            </>
        )
    }
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