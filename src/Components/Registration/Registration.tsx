import FormUserLogin from "../FormUserLogin/FormUserLogin"

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