function updateProduct(click, bestpricee, extraram, extrastorage, deliveryA, total) {

    const bestprice = document.getElementById(bestpricee);
    const bestpriceText = bestprice.innerText;
    const bestpriceAmount = parseInt(bestpriceText);
    console.log(bestpriceAmount);

    //handle memory Cost 

    document.getElementById(click)
    const memoryCost = document.getElementById(extraram);
    if (click == 'memory-price-stable') {
        memoryCost.innerText = 0;
    }
    else if (click == 'memory-price-increase') {

        memoryCost.innerText = 180;
    }
    const memoryCostAmount = parseInt(memoryCost.innerText);
    console.log(memoryCostAmount);

    // handle externel memory or SSD slot

    const extraStorage = document.getElementById(extrastorage);
    if (click == 'extra-memory-default') {
        extraStorage.innerText = 0;
    }
    else if (click == 'extra-memory-small') {

        extraStorage.innerText = 100;
    }
    else if (click == 'extra-memory-large') {
        extraStorage.innerText = 180;
    }
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText);
    console.log(extraStorageAmount);

    // Handle delivery Cost 
    const deliverycharge = document.getElementById(deliveryA);
    if (click == 'delivery-free') {
        deliverycharge.innerText = 0;
    }
    else if (click == 'delivery-paid') {
        deliverycharge.innerText = 20;
    }

    // handle total price


    const deliveryChargeText = deliverycharge.innerText;
    const deliverychargeAmount = parseInt(deliveryChargeText);
    console.log(deliverychargeAmount);

    const oldtotalPrice = document.getElementById(total);
    const priceUpdate = bestpriceAmount + memoryCostAmount + extraStorageAmount + deliverychargeAmount;
    oldtotalPrice.innerText = priceUpdate;
}
document.getElementById('memory-price-stable').addEventListener('click', function () {
    updateProduct('memory-price-stable', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')
})
document.getElementById('memory-price-increase').addEventListener('click', function () {

    updateProduct('memory-price-increase', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')
})
document.getElementById('extra-memory-default').addEventListener('click', function () {
    updateProduct('extra-memory-default', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')
})
document.getElementById('extra-memory-small').addEventListener('click', function () {

    updateProduct('extra-memory-small', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')
})
document.getElementById('extra-memory-large').addEventListener('click', function () {
    updateProduct('extra-memory-large', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')

})
document.getElementById('delivery-free').addEventListener('click', function () {
    updateProduct('delivery-free', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')
})
document.getElementById('delivery-paid').addEventListener('click', function () {
    updateProduct('delivery-paid', 'best-price', 'extra-memory', 'extra-storage', 'delivery-charge', 'total-price')
})
