const toggleCartstatus = (() => {
    const cartWrapper = document.querySelector('.cart-wrapper'),
          cartEmptyBage = document.querySelector('[data-cart-empty]'),
          orderForm = document.querySelector('#order-form');      

    if (cartWrapper.children.length > 0) {
        cartEmptyBage.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBage.classList.remove('none');
        orderForm.classList.add('none');
    }
});