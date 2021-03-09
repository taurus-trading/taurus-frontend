import request from 'superagent';

const BACK_END_URL = 'https://taurus-backend.herokuapp.com';
// const BACK_END_URL = 'https://localhost:3000';



export async function getTwits(symbol) {
    const response = await request.get(`${BACK_END_URL}/twits?symbol=${symbol}`);

    return response.body;
}
export async function getTrending() {
    const response = await request.get(`${BACK_END_URL}/trending`);

    return response.body;
}

export async function getCurrentStockPrice(symbol) {
    const response = await request.get(`${BACK_END_URL}/currentprice?search=${symbol}`);

    return response.body;
}
export async function getStockPriceHistory(symbol, resolution, toDate, fromDate) {
    const response = await request.get(`${BACK_END_URL}/pricehistory?symbol=${symbol}&resolution=${resolution}&to=${toDate}&from=${fromDate}`);

    return response.body;
}
export async function searchStocks(query) {
    const response = await request.get(`${BACK_END_URL}/search?search=${query}`);

    return response.body;
}







