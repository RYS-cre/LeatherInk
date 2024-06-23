// << Variables >>
const items = [
    {
        'id': 'r112-USD-Daily',
        'name': 'MAIN',
        'quantity': 0,
        'product_image': null,
    },
    {
        'id': 'r112-white-USD',
        'name': 'White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57542d7ad20e0b34d164e_Richardson_112_White_Front_High.jpg',
    },
    {
        'id': 'r112-black-USD',
        'name': 'Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57543d76fa5a3b20691db_Richardson_112_Black_Front_High.jpg',
    },
    {
        'id': 'r112-greyBirGld-USD',
        'name': 'Heather Grey /Birch /Amber Gold',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57544c110a7bcfd2d11f2_Richardson_112_Heather_Grey-_Birch-_Amber_Gold_Front_High.jpg',
    },
    {
        'id': 'r112-blackWhite-USD',
        'name': 'Black /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57544c110a7bcfd2d1189_Richardson_112_Charcoal-_White_Front_High.jpg',
    },
    {
        'id': 'r112-blueKhaki-USD',
        'name': 'Columbia Blue /Khaki',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57543797f1c5007c1d154_Richardson_112_Columbia_Blue-_Khaki_Front_High.jpg',
    },
    {
        'id': 'r112-charNeoGrn-USD',
        'name': 'Charcoal /Neon Green',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae4bb3e7a89f03272f6_CharcoalNeonGreen_Front.jpg',
    },
    {
        'id': 'r112-charNeoOrg-USD',
        'name': 'Charcoal /Neon Orange',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae41a3143136599c620_CharcoalNeonOrange_Front.jpg',
    },
    {
        'id': 'r112-charNeoPnk-USD',
        'name': 'Charcoal /Neon Pink',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae4d77cadb4f76f9a93_CharcoalNeonPink_Front.jpg',
    },
    {
        'id': 'r112-greyBlack-USD',
        'name': 'Heather Grey /Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae440013c220f2f6cc4_HeatherGreyBlack_Front.jpg',
    },
    {
        'id': 'r112-navy-USD',
        'name': 'Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae405471784ba7a0e6d_Navy_Front.jpg',
    },
    {
        'id': 'r112-whiteNavy-USD',
        'name': 'White /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae45536aed2d375dd53_WhiteNavy_Front.jpg',
    },
    {
        'id': 'r112-greyCharNavy-USD',
        'name': 'Grey /Charcoal /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae3d35e93ace2303463_GreyCharcoalNavy_Front.jpg',
    },
    {
        'id': 'r112-maroWhite-USD',
        'name': 'Maroon /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae37fe376763bfbb124_MaroonWhite_Front.jpg',
    },
    {
        'id': 'r112-pnkWhite-USD',
        'name': 'Hot Pink /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae3d97bf387d1eaf70b_HotPinkWhite_Front.jpg',
    },
    {
        'id': 'r112-gryBirOlv-USD',
        'name': 'Heather Grey /Birch /Army Olive',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65bd5ae3a24444eabd7c92dd_HeatherGreyBirchArmyOlive_Front.jpg',
    },
    {
        'id': 'r112-charcoalWhite-USD',
        'name': 'Charcoal /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57544c110a7bcfd2d1189_Richardson_112_Charcoal-_White_Front_High.jpg',
    },
];

const outOfStock = [
    {
        'id': 'r112-white-USD',
        'name': 'White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57542d7ad20e0b34d164e_Richardson_112_White_Front_High.jpg',
    },
    {
        'id': 'r112-black-USD',
        'name': 'Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/65a57543d76fa5a3b20691db_Richardson_112_Black_Front_High.jpg',
    },
];

const patches = [
    {
        'id': 'Black-Leather-USD',
        'site_id': 'patch-color--black',
        'name': 'Black',
        'product_image': null,
        'isSelected': false,
    },
    {
        'id': 'Brown-leather-USD',
        'site_id': 'patch-color--brown',
        'name': 'Brown',
        'product_image': null,
        'isSelected': false,
    },
    {
        'id': 'Dark-Brown-Leather-USD',
        'site_id': 'patch-color--darkbrown',
        'name': 'Dark Brown',
        'isSelected': false,
    }
];

// << Event Listeners >>
// event listener that Generates the Colour selection divs
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('items-container');

    items.forEach(item => {
        if (item.id !== 'r112-USD-Daily') {
            container.appendChild(createQuantitySelectDiv(item.id, item.product_image, item.name));
            setupCounter(item.id);
        } 
    });
    updateOnPageLoad();
});

const patchElements = document.querySelectorAll('.patch-color-option');

patchElements.forEach(element => {
    element.addEventListener('click', function () {
        
    })
        
})


// << Functions >>
// Generates the Colour selection divs
function createQuantitySelectDiv(itemId, img_src, itemName) {
    const div = document.createElement('div');
    div.className = 'selection-block';
    if (itemId === 'r112-black-USD') {
        div.innerHTML = `
            <img class='card-image' src='${img_src}'>
            <span class="product-name" >${itemName}</span>
            <div class="quantity-select">
                Out Of Stock
            </div>
        `
    } else {
        div.innerHTML = `
        <img class='card-image' src='${img_src}'>
        <span class="product-name" >${itemName}</span>
        <div class="quantity-select">
            <button class="decrease-quantity" id="qDecrease-${itemId}">-</button>
            <input type="number" class="quantity-counter" id="counter-${itemId}" value="0" min="0">
            <button class="increase-quantity" id="qIncrease-${itemId}">+</button>
        </div>
        `;}
    
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
    const item = items.find(item => item.id === itemId);
    if (item) {
        let currentCount = item.quantity + change;
        currentCount = Math.max(0, currentCount); // Prevent negative values
        item.quantity = currentCount;
        document.getElementById(`counter-${itemId}`).value = currentCount;
    }

    updateAll();
}

function updateQuantities(itemId, newQuantity) {
    const item = items.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
    }
    updateAll();
}

function updatePatchSelection(patchElements, newPatch) {
    // Remove the selected class from all patch options
    patchElements.forEach(element => {
        element.classList.remove('pco--selected');
    })
    // Add the selected class to the selected patch
    newPatch.classList.add('pco--selected');
    // Update the selected patch in the patches array
    patches.forEach(patch => {
        if (newPatch.id === patch.site_id) {
            patch.isSelected = true;
            
        } else {
            patch.isSelected = false;
        }
    })
    

}

function updateAll() {
    updateURL();
    adjustProgressBar();
}

function updateURL() {
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutErrorMessage = document.getElementById('checkout-error-message');
    const baseUrl = 'https://leatherink.chargebee.com/hosted_pages/checkout?';
    let url = new URL(baseUrl);
    let searchParams = new URLSearchParams();

    // Calculate the sum of all item quantities except 'r112-USD-Daily'
    let totalQuantity = items.reduce((total, item) => {
        return item.id !== 'r112-USD-Daily' ? total + item.quantity : total;
    }, 0);

    // Set the quantity for 'r112-USD-Daily'
    const mainItem = items.find(item => item.id === 'r112-USD-Daily');
    if (mainItem) {
        mainItem.quantity = totalQuantity;
    }

    // Add the plan charge.
    // r112-USD-Daily=Richardson 112 plan
    // Bundles-USD-Daily=Bundles plan
    // searchParams.append('subscription_items[item_price_id][0]', 'r112-USD-Daily');
    searchParams.append('subscription_items[item_price_id][0]', 'Bundles-USD-Daily');
    searchParams.append('subscription_items[quantity][0]', totalQuantity.toString());
    // Add shipping charge
    searchParams.append('subscription_items[item_price_id][1]', 'shipHandle-USD');

    /*// Set the artwork charge if totalQuantity is less than 12 --TEMPORARY DISABLED
    if (totalQuantity < 12) {
        searchParams.append('subscription_items[item_price_id][2]', 'artwork-charge-USD');
    }*/

    // Add patch option
    const selectedPatch = patches.find(patch => patch.isSelected === true);
    if (selectedPatch !== 'undefined') {
        searchParams.append('subscription_items[item_price_id][2]', selectedPatch.id);
    }

    // Add other items in ascending order
    items.forEach((item, index) => {
        if (item.quantity > 0 && item.id !== 'r112-USD-Daily') {
            searchParams.append(`subscription_items[item_price_id][${index + 1}]`, item.id); // Index plus 2 because of artwork charge and shipping.
            searchParams.append(`subscription_items[quantity][${index + 1}]`, item.quantity.toString());
        }
    });

    // Set the constructed URL
    url.search = searchParams.toString();
    checkoutButton.href = url.toString();

    // Ensure the customer has selected at least one hat and patch color
    // If not, add the ecb--hide class to the checkout button element and show the error message.
    if (totalQuantity === 0 || selectedPatch === 'undefined') {
        checkoutButton.classList.add('ecb--hide');
        checkoutErrorMessage.classList.remove('cem--hide');
    } else {
        checkoutButton.classList.remove('ecb--hide');
        checkoutErrorMessage.classList.add('cem--hide');
    }
}

function adjustProgressBar() {
    // Calculate the total quantity of all items
    let totalQuantity = items.reduce((total, item) => {
        return item.id !== 'r112-USD-Daily' ? total + item.quantity : total;
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
        growth = Math.min(totalQuantity * (100 / 11), 100);
        progressBar = progressBars[0];
        // Reset overfilled progress bars
        for (let i = 1; i < 5; i++) {
            if (isMobile) {
                progressBars[i].style.height = '0%';
            } else {
                progressBars[i].style.width = '0%';
            }
        }
    } else if (totalQuantity <= 47) {
        growth = Math.min((totalQuantity - 12) * (100 / 35), 100);
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
    } else if (totalQuantity <= 99) {
        growth = Math.min((totalQuantity - 48) * (100 / 51), 100);
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
    } else if (totalQuantity <= 249) {
        growth = Math.min((totalQuantity - 100) * (100 / 149), 100);
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
    items.forEach(item => {
        const counterElement = document.getElementById(`counter-${item.id}`);
        const currentCount = parseInt(counterElement.value, 10);
        if (!isNaN(currentCount) && currentCount > 0) {
            if (item.id === 'item0') {
                whiteHats = currentCount;
            } else if (item.id === 'item1') {
                blackHats = currentCount;
            }
            adjustProgressBar(currentCount); // Adjust the progress bar for each item
        }
    });
    updateURL(); // Update the URL based on the current quantities
}
