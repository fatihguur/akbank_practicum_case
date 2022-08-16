function oddishOrEvenish(value) {
    sum = 0;
    while (value > 0) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    if (sum % 2 === 0) {
        console.log("Evenish")
    } else {
        console.log("Oddish");
    }
}

//Test Values
oddishOrEvenish(155);
oddishOrEvenish(5352);
oddishOrEvenish(82561);