function kilometerToMeter(k) {
    var meter = 1000;

    // check the input value number or other
    if (k == parseInt(k)) {
        meter = meter * k;
        return meter;
    } else {
        console.log("error input");
    }

}


function budgetCalculator(w, p, l) {

    if (w == parseInt(w) && p == parseInt(p) && l == parseInt(l)) {
        // watch price
        var watch = 50;
        watch = watch * w;

        // phone price
        var phone = 100;
        phone = phone * p;

        // laptop price
        var laptop = 500;
        laptop = laptop * l;

        // all product price
        var result = watch + phone + laptop;
        // return result;

    }
    else {
        console.log("Error input");
    }
    return result;
}



function hotelCost(d) {
    var price = 0;
    if (d <= 10) {
        price = d * 100;

    }
    if (d <= 20) {
        var first10Price = 10 * 100;
        var remaining = d - 10;
        var second10Price = remaining * 80;
        price = first10Price + second10Price;

    }
    else {
        var first10Price = 10 * 100;
        var second10Price = 10 * 80;
        var remaining = d - 20;
        var third10Price = remaining * 50;
        price = first10Price + second10Price + third10Price;
    }
    return price;
}



var friendName = ["afnan", "abdullah", "abu", "kalam"];


function megaFriend(arr) {
    if (arr != parseInt(arr) ) {
        var longestName = arr[0];
        for (i = 0; i < arr.length; i++) {
            var allName = arr[i];

            // check who is longest name Friend
            if (allName.length > longestName.length) {
                longestName = allName;
            }
        }
        return longestName;
    }
    else {
        console.log("error input");
    }
}