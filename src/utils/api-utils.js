const BACK_END_URL = 'https://taurus-backend.herokuapp.com/';


export async function getTwits(symbol) {
    const response = request.get(`${BACK_END_URL}/twits?search=${symbol}`);

    return response.body;
}
export async function getCurrentStockPrice(symbol) {
    const response = request.get(`${BACK_END_URL}/currentprice?search=${symbol}`);

    return response.body;
}
export async function getStockPriceHistory(symbol, resolution, toDate, fromDate) {
    const response = request.get(`${BACK_END_URL}/pricehistory?symbol=${symbol}&resolution=${resolution}&to=${toDate}&from=${fromDate}`);

    return response.body;
}



