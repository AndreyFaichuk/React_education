const parseTime = secs => {
    let sec = secs % 60
    let min = (secs - sec) / 60

    if(sec === 60) {
        min = 1
    }

    return `${min >= 10 ? min : '0' + min} : ${sec >= 10 ? sec : '0' + sec}`
}

export default parseTime