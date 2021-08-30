function arrayCount(targetArray) {
    let totals = [];
    for(let i = 0; i < targetArray.length; i++) {
        let index = contains(totals, targetArray[i]);
        //Checks if number doesn't exist in totals array, if so adds object with number and count
        if(index === -1) {
            totals.push({ number: targetArray[i], count: 1 });
        } else {
            totals[index].count++;
        }
    }
    return totals;
}

//checks if a number is in an array
function contains(array, number) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].number === number) {
            return i;
        }
    }
    return -1;
}

function printArray(array) {
    array.forEach(obj => {
        console.log("Number: " + obj.number + ", Count: " + obj.count);
    })
}

const sampleArray = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4,5,6,7,8,9,0,1,2,3,5,6,7,9,0,6,6,6,6];

const totalsArray = arrayCount(sampleArray);

//prints array of objects

printArray(totalsArray);