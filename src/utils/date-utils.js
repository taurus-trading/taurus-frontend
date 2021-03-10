export function createConvertStartOfDay(){
    const start = new Date().setHours(0,0,0,0);
    const setter = start/ 1000;
    return setter;
}

export function getCurrentTimeMilli() {
    return (Math.round(new Date().getTime() / 1000));
}