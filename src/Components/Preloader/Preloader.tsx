import style from './Preloader.module.scss'

export const Preloader: React.FC = () => {
    return (
        <div className={style.preloaderWrapper}>
            <div className={style.ldsRipple}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}