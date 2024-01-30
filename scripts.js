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
    'item2' : 0, // Black and White hats
    'item3' : 0, // Beige hats
    'item4' : 0 // Blue hats
};


//Generate dynamic content
function createQuantitySelect(itemRef) {
    return `
        <div class="quantity-select">
            <button class='decrease-quantity' id='qDecrease-${itemRef}'>-</button>
            <input type="number" class="quantity-counter" id='counter-${itemRef}' value="0" min="0">
            <button class='increase-quantity' id='qIncrease-${itemRef}'>+</button>
        </div>
    `;
}
// Loop through item IDs and generate content for each container
for (let i = 0; i < 15; i++) {
    let itemRef = `item${i}`;
    document.getElementById(`container-${itemRef}`).innerHTML = createQuantitySelect(itemRef);
}



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


