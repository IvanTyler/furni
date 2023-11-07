import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useTypeSelector } from "../../Hooks/useTypeSelector";

interface IProtectedRouteProps {
    children: any
}

export function ProtectedRoute({ children }: IProtectedRouteProps) {
    const { isLoadingAuth } = useTypeSelector(state => state.data)

    const getTokenSessionStorage = localStorage.getItem('token')


    if (!isLoadingAuth) {
        return <Navigate to="/login" />;
    }
    return children;
};