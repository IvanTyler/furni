import style from './ContactRoles.module.scss'

export const ContactRoles: React.FC = () => {
    return (
        <ul className={style.contactRolesList}>
            <li className={style.contactRolesList__item}>
                <h3 className={style.contactRolesList__title}>Clients</h3>
                <span className={style.contactRolesList__transitionChapter}></span>
                <span className={style.contactRolesList__count}>1</span>
            </li>
            <li className={style.contactRolesList__item}>
                <h3 className={style.contactRolesList__title}>Parntners</h3>
                <span className={style.contactRolesList__transitionChapter}></span>
                <span className={style.contactRolesList__count}>0</span>
            </li>
            <li className={style.contactRolesList__item}>
                <h3 className={style.contactRolesList__title}>Subpartnetrs</h3>
                <span className={style.contactRolesList__transitionChapter}></span>
                <span className={style.contactRolesList__count}>247</span>
            </li>
            <li className={style.contactRolesList__item}>
                <h3 className={style.contactRolesList__title}>Earnings</h3>
                <span className={style.contactRolesList__transitionChapter}></span>
                <span className={style.contactRolesList__count}>468,340 AED</span>
            </li>
        </ul>
    )
}