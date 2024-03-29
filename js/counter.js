window.addEventListener('click', (e) => {

    let counter;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (e.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            e.target.closest('.cart-item').remove();

            //  Отображение статуса корзины Пустая / Полная
            toggleCartstatus();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();
        }
    }

    // Проверяем клин на + или - внутри корзины

    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

});