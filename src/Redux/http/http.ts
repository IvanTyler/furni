import axios from "axios";

// export const API_URL = 'https://partner.furni.ae'

const $api = axios.create({
    withCredentials: true,
})

$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.post<any>(`api/refresh`, {
                    token: localStorage.getItem('token'),
                    refresh_token: localStorage.getItem('refresh_token'),
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                return $api.request(originalRequest);
            } catch (err) {
                console.log('Пользователь не авторизован');
            }
        }

        throw error;
    }
)

export default $api;