//...Problem Number 1 Sstart
function radianToDegree(Radian) {
    if (typeof Radian == "number") {
        let Radiantodegree = (Radian * 180) / Math.PI;
        let Degree = Radiantodegree.toFixed(2);
        return Degree;
    } else {
        return "Please Enter Radian Number";
    }
}


//...Problem Number 2 Start
function isJavaScriptFile(FileName) {
    if (typeof FileName !== "string") {
        return "Please Type Valid File";
    } else if (FileName.endsWith(".js")) {
        return true;
    } else {
        return false;
    }
}


//...Problem Number 3 Start
function oilPrice(disel, petrol, octane) {
    if (
        typeof disel !== "number" &&
        typeof petrol !== "number" &&
        typeof octane !== "number"
    ) {
        return "Please Enter Disel, petrol, Octane";
    } else {
        let DisselPrice = 114;
        let PetrolPrice = 130;
        let OctanePrice = 135;
        let DiselPerLiter = DisselPrice * disel;
        let PetrolPerLiter = PetrolPrice * petrol;
        let OctanePerLiter = OctanePrice * octane;
        let totaloilPrice = DiselPerLiter + PetrolPerLiter + OctanePerLiter;
        return totaloilPrice;
    }
}



//Problem Number 4 Start
function publicBusFare(Passenger) {
    if (typeof Passenger !== "number") {
        return "Please Enter Total Public Number";
    } else {
        let BusCapasity = 50;
        let MicroBusCapasity = 11;
        let TotalPublicBusPrice = 250;
        let TotalBus = Passenger % BusCapasity;
        let TotalMicroBus = TotalBus % MicroBusCapasity;
        let TotalCost = TotalMicroBus * TotalPublicBusPrice;
        return TotalCost;
    }
}



//...Problem Number 5 Start
let Friendone = {
    name: "Abul",
    friend: "Kabul",
};
let Friendtwo = {
    name: "Kabul",
    friend: "Abul",
};

function isBestFriend(Friendone, Friendtwo) {
    if (
        typeof Friendone.name !== "string" &&
        typeof Friendtwo.friend !== "string" &&
        Friendone.friend !== "string" &&
        Friendtwo.name !== "string"
    ) {
        return "Please Enter Valid Object";
    } else if (
        Friendone.name == Friendtwo.friend &&
        Friendtwo.name == Friendone.friend
    ) {
        return true;
    } else {
        return false;
    }
}

