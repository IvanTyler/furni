import { codeCopiedActiveReducer, codeCopiedNotActiveReducer } from "../Reducers/codeCopiedReducer";
import { AppDispatch } from "../Store/Store";

export const codeCopiedAction = () => (dispath: AppDispatch) => {
    dispath(codeCopiedActiveReducer())
    setTimeout(() => dispath(codeCopiedNotActiveReducer()), 3000)
}