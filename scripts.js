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
    'r112-gryBirOlv-USD',
    'r112-charcoalWhite-USD',
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
    'r112-gryBirOlv-USD': 0,
    'r112-charcoalWhite-USD': 0,
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
    'r112-gryBirOlv-USD': 'Heather Grey /Birch /Army Olive',
    'r112-charcoalWhite-USD': 'Charcoal /White',
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
    'r112-blueKhaki-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae4da33415f19395cbd_ColumbiaBlueKhaki_Front.jpg',
    'r112-charcoalWhite-USD': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57544c110a7bcfd2d1189_Richardson_112_Charcoal-_White_Front_High.jpg',
};

// << Event Listeners >>
// event listener that Generates the Colour selection divs
document.addEventListener("DOMContentLoaded", function () {
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
    const baseUrl = 'https://leatherink.chargebee.com/hosted_pages/checkout?';
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
    // Add shipping charge
    searchParams.append('subscription_items[item_price_id][1]', 'shipHandle-USD');

    /*// Set the artwork charge if totalQuantity is less than 12 --TEMPORARY DISABLED
    if (totalQuantity < 12) {
        searchParams.append('subscription_items[item_price_id][2]', 'artwork-charge-USD');
    }*/

    // Add other items in ascending order
    Object.entries(itemQuantities).forEach(([itemId, quantity], index) => {
        if (quantity > 0 && itemId !== 'r112-USD-Daily') {
            searchParams.append(`subscription_items[item_price_id][${index}]`, itemId); // Index plus 2 because of artwork charge and shipping.
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
    // Set current quantity to the total quantity
    document.getElementById('currentQuantity').innerHTML = totalQuantity;

    // Determine if the user is on a mobile device
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Get the progress bar and checkpoint elements 
    let progressBars = [];
    for (let i = 1; i < 6; i++) {
        progressBars.push(document.getElementById(`progressBar${i}`));
    }
    // Declare growth
    let growth = 0;

    // Calculate growth of progress Bars
    if (totalQuantity <= 12) {
        growth = Math.min(totalQuantity * (100 / 12), 100);
        progressBar = progressBars[0];
        // Reset overfilled progress bars
        for (let i = 1; i < 5; i++) {
            if (isMobile) {
                progressBars[i].style.height = '0%';
            } else {
                progressBars[i].style.width = '0%';
            }
        }
    } else if (totalQuantity <= 24) {
        growth = Math.min((totalQuantity - 12) * (100 / 12), 100);
        progressBar = progressBars[1];
        // Reset overfilled progress bars
        for (let i = 0; i < 5; i++) {
            if (i < 1) {
                if (isMobile) {
                    progressBars[i].style.height = '100%';
                } else {
                    progressBars[i].style.width = '100%';
                }
            } else {
                if (isMobile) {
                    progressBars[i].style.height = '0%';
                } else {
                    progressBars[i].style.width = '0%';
                }
            }
        }
    } else if (totalQuantity <= 48) {
        growth = Math.min((totalQuantity - 24) * (100 / 24), 100);
        progressBar = progressBars[2];
        // Reset overfilled progress bars
        for (let i = 0; i < 5; i++) {
            if (i < 2) {
                if (isMobile) {
                    progressBars[i].style.height = '100%';
                } else {
                    progressBars[i].style.width = '100%';
                }
            } else {
                if (isMobile) {
                    progressBars[i].style.height = '0%';
                } else {
                    progressBars[i].style.width = '0%';
                }
            }
        }
    } else if (totalQuantity <= 99) {
        growth = Math.min((totalQuantity - 48) * (100 / 51), 100);
        progressBar = progressBars[3];
        // Reset overfilled progress bars
        for (let i = 0; i < 5; i++) {
            if (i < 3) {
                if (isMobile) {
                    progressBars[i].style.height = '100%';
                } else {
                    progressBars[i].style.width = '100%';
                }
            } else {
                if (isMobile) {
                    progressBars[i].style.height = '0%';
                } else {
                    progressBars[i].style.width = '0%';
                }
            }
        }
    } else {
        growth = 100;
        progressBar = progressBars[4];
        for (let i = 0; i < 5; i++) {
            if (isMobile) {
                progressBars[i].style.height = '100%';
            } else {
                progressBars[i].style.width = '100%';
            }
        }
    }
    if (isMobile) {
        progressBar.style.height = `${growth}%`;
    } else {
        progressBar.style.width = `${growth}%`;
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
