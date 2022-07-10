// maximum speed up to 70km/h
// each 5km/h above the limit, you earn 1 point
// Math.floor()
// if points < 12 -> driving license canceled

checkSpeed(130)

function checkSpeed(speed) {
    const maxSpeed = 70;
    const kmhForPoints = 5;
    if (speed <= maxSpeed)
        console.log('Ok');
    else {
        const points = Math.floor((speed - maxSpeed) / kmhForPoints);
        if (points >= 12)
            console.log('Driving license canceled')
        else
            console.log('points', points)
    }
}