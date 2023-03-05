let inputRange = document.getElementById('range-views');
let slider = document.querySelector('.slider');
let butSlider = document.querySelector('button');



const billingAndPrice = inputRange.oninput = () => {
    let pageviews = document.querySelector('.pageviews');
    let spanPrice = document.querySelector('.span-price');
    let outputRange = document.querySelector('#output-value');
    outputRange = Number(inputRange.value);


    // Monthly Billing
    if (outputRange === 1 && butSlider.classList.contains('slider-yearly') === false) {
        pageviews.innerHTML = '10K Pageviews'
        spanPrice.innerHTML = '$8.00 '
    }
    else if (outputRange === 2 && butSlider.classList.contains('slider-yearly') === false) {
        pageviews.innerHTML = '50K Pageviews'
        spanPrice.innerHTML = '$12.00 '
    } else if (outputRange === 3 && butSlider.classList.contains('slider-yearly') === false) {
        pageviews.innerHTML = '100K Pageviews'
        spanPrice.innerHTML = '$16.00 '
    } else if (outputRange === 4 && butSlider.classList.contains('slider-yearly') === false) {
        pageviews.innerHTML = '500K Pageviews'
        spanPrice.innerHTML = '$24.00 '
    } else if (outputRange === 5 && butSlider.classList.contains('slider-yearly') === false) {
        pageviews.innerHTML = '1M Pageviews'
        spanPrice.innerHTML = '$36.00 '
    }


    // Yearly Billing
    if (outputRange === 1 && butSlider.classList.contains('slider-yearly')) {
        pageviews.innerHTML = '10K Pageviews'
        spanPrice.innerHTML = '$6.00 '
    }
    else if (outputRange === 2 && butSlider.classList.contains('slider-yearly')) {
        pageviews.innerHTML = '50K Pageviews'
        spanPrice.innerHTML = '$9.00 '
    } else if (outputRange === 3 && butSlider.classList.contains('slider-yearly')) {
        pageviews.innerHTML = '100K Pageviews'
        spanPrice.innerHTML = '$12.00 '
    } else if (outputRange === 4 && butSlider.classList.contains('slider-yearly')) {
        pageviews.innerHTML = '500K Pageviews'
        spanPrice.innerHTML = '$18.00 '
    } else if (outputRange === 5 && butSlider.classList.contains('slider-yearly')) {
        pageviews.innerHTML = '1M Pageviews'
        spanPrice.innerHTML = '$27.00 '
    }
}

// Slider
slider.addEventListener('click', () => {
    butSlider.classList.toggle('slider-yearly');
    billingAndPrice();
});