function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper'),
          priceEl = cartWrapper.querySelectorAll('.price__currency'),
          totalPriceEl = document.querySelector('.total-price');
          

    let priceTotal = 0;

    priceEl.forEach((e) => {
        const amountEl = e.closest('.cart-item').querySelector('[data-counter]');
              

        priceTotal += parseInt(e.innerText) * parseInt(amountEl.innerText);

    });

    totalPriceEl.innerText = priceTotal;

}