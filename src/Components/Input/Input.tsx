import style from './Input.module.scss'
import cx from 'classnames'

interface IInputProps {
    type: string;
    name: string;
    placeholder: string;
    valueInput: string;
    onChangeInput(inputChangeValue: React.ChangeEvent<HTMLInputElement>): void;
    error?: boolean;
}

export const Input: React.FC<IInputProps> = (
    { 
        type,
        name,
        placeholder,
        onChangeInput,
        valueInput,
        error }
) => {
    return (
        <input
            className={error ? cx(style.input, style.error) : style.input}
            type={type}
            name={name}
            placeholder={placeholder}
            value={valueInput}
            onChange={onChangeInput}
        />
    )
}