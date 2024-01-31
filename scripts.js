// << Event Listeners >>
document.addEventListener("DOMContentLoaded", function() {
    const items = ['item0', 'item1', 'item2', 'item3', 'item4'];
    items.forEach(itemId => {
        setupCounter(itemId, `${itemId}-USD`);
    });
    updateOnPageLoad();
});

// << Variables >>
let itemQuantities = {
    'item0': 0, // White hats
    'item1': 0, // Black hats
    'item2' : 0, // Beige hats 
    'item3' : 0, // Black and White hats
    'item4' : 0 // Blue hats
};


// << Functions >>
    //Handles the counter inputs on each item
function setupCounter(itemId, colorRef) {
    // Attach event listeners to buttons (assuming button IDs follow a consistent naming convention)
    const increaseButton = document.getElementById(`qIncrease-${itemId}`);
    const decreaseButton = document.getElementById(`qDecrease-${itemId}`);
    const counterInput = document.getElementById(`counter-${itemId}`);
    
    increaseButton.addEventListener('click', () => changeQuantity(itemId, 1));
    decreaseButton.addEventListener('click', () => changeQuantity(itemId, -1));
    counterInput.addEventListener('input', (e) => updateQuantities(itemId, parseInt(e.target.value) || 0));
}

    //Updates the counters on each item
function changeQuantity(itemId, change) {
    let currentCount = itemQuantities[itemId] + change;
    currentCount = Math.max(0, currentCount); // Prevent negative values
    itemQuantities[itemId] = currentCount;
    document.getElementById(`counter-${itemId}`).value = currentCount;
    
    updateAll();
}


function updateQuantities(itemId, newQuantity) {
    itemQuantities[itemId] = newQuantity;
    updateAll();
}

function updateAll() {
    updateURL();
    adjustProgressBar();
}

function updateURL() {
    const checkoutButton = document.getElementById('checkout-button');
    const url = new URL(checkoutButton.href);
    const searchParams = url.searchParams;

    // Iterate over item quantities and update URL parameters
    Object.entries(itemQuantities).forEach(([itemId, quantity], index) => {
        if (quantity > 0) {
            const itemNumber = itemId.replace('item', '');
            searchParams.set(`subscription_items[item_price_id][${itemNumber}]`, `richardson112-${itemId}-USD`);
            searchParams.set(`subscription_items[quantity][${itemNumber}]`, quantity.toString());
        } else {
            searchParams.delete(`subscription_items[item_price_id][${itemNumber}]`);
            searchParams.delete(`subscription_items[quantity][${itemNumber}]`);
        }
    });

    // Update the checkout button's href attribute with the new URL
    checkoutButton.href = url.toString();
}


function adjustProgressBar() {
    // Calculate the total quantity of all items
    const totalQuantity = Object.values(itemQuantities).reduce((total, qty) => total + qty, 0);
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${Math.min(totalQuantity / 36, 1) * 100}%`;
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


