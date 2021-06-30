const parseTime = secs => {
    let hour = Math.floor(secs / 3600);
    let min = Math.floor(secs % 3600 / 60);
    let sec = Math.floor(secs % 3600 % 60);

    if(sec === 60) min = 1
    if(min === 60) hour = 1

    return `${hour >= 10 ? hour : '0' + hour} : ${min >= 10 ? min : '0' + min} : ${sec >= 10 ? sec : '0' + sec}`
}

export default parseTime