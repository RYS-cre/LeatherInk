// << Variables >>
const items = [
    'r112-USD-Daily',
    'r112-white-USD',
    'r112-black-USD',
    'r112-greyBirGld-USD',
    'r112-blackWhite-USD',
    'r112-blueKhaki-USD',
    'r112-charNeoGrn-USD',
    'r112-charNeoOrg-USD',
    'r112-charNeoPnk-USD',
    'r112-greyBlack-USD',
    'r112-navy-USD',
    'r112-whiteNavy-USD',
    'r112-greyCharNavy-USD',
    'r112-maroWhite-USD',
    'r112-pnkWhite-USD',
    'r112-gryBirOlv-USD'
];

let itemQuantities = {
    'r112-USD-Daily': 0,
    'r112-white-USD': 0,
    'r112-black-USD': 0,
    'r112-greyBirGld-USD': 0,
    'r112-blackWhite-USD': 0,
    'r112-blueKhaki-USD': 0,
    'r112-charNeoGrn-USD': 0,
    'r112-charNeoOrg-USD': 0,
    'r112-charNeoPnk-USD': 0,
    'r112-greyBlack-USD': 0,
    'r112-navy-USD': 0,
    'r112-whiteNavy-USD': 0,
    'r112-greyCharNavy-USD': 0,
    'r112-maroWhite-USD': 0,
    'r112-pnkWhite-USD': 0,
    'r112-gryBirOlv-USD': 0
};

let itemNames = {
    'r112-USD-Daily': 'MAIN',
    'r112-white-USD': 'White',
    'r112-black-USD': 'Black',
    'r112-greyBirGld-USD': 'Heather Grey /Birch /Amber Gold',
    'r112-blackWhite-USD': 'Black /White',
    'r112-blueKhaki-USD': 'Columbia Blue /Khaki',
    'r112-charNeoGrn-USD': 'Charcoal /Neon Green',
    'r112-charNeoOrg-USD': 'Charcoal /Neon Orange',
    'r112-charNeoPnk-USD': 'Charcoal /Neon Pink',
    'r112-greyBlack-USD': 'Heather Grey /Black',
    'r112-navy-USD': 'Navy',
    'r112-whiteNavy-USD': 'White /Navy',
    'r112-greyCharNavy-USD': 'Grey /Charcoal /Navy',
    'r112-maroWhite-USD': 'Maroon /White',
    'r112-pnkWhite-USD': 'Hot Pink /White',
    'r112-gryBirOlv-USD': 'Heather Grey /Birch /Army Olive'
};

let productImageLinks = {
    'r112-white-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57542d7ad20e0b34d164e_Richardson_112_White_Front_High.jpg',
    'r112-black-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57543d76fa5a3b20691db_Richardson_112_Black_Front_High.jpg',
    'r112-greyBirGld-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57544c110a7bcfd2d11f2_Richardson_112_Heather_Grey-_Birch-_Amber_Gold_Front_High.jpg',
    'r112-blackWhite-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57544c110a7bcfd2d1189_Richardson_112_Charcoal-_White_Front_High.jpg',
    'r112-blueKhaki-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57543797f1c5007c1d154_Richardson_112_Columbia_Blue-_Khaki_Front_High.jpg',
    'r112-charNeoGrn-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae4bb3e7a89f03272f6_CharcoalNeonGreen_Front.jpg',
    'r112-charNeoOrg-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae41a3143136599c620_CharcoalNeonOrange_Front.jpg',
    'r112-charNeoPnk-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae4d77cadb4f76f9a93_CharcoalNeonPink_Front.jpg',
    'r112-greyBlack-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae440013c220f2f6cc4_HeatherGreyBlack_Front.jpg',
    'r112-navy-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae405471784ba7a0e6d_Navy_Front.jpg',
    'r112-whiteNavy-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae45536aed2d375dd53_WhiteNavy_Front.jpg',
    'r112-blackWhite-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae35536aed2d375dcec_BlackWhite_Front.jpg',
    'r112-greyCharNavy-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae3d35e93ace2303463_GreyCharcoalNavy_Front.jpg',
    'r112-maroWhite-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae37fe376763bfbb124_MaroonWhite_Front.jpg',
    'r112-pnkWhite-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae3d97bf387d1eaf70b_HotPinkWhite_Front.jpg',
    'r112-gryBirOlv-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae3a24444eabd7c92dd_HeatherGreyBirchArmyOlive_Front.jpg',
    'r112-blueKhaki-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae4da33415f19395cbd_ColumbiaBlueKhaki_Front.jpg'
};

// << Event Listeners >>
    // event listener that Generates the Colour selection divs
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('items-container');

    items.forEach(itemId => {
        if (itemId !== 'r112-USD-Daily') {
            var itemName = (itemNames[itemId]).toString();
            container.appendChild(createQuantitySelectDiv(itemId, productImageLinks[itemId], itemName));
            setupCounter(itemId);
        }
    });
    updateOnPageLoad();
});
    // event listener that changes the text of the progress-text class if the max-width of the window is less than 767px
/*document.addEventListener("DOMContentLoaded", function() {
    // Gets all progress-text class elements
    const progressText = document.getElementsByClassName('progress-text');
    mobileTexts = ['$30/Hat', '$25/Hat', '$23/Hat', '$22/Hat', '$21/Hat']
    // if the max-width of the window is less than 767px, the text of the progress-text class is changed to corrisponding progressText item
    if (matchMedia('(max-width: 767px)').matches ) {
        for (let i = 0; i < progressText.length; i++) {
            progressText[i].innerHTML = mobileTexts[i];
        }
    }
});*/

// << Functions >>
    // Generates the Colour selection divs
function createQuantitySelectDiv(itemId, img_src, itemName) {
    const div = document.createElement('div');
    div.className = 'selection-block';
    div.innerHTML = `
        <img class='card-image' src='${img_src}'>
        <span class="product-name" >${itemName}</span>
        <div class="quantity-select">
            <button class="decrease-quantity" id="qDecrease-${itemId}">-</button>
            <input type="number" class="quantity-counter" id="counter-${itemId}" value="0" min="0">
            <button class="increase-quantity" id="qIncrease-${itemId}">+</button>
        </div>
    `;
    return div;
}
    //Handles the counter inputs on each item
function setupCounter(itemId) {
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
    const baseUrl = 'https://leatherink-test.chargebee.com/hosted_pages/checkout?';
    let url = new URL(baseUrl);
    let searchParams = new URLSearchParams();

    // Calculate the sum of all item quantities except 'r112-USD-Daily'
    let totalQuantity = Object.values(itemQuantities).reduce((total, qty, index) => {
        return index > 0 ? total + qty : total;
    }, 0);
    
    // Set the quantity for 'r112-USD-Daily'
    itemQuantities['r112-USD-Daily'] = totalQuantity;
    searchParams.append('subscription_items[item_price_id][0]', 'r112-USD-Daily');
    searchParams.append('subscription_items[quantity][0]', totalQuantity.toString());

    // Add other items in ascending order
    Object.entries(itemQuantities).forEach(([itemId, quantity], index) => {
        if (quantity > 0 && itemId !== 'r112-USD-Daily') {
            searchParams.append(`subscription_items[item_price_id][${index}]`, itemId);
            searchParams.append(`subscription_items[quantity][${index}]`, quantity.toString());
        }
    });

    // Set the constructed URL
    url.search = searchParams.toString();
    checkoutButton.href = url.toString();
}


function adjustProgressBar() {
    // Calculate the total quantity of all items
    let totalQuantity = Object.values(itemQuantities).reduce((total, qty, index) => {
        return index > 0 ? total + qty : total;
    }, 0);
    // Get the progress bar element
    const progressBar = document.getElementById('progressBar');
    // Check if the window width is less than 767px with matchMedia
    if (window.matchMedia('(max-width: 767px)').matches) {
        checkpointValues = [12, 24, 48, 100]; // Each value is 20% of the total height. If the total quantity < 12, set the progress bar height % to 0%. If the total quantity < 24 and > 12, set the progress bar height % to 20 etc.
        // If the window is less than 767px, set the progress bar height % to the lowest matching checkpoint value.
        if (totalQuantity < 12) {
            progressBar.style.height = '20%';
        } else if (totalQuantity < 24) {
            progressBar.style.height = '40%';
        } else if (totalQuantity < 48) {
            progressBar.style.height = '60%';
        } else if (totalQuantity < 100) {
            progressBar.style.height = '80%';
        } else {
            progressBar.style.height = '100%';
        }
    // Else, change the width of the progress bar to the total quantity divided by 100
    } else {
        progressBar.style.width = `${Math.min(totalQuantity / 100, 1) * 100}%`;
    }
}

function updateOnPageLoad() {
    items.forEach(itemId => {
        const counterElement = document.getElementById(`counter-${itemId}`);
        const currentCount = parseInt(counterElement.value, 10);
        if (!isNaN(currentCount) && currentCount > 0) {
            if (itemId === 'item0') {
                whiteHats = currentCount;
            } else if (itemId === 'item1') {
                blackHats = currentCount;
            }
            adjustProgressBar(currentCount); // Adjust the progress bar for each item
        }
    });
    updateURL(); // Update the URL based on the current quantities
}