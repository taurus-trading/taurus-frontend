import { request } from 'superagent'
const USER = 'USER';
const BACK_END_URL = 'https://taurus-backend.herokuapp.com/';

//USER UTILS
export async function signUpUser(email, password) {
    const response = await request.post(`${BACK_END_URL}/auth/signup`).send({email, password});

    return response.body
}

export async function fillUserNameAndDate(user_name, token) {
    const date = new Date();
    const inMillis = date.getTime();
    const response = await request.post(`${BACK_END_URL}/updateuser`).send({user_name, inMillis}).set('Authorization', token);

    return response.body
}

export async function loginUser(email, password) {
    const response = await request.post(`${BACK_END_URL}/auth/signin`).send({email, password});

    return response.body;
}


// PORTFOLIO UTILS
export async function getUserPortfolio(token) {
    const response = request.get(`${BACK_END_URL}/api/portfolio`).set('Authorization', token)

    return response.body;
}

export async function addToPortfolio(token, symbol, title, date_purchased, quantity, current_price) {
    const d = new Date();
    const date_purchased = d.getTime();
    const cost = quantity * current_price;
    const response = request.post(`${BACK_END_URL}/api/portfolio`).set('Authorization', token).send({
        symbol, title, quantity, date_purchased, cost, quantity, current_price
    })

    return response.body;
}


//WATCH LIST UTILS
export async function getUserWatchList(token) {
    const response = request.get(`${BACK_END_URL}/api/watchlist`).set('Authorization', token);

    return response.body;
}
export async function addToWatchList(token, symbol, title) {
    const response = request.post(`${BACK_END_URL}/api/watchlist`).set('Authorization', token).send({
        symbol, title
    });

    return response.body;
}
export async function deleteFromWatchList(token, id) {
    const response = request.delete(`${BACK_END_URL}/api/watchlist/${id}`).set('Authorization', token);

    return response.body;
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