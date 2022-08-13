// 01. Convert Radian to Degree 

function radianToDegree(radian) {
    const degree = radian * (180 / Math.PI);
    const degreeFixed = degree.toFixed(2);
    if (typeof radian === "string") {
        return "Please give a valid input";
    }
    return degreeFixed;
}


// const myRadian = radianToDegree(10);
// console.log(myRadian)


// 02. check whether the given file name is a javascript file or not


function isJavaScriptFile(String) {
    if (typeof String === "string") {

        let lastThree = String.slice(String.length - 3);
        if (lastThree === ".js") {
            return true;
        } else {
            return false;
        }

    } else {
        return "Please give a valid string";
    }
}

// const myFileName = isJavaScriptFile("app.js");
// console.log(myFileName);



// 03. calculate the total oil price that i have to pay


function oilPrice(diesel = 0, petrol = 0, octane = 0) {
    const OneLitterDiesel = 114;
    const OneLitterPetrol = 130;
    const OneLitterOctane = 135;
    if (typeof diesel === "number" && typeof petrol === "number" && typeof octane === "number") {
        const dieselPrice = OneLitterDiesel * diesel;
        const petrolPrice = OneLitterPetrol * petrol;
        const octanePrice = OneLitterOctane * octane;

        const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
        return totalOilPrice;
    } else {
        return "Please give a valid number"
    }


}

// const MyOilPrice = oilPrice(0, 2, 3);
// console.log(MyOilPrice);


// 0.4 public Bus Fare

function publicBusFare(numbers) {
    if (typeof numbers === "number") {
        const busNumber = 50;
        const carNumber = 11;
        const publicBusVara = 250;
        const restbusNumber = numbers % busNumber;
        const restcarNumber = restbusNumber % carNumber;
        if (numbers <= 50) {
            return 0;
        }
        else if (numbers > 50) {
            let restPeopleVara = restcarNumber * publicBusVara;
            return restPeopleVara;
        }
    } else {
        return "give a valid number";
    }
}

// const people = publicBusFare(123);
// console.log(people)


// 0.5 Best Friend Check

const names1 = {
    name: "Kamrul",
    friend: "Rakib",
}
const names2 = {
    name: "Rakib",
    friend: "Kamrul",
}

function isBestFriend(friend1, friend2) {
    if (typeof friend1 === "object" && typeof friend2 === "object") {
        if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please give a valid object";
    }
}

// const givenObject = isBestFriend(names1, true);
// console.log(givenObject)





