import FormUserLogin from "../FormUserLogin/FormUserLogin"

export const Registration: React.FC = () => {

    return (
        <FormUserLogin
            isShowElement={false}
            isShowInputEmail={true}
            isShowInputPassword={true}
        />
    )
}