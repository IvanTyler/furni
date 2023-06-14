import { FormUserLogin } from "../FormUserLogin/FormUserLogin"

export const LetsGetStartedForm: React.FC = () => {

    return (
        <FormUserLogin
            title={'Let’s get started'}
            isShowElement={false}
            isShowInputPassword={true}
            isShowInputEmail={true}
            textButton={'Continue'}
        />
    )
}