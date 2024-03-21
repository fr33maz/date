function howOld(dateOfBirth) {
    let difference = Date.now() - Date.parse(dateOfBirth);
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);
    return `you are ${years} years old`
}