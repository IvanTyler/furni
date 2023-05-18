import { IDataApi } from "../../Interfaces/DataApi"
import { FormUserLogin } from "../FormUserLogin/FormUserLogin"

interface IFormUserLoginProps {
    setGetData(data: IDataApi): void
    setIsLoading(item: any): void
}

export const Registration: React.FC<IFormUserLoginProps> = ({ setGetData, setIsLoading }) => {

    return (
        <FormUserLogin
            setGetData={setGetData}
            setIsLoading={setIsLoading}
            isShowElement={true}
        />
    )
}