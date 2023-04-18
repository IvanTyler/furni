import style from './Input.module.scss'

interface IInputProps {
    type: string;
    name: string;
    placeholder: string;
    error?: boolean;
}

export const Input: React.FC<IInputProps> = ({ type, name, placeholder, error }) => {
    return (
        <input
            className={style.input}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}