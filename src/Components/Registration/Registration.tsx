import { useEffect } from "react"
import { backToRegistration, backToRegistrationClear } from "../../Redux/Reducers/SliceReducers"
import { useAppDispatch } from "../../Redux/Store/Store"
import FormUserLogin from "../FormUserLogin/FormUserLogin"
import { useTypeSelector } from "../../Hooks/useTypeSelector"

export const Registration: React.FC = () => {

    return (
        <FormUserLogin
            alreadyHaveAnAccount={true}
            isShowElement={false}
            isShowInputEmail={true}
            isShowInputPassword={true}
        />
    )
}