// TODO mover a un composable

class Session {
    constructor() {
        const json = JSON.parse(localStorage.getItem('userData'));
        const { name, email, token } = json ||{};

        this.isLogged = Boolean(json);
        this.name = name;
        this.email = email;
        this.token = token;
    }
}

module.exports = Session;