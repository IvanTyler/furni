import { DefaultPage } from '../DefaultPage/DefaultPage'
import style from './Overview.module.scss'

interface IDefaultPageProps {
    img: string;
}

export const Overview: React.FC<IDefaultPageProps> = ({ img }) => {
    return (
        <div>
            <DefaultPage img={img} />
        </div>
    )
}