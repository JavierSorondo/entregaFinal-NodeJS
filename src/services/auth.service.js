const USER = {
    email: 'admin@example.com',
    password: 'password123'
};

export default async function validateCredentials(email, password) {
    return email === USER.email && password === USER.password;
};
console.log("auth service cargado correctamente");
