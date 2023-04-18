import style from './Container.module.scss'

interface IContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}