//
function getSliceAngle(numAttendee){
    const wholeCake = Math.PI * 2; // why, benefit?
    let cakeDivision = wholeCake / numAttendee;
    return cakeDivision;
}

let slice = getSliceAngle(0);
print(slice);

-> infinity issue.

//


function square(num){
    return num * num;
}

const square = (num) => {
    return num * num;
}

