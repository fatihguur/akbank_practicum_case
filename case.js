function oddishOrEvenish(value) {
    summary = 0;
    while (value > 0) {
        summary += value % 10;
        value = Math.floor(value / 10);
    }

    if (summary % 2 === 0) {
        console.log("Evenish")
    } else {
        console.log("Oddish");
    }
}

oddishOrEvenish(155);
oddishOrEvenish(5352);
oddishOrEvenish(82561);