function howFarTheDate(date) {
    if(Date.now() > Date.parse(date)) {
        return `The date you enter is in the past, please enter future date`
    }
    let futureDate = Date.parse(date) - Date.now();
    let seconds = Math.floor(futureDate / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes%=60;
    /** I don't know wht the time is working this way, but it counts the next day not from midnight but
     * noon and that's why hours + 12 and days - 1
     */
    hours = (hours % 24) + 12;
    days -=1;
    return {days, hours, minutes, seconds}
}