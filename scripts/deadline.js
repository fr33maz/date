function howManyWorkingDaysBeforeDeadline(date) {
    let futureDate = Date.parse(date) - Date.now();
    let seconds = Math.floor(futureDate / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let workingDays = weeks * 5;
    /** "working days - 1" is because we don`t count the deadline day, there's no time to work, we have to
     * hand over the project to our client.
     */
    return new Date(date).getDay() > 5 ? 4 + workingDays : new Date(date).getDay() + workingDays - 1;
}