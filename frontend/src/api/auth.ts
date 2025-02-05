import api from "./api";

export const loginUser = async (login: string, password: string) => {
    const response = await api.post('/auth/login', { login, password });
    const token = {
        user: response.data.login,
        token: response.data.token
    }
    localStorage.setItem("token", JSON.stringify(token));
    console.log(response.data)
    return response.data;
};

export const registerUser = async (username: string, login: string, password: string) => {
    const response = await api.post('/auth/register', { username, login, password });
    console.log(response.data)
    return response.data;
};
