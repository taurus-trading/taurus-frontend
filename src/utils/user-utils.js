import { request } from 'superagent'
const USER = 'USER';
const BACK_END_URL = 'https://taurus-backend.herokuapp.com/';

export async function signUpUser(email, password) {
    const response = await request.post(`${BACK_END_URL}/auth/signup`).send({email, password});

    return response.body
}

export async function fillUserNameAndDate(user_name, token) {
    const date = new Date();
    const inMillis = date.getTime();
    const response = await request.post(`${BACK_END_URL}/updateuser`).send({user_name, inMillis, token});

    return response.body
}

export async function loginUser(email, password) {
    const response = await request.post(`${BACK_END_URL}/auth/signin`).send({email, password});

    return response.body;
}

export async function getUserPortfolio(token) {
    const response = request.get(`${BACK_END_URL}/api/portfolio`)

    return response.body;
}

export async function getUserWatchList(token) {
    
}

//local storage functions
export async function addUserToLocalStorage(user) {
    localStorage.setItem(USER, user)
}

export async function getUserFromLocalStorage() {
    return localStorage.getItem(USER)
}


export async function removeUserFromLocalStorage() {
    localStorage.removeItem(USER)
}