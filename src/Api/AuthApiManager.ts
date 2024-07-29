import ToDoAPI from "./ToDoAPI";

export const apiRegister = (login: string, password: string) => {
    ToDoAPI.post("/signup", {"login": login, "password": password})
}

export const apiLogin = async (login: string, password: string): Promise<string | void> => {
    let token = "";
    try {
        await ToDoAPI.post("/signin", {"login": login, "password": password})
        .then(response => {
            token = response.data.accessToken;
        });
        return token;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        return "";
    }
};

