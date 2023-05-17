import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store/Store";

export const useAppDispath = () => useDispatch<AppDispatch>()
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector