function timeBetween(from, to) {
    const MILLISECONDS_IN_HOURS = 3600000;
    return (new Date(to).getTime() - new Date(from).getTime()) / MILLISECONDS_IN_HOURS  + ` full hours between ${from} and ${to}`
}
