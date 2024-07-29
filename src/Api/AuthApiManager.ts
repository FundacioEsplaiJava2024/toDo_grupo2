import ToDoAPI from "./ToDoAPI";

export const apiRegister = (login: string, password: string) => {
    ToDoAPI.post("/signup", {"login": login, "password": password})
}

export const apiLogin = async (login: string, password: string): Promise<void> => {
    try {
        await ToDoAPI.post("/signin", {"login": login, "password": password})
        .then(response => {
            localStorage.setItem('accessToken', response.data.accessToken);
        })
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
};