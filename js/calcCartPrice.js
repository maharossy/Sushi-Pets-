function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper'),
          priceEl = cartWrapper.querySelectorAll('.price__currency'),
          totalPriceEl = document.querySelector('.total-price'),
          deliveryCost = document.querySelector('.delivery-cost'),
          cartDelivery = document.querySelector('[data-cart-delivery]');
          

    let priceTotal = 0;

    priceEl.forEach((e) => {
        const amountEl = e.closest('.cart-item').querySelector('[data-counter]');
              

        priceTotal += parseInt(e.innerText) * parseInt(amountEl.innerText);

    });

    totalPriceEl.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽'
    }

}