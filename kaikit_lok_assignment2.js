const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 500 },
];

const double = (itemsObject) => {
    let newArray = [];

    for (var i = 0; i < itemsObject.length; i++) {
        newArray[i] = itemsObject[i];

    }

    for (var i = 0; i < newArray.length; i++) {
        newArray[i].quantity *= 2;
        newArray[i].price *= 2;
    }
    return newArray;
}

const result1 = double(itemsObject);
console.log(result1);

const filter = (itemsObject) => {
    let newArray = [];

    for (var i = 0; i < itemsObject.length; i++) {
        if (itemsObject[i].quantity > 2 && itemsObject[i].price > 300) {
            newArray.push(itemsObject[i]);
        }
    }
    return newArray;
}

const result2 = filter(itemsObject);
console.log(result2);

const calculate = (itemsObject) => {
    let newArray = [];

    for (var i = 0; i < itemsObject.length; i++) {
        newArray[i] = itemsObject[i].quantity * itemsObject[i].price;
    }
    return newArray;
}

const result3 = calculate(itemsObject);
console.log(result3);

const string = 
 ' Perhaps The Easiest-to-understand   Case    For Reduce Is   To Return The Sun of   ALL The Elements In   An Array  ';

 const remove = (str) => {
     str = str.replace(/[^a-zA-z ]/g, " ");
     str = str.replace(/\s+/g,' ').trim();
     str = str.toLowerCase();
     return str;
 }

 const test = remove(string);

 console.log(test);