import { useEffect } from 'react';
import { DefaultPage } from '../DefaultPage/DefaultPage'
import style from './Overview.module.scss'
import { dataActionOverview } from '../../Redux/Actions/dataActionOverview';
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { Preloader } from '../Preloader/Preloader';
import { dataActionOverviewTab } from '../../Redux/Actions/dataActionOverviewTab';

interface IDefaultPageProps {
    img: string;
}

export const Overview: React.FC<IDefaultPageProps> = ({ img }) => {
    const dispath = useAppDispath()
    const { isloading, isloadingId } = useTypeSelector(state => state.data)

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