import request from 'superagent';
const TOKEN = 'TOKEN';
const BACK_END_URL = 'https://taurus-backend.herokuapp.com';

//USER UTILS
export async function signUpUser(email, password) {
    const response = await request.post(`${BACK_END_URL}/auth/signup`).send({email, password});

    return response.body.token
}

export async function fillUserNameAndDate(username, token) {
    const date = new Date();
    const date_created = date.getTime();
    const response = await request.put(`${BACK_END_URL}/api/updateuser`).send({username, date_created}).set('Authorization', token);
    return response.body
}

export async function loginUser(email, password) {
    const response = await request.post(`${BACK_END_URL}/auth/signin`).send({email, password});

    return response.body.token;
}


// PORTFOLIO UTILS
export async function getUserPortfolio(token) {
    const response = await request.get(`${BACK_END_URL}/api/portfolio`).set('Authorization', token)

    return response.body;
}

export async function addToPortfolio(token, symbol, title, quantity, current_price) {
    const d = new Date();
    const date_purchased = d.getTime();
    const cost = quantity * current_price;
    const response = request.post(`${BACK_END_URL}/api/portfolio`).set('Authorization', token).send({
        symbol, title, quantity, date_purchased, cost, current_price
    })

    return response.body;
}


//WATCH LIST UTILS
export async function getUserWatchList(token) {
    const response = await request.get(`${BACK_END_URL}/api/watchlist`).set('Authorization', token);

    return response.body;
}
export async function addToWatchList(token, symbol, title) {
    const response = await request.post(`${BACK_END_URL}/api/watchlist`).set('Authorization', token).send({
        symbol, title
    });

    return response.body;
}
export async function deleteFromWatchList(token, id) {
    const response = await request.delete(`${BACK_END_URL}/api/watchlist/${id}`).set('Authorization', token);

    return response.body;
}

//local storage functions
export function addUserToLocalStorage(token) {
    localStorage.setItem(TOKEN, token)
}

export function getUserFromLocalStorage() {
    return localStorage.getItem(TOKEN)
}


export async function removeUserFromLocalStorage() {
    localStorage.removeItem(TOKEN)
}