export function createConvertStartOfDay(){
    const start = new Date().setHours(0,0,0,0);
    const setter = start/ 1000;
    return setter;
}

export function getCurrentTimeMilli() {
    return (Math.round(new Date().getTime() / 1000));
}

export function generateInterval(start,end){
    let oneDay = 86400;
    let oneWeek = oneDay * 7;
    const difference = end - start;
    if(difference <= oneDay){
        return 15;
    } else if (difference > oneDay && difference <= oneDay * 30){
        return 60;
    } else if(difference > oneDay * 30){
        return 'D';
    }
}