import { useEffect } from 'react';
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { dataActionOverview } from '../../Redux/Actions/dataActionOverview';
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { Preloader } from '../Preloader/Preloader';

interface IDefaultPageProps {
    img: string;
}

export const Overview: React.FC<IDefaultPageProps> = ({ img }) => {
    const dispath = useAppDispath()
    const { isloading } = useTypeSelector(state => state.data)

    useEffect(() => {
        dispath(dataActionOverview())
    }, [])

    if (isloading === 'loading')
        return (
            <Preloader />
        )

    return (
        <div>
            <DefaultPage img={img} />
        </div>
    )
}