// << Event Listeners >>
document.addEventListener("DOMContentLoaded", function() {
    setupCounter('item0', 'richardson112-white-USD'); // For white hats
    setupCounter('item1', 'richardson112-black-USD'); // For black hats
    
    updateOnPageLoad();
});

// << Variables >>
let progressTotalHats = 0; //Tracks total hats
let whiteHats = 0; //Tracks total white hats
let blackHats = 0; //Tracks total black hats
let blackWhiteHats = 0;
let beigeHats = 0;
let blueHats = 0;

// << Functions >>
function setupCounter(itemId, colorRef) {
		// Increase quantity button
    document.getElementById(`qIncrease-${itemId}`).addEventListener('click', function() {
        changeQuantity(itemId, 1, colorRef);
    });

    // Decrease quantity button
    document.getElementById(`qDecrease-${itemId}`).addEventListener('click', function() {
        changeQuantity(itemId, -1, colorRef);
    });

    // Event listener for manual input
    document.getElementById(`counter-${itemId}`).addEventListener('input', function(e) {
        const newQuantity = parseInt(e.target.value, 10);
        const validQuantity = isNaN(newQuantity) ? 0 : Math.max(0, newQuantity); // Ensure quantity is not negative
        e.target.value = validQuantity; // Update the input with the validated value
        updateCounterDirectly(itemId, validQuantity, colorRef);
    });
}

function changeQuantity(itemId, change, colorRef) {
    const counterElement = document.getElementById(`counter-${itemId}`);
    let currentCount = parseInt(counterElement.value);

    currentCount += change;
    currentCount = Math.max(0, currentCount);
    counterElement.value = currentCount;

    updateQuantities(itemId, currentCount, colorRef);
}

function updateQuantities(itemId, newQuantity, colorRef) {
    let difference = newQuantity - (itemId === 'item0' ? whiteHats : blackHats);

    if (itemId === 'item0') {
        whiteHats = newQuantity;
    } else {
        blackHats = newQuantity;
    }

    updateURL();
    adjustProgressBar(difference);
}

// Additional function to handle direct counter updates from manual input
function updateCounterDirectly(itemId, newQuantity, colorRef) {
    let difference = newQuantity - (itemId === 'item0' ? whiteHats : blackHats);

    // Update the total count for white or black hats
    if (itemId === 'item0') {
        whiteHats = newQuantity;
    } else {
        blackHats = newQuantity;
    }

    updateURL();
    adjustProgressBar(difference); // Adjust the progress bar by the difference
}

function updateURL() {
    const checkoutButton = document.getElementById('checkout-button');
    const url = new URL(checkoutButton.href);
    const searchParams = url.searchParams;

    // Set the main product quantity
    const totalHats = whiteHats + blackHats;
    searchParams.set('subscription_items[quantity][0]', totalHats.toString());

    // Update white hat color option in URL
    if (whiteHats > 0) {
        searchParams.set('subscription_items[item_price_id][1]', 'richardson112-white-USD');
        searchParams.set('subscription_items[quantity][1]', whiteHats.toString());
    } else {
        searchParams.delete('subscription_items[item_price_id][1]');
        searchParams.delete('subscription_items[quantity][1]');
    }

    // Update black hat color option in URL
    if (blackHats > 0) {
        searchParams.set('subscription_items[item_price_id][2]', 'richardson112-black-USD');
        searchParams.set('subscription_items[quantity][2]', blackHats.toString());
    } else {
        searchParams.delete('subscription_items[item_price_id][2]');
        searchParams.delete('subscription_items[quantity][2]');
    }

    // Update the checkout button's href attribute with the new URL
    checkoutButton.href = url.toString();
}

function adjustProgressBar(change) {
    // Update the total number of hats.
    progressTotalHats += change;
    // Make sure the total doesn't go below 0 or above the maximum.
    progressTotalHats = Math.max(0, Math.min(progressTotalHats, 36));

    const progressBar = document.getElementById('progressBar');
    let percentage = (progressTotalHats / 36) * 100;

    // Set the width of the progress bar.
    progressBar.style.width = percentage + '%';
}

function updateOnPageLoad() {
    ['item0', 'item1', 'item2', 'item3', 'item4'].forEach(itemId => {
        const counterElement = document.getElementById(`counter-${itemId}`);
        const currentCount = parseInt(counterElement.value, 10);
        if (!isNaN(currentCount) && currentCount > 0) {
            if (itemId === 'item0') {
                whiteHats = currentCount;
            } else if (itemID === 'item1') {
                blackHats = currentCount;
            }
            adjustProgressBar(currentCount); // Adjust the progress bar for each item
        }
    });
    updateURL(); // Update the URL based on the current quantities
}
