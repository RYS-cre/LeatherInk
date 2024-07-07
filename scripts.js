// << Variables >>
const r112_items = [
    {
        'id': 'r112-USD-Daily',
        'name': 'MAIN',
        'quantity': 0,
        'product_image': null,
    },
    {
        'id': 'r112-colBlueWhite-USD',
        'name': 'Columbia Blue /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b743849cbb58c8716f073_Columbia%20Blue-%20White.png',
    },
    {
        'id': 'r112-cyanWhite-USD',
        'name': 'Cyan /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b7439bae12e393c6dd0b5_Cyan-%20White.png',
    },
    {
        'id': 'r112-greyCharBlack-USD',
        'name': 'Grey /Charcoal /Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b7439be0c91bf11a3207a_Grey-%20Charcoal-%20Black.png',
    },
    {
        'id': 'r112-greyBirArmyOlv-USD',
        'name': 'Heather Grey /Birch /Army Olive',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b743835b97b56514b9677_Heather%20Grey-%20Birch-%20Army%20Olive.png',
    },
    {
        'id': 'r112-greyBlack-USD',
        'name': 'Heather Grey /Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b74375c869bb04eec2047_Heather%20Grey-%20Black.png',
    },
    {
        'id': 'r112-greyCardNavy-USD',
        'name': 'Grey /Cardinal /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b7439b10c5b74f4e52fb8_Heather%20Grey-%20Cardinal-%20Navy.png',
    },
    {
        'id': 'r112-greyCharDarkOrange-USD',
        'name': 'Grey /Charcoal /Dark Orange',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b74381031113600ca7f25_Heather%20Grey-%20Charcoal-%20Dark%20Orange.png',
    },
    {
        'id': 'r112-greyCharMaro-USD',
        'name': 'Grey /Charcoal /Maroon',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b7438568bebd704fafdbc_Heather%20Grey-%20Charcoal-%20Maroon.png',
    },
    {
        'id': 'r112-greyLiGrey-USD',
        'name': 'Grey /Light Grey',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b74389eee91506bc56abc_Heather%20Grey-%20Light%20Grey.png',
    },
    {
        'id': 'r112-greyNavy-USD',
        'name': 'Grey /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a8bae12e393c6d786b_Heather%20Grey-%20Navy.png',
    },
    {
        'id': 'r112-greyRoyal-USD',
        'name': 'Grey /Royal',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a9710bbb918ecb5d22_Heather%20Grey-%20Royal.png',
    },
    {
        'id': 'r112-khakiBurg-USD',
        'name': 'Khaki /Burgundy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a70789517b64cc64ef_Khaki-%20Burgundy.png',
    },
    {
        'id': 'r112-greyBirGld-USD',
        'name': 'Heather Grey /Birch /Amber Gold',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73ab4331478c8ae2ecdc_Heather_Grey-_Birch-_Amber_Gold.png',
    },
    {
        'id': 'r112-white-USD',
        'name': 'White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73aa31494df660b27f12_Richardson_112_White_Front_High.png',
    },
    {
        'id': 'r112-black-USD',
        'name': 'Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73aa4331478c8ae2ec4d_Richardson_112_Black_Front_High.png',
    },
    {
        'id': 'r112-beigCharGold-USD',
        'name': 'Beige /Charcoal /Gold',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a81031113600ca2a21_Mink%20Beige-%20Charcoal-%20Amber%20Gold.png',
    },
    {
        'id': 'r112-NavyWhiteGrey-USD',
        'name': 'Navy /White /Grey',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a7be0c91bf11a2c55b_Navy-%20White-%20Heather%20Grey.png',
    },
    {
        'id': 'r112-orngWhite-USD',
        'name': 'Orange /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a7e3c9b60013f7d881_Orange-%20White.png',
    },
    {
        'id': 'r112-redWhiteGrey-USD',
        'name': 'Red /White /Grey',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a8d22abb6ae8536459_Red-%20White-%20Heather%20Grey.png',
    },
    {
        'id': 'r112-redWhiteNavy-USD',
        'name': 'Red /White /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a93da3e1a64c627623_Red-%20White-%20Navy.png',
    },
    {
        'id': 'r112-royalWhiteGrey-USD',
        'name': 'Royal /White /Grey',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a91d7868e5b8aa892f_Royal-%20White-%20Heather%20Grey.png',
    },
    {
        'id': 'r112-biscBlue-USD',
        'name': 'Biscuit /Blue',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73abf805237c4d19c014_Biscuit-%20True%20Blue.png',
    },
    {
        'id': 'r112-blackWhiteGrey-USD',
        'name': 'Black /White /Grey',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a8710bbb918ecb5bac_Black-%20White-%20Heather%20Grey.png',
    },
    {
        'id': 'r112-tealBirNavy-USD',
        'name': 'Teal /Birch /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a6710bbb918ecb58f0_Blue%20Teal-%20Birch-%20Navy.png',
    },
    {
        'id': 'r112-cardWhite-USD',
        'name': 'Cardinal /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a6c54deb697e396963_CARDINAL%20-%20WHITE.png',
    },
    {
        'id': 'r112-charColBlue-USD',
        'name': 'Charcoal /Columbia Blue',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a9739ae83d1b87c23e_Charcoal-%20Columbia%20Blue.png',
    },
    {
        'id': 'r112-charNavy-USD',
        'name': 'Charcoal /Navy',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a9c54deb697e396baf_Charcoal-%20Navy.png',
    },
    {
        'id': 'r112-charNeonBlue-USD',
        'name': 'Charcoal /Neon Blue',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a60789517b64cc63cc_Charcoal-%20Neon%20Blue.png',
    },
    {
        'id': 'r112-khakiCof-USD',
        'name': 'Khaki /Coffee',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a7b28db8935bdc7163_Khaki-%20Coffee.png',
    },
    {
        'id': 'r112-redWhiteBlack-USD',
        'name': 'Red /White /Black',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b91e7f26f3c2e260de360_Red-_White-_Black.png',
    },
    {
        'id': 'r112-blackWhite-USD',
        'name': 'Black /White',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a6d22abb6ae85361bf_Black-%20White.png',
    },
    {
        'id': 'r112-charNeonYllw-USD',
        'name': 'Charcoal /Neon Yellow',
        'quantity': 0,
        'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/667b73a620b835e1fc044177_Charcoal-%20Neon%20Yellow.png',
    }
];

const y6606_items = [
        {
            'id': '6606-red-USD',
            'name': 'Red',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a675794f6a941c2bf2_Red.png',
        },
        {
            'id': '6606-redBlack-USD',
            'name': 'Red/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a631336cbfa228b2a5_Red-_Black.png',
        },
        {
            'id': '6606-redWhite-USD',
            'name': 'Red/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a656399456a22fde5c_Red-_White.png',
        },
        {
            'id': '6606-royalWhite-USD',
            'name': 'Royal/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a694c94af82650f32b_Royal-_White.png',
        },
        {
            'id': '6606-silver-USD',
            'name': 'Silver',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6eea1292ec0b87930_Silver.png',
        },
        {
            'id': '6606-steelBlueSilver-USD',
            'name': 'Steel Blue/ Silver',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6eea1292ec0b87938_Steel_Blue-_Silver.png',
        },
        {
            'id': '6606-turquoiseWhite-USD',
            'name': 'Turquoise/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a675794f6a941c2c10_Turquoise-_White.png',
        },
        {
            'id': '6606-veilWideland-USD',
            'name': 'Veil Wideland',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6ea6f72d3b1dd3bc1_Veil_Wideland.png',
        },
        {
            'id': '6606-white-USD',
            'name': 'White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a694c94af82650f359_White.png',
        },
        {
            'id': '6606-black-USD',
            'name': 'Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a57c97c204e215492d_Black.png',
        },
        {
            'id': '6606-blackWhite-USD',
            'name': 'Black/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a793ba92c0c5b094f3_Black-White.png',
        },
        {
            'id': '6606-brownKhaki-USD',
            'name': 'Brown/ Khaki',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a5a1ca475757b396e0_Brown-Khaki.png',
        },
        {
            'id': '6606-camamelBlack-USD',
            'name': 'Caramel/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a5c3c268a76debd29b_Caramel-%20Black.png',
        },
        {
            'id': '6606-caramel-USD',
            'name': 'Caramel',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a57b0d04f6ef019b09_Caramel.png',
        },
        {
            'id': '6606-charcoalWhite-USD',
            'name': 'Charcoal/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a556399456a22fddb1_Charcoal-_White.png',
        },
        {
            'id': '6606-charcoal-USD',
            'name': 'Charcoal',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a50df3402b681617eb_Charcoal.png',
        },
        {
            'id': '6606-charcoalBlack-USD',
            'name': 'Charcoal/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a59906e5efe6d8ecf4_Charcoal-%20Black.png',
        },
        {
            'id': '6606-coyoteBrownBlack-USD',
            'name': 'Coyote Brown/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a46373f85845459dad_Coyote_Brown-_Black.png',
        },
        {
            'id': '6606-cranberry-USD',
            'name': 'Cranberry',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a577bbc619c9771aca_Cranberry.png',
        },
        {
            'id': '6606-darkHeatherGrey-USD',
            'name': 'Dark Heather Grey',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a56540acf7be0ae4de_Dark_Heather_Grey.png',
        },
        {
            'id': '6606-greenCamoBlack-USD',
            'name': 'Green Camo/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a56387caad81e20891_Green_Camo-_Black.png',
        },
        {
            'id': '6606-heatherGreyBlack-USD',
            'name': 'Heather Grey/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a53da4550865af209b_Heather_Grey-_Black.png',
        },
        {
            'id': '6606-heatherGreyWhite-USD',
            'name': 'Heather Grey/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a548b8babb97af223a_Heather_Grey-_White.png',
        },
        {
            'id': '6606-khaki-USD',
            'name': 'Khaki',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a531336cbfa228b184_Khaki.png',
        },
        {
            'id': '6606-maroonGrey-USD',
            'name': 'Maroon/ Grey',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a5a1ca475757b396ae_Maroon-_Grey.png',
        },
        {
            'id': '6606-mossKhaki-USD',
            'name': 'Moss/ Khaki',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6d20e62d47ef40552_Moss-_Khaki.png',
        },
        {
            'id': '6606-multicamAridBrown-USD',
            'name': 'Multicam Arid/ Brown',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a677bbc619c9771b4e_Multicam_Arid-_Brown.png',
        },
        {
            'id': '6606-multicamAridTan-USD',
            'name': 'Multicam Arid/ Tan',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6238901b20100b627_Multicam_Arid-_Tan.png',
        },
        {
            'id': '6606-multicamBlackBlack-USD',
            'name': 'Multicam Black/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a61b3a6c3f7f1a0899_Multicam_Black-_Black.png',
        },
        {
            'id': '6606-multicamGreenBlack-USD',
            'name': 'Multicam Green/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6eea1292ec0b878cc_Multicam_Green-_Black.png',
        },
        {
            'id': '6606-multicamGreenKhaki-USD',
            'name': 'Multicam Green/ Khaki',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a67c72f17052a65901_Multicam_Green-_Khaki.png',
        },
        {
            'id': '6606-multicamTropicGreen-USD',
            'name': 'Multicam Tropic Green',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6c9cbde93482d026a_Multicam_Tropic-_Green.png',
        },
        {
            'id': '6606-navy-USD',
            'name': 'Navy',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a65f61501753301c9a_Navy.png',
        },
        {
            'id': '6606-navySilver-USD',
            'name': 'Navy/ Silver',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6238901b20100b674_Navy-_Silver.png',
        },
        {
            'id': '6606-navyWhite-USD',
            'name': 'Navy/ White',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6d62e8d9e68492ecd_Navy-_White.png',
        },
        {
            'id': '6606-pink-USD',
            'name': 'Pink',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a67ae09ce252e6869c_Pink.png',
        },
        {
            'id': '6606-poseidonBlack-USD',
            'name': 'Poseidon/ Black',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a690f89437c7483453_Poseidon_Black.png',
        },
        {
            'id': '6606-rusticOrangeKhaki-USD',
            'name': 'Rustic Orange/ Khaki',
            'quantity': 0,
            'product_image': 'https://uploads-ssl.webflow.com/6580402490246e4622553755/668995a6e57dd8756c85ec0f_Rustic_Orange-_Khaki.png',
        }
];

const outOfStock = [
    'r112-white-USD', 'r112-black-USD'
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
    const r112_container = document.getElementById('items-container-r112');
    const y6606_container = document.getElementById('items-container-6606');

    r112_items.forEach(item => {
        if (item.id !== 'r112-USD-Daily') {
            r112_container.appendChild(createQuantitySelectDiv(item.id, item.product_image, item.name));
            setupCounter(item.id);
        } 
    });
    y6606_items.forEach(item => {
        if (item.id !== '6606-USD-Daily') {
            y6606_container.appendChild(createQuantitySelectDiv(item.id, item.product_image, item.name));
            setupCounter(item.id);
        }
    });
    updateOnPageLoad();
});

const patchElements = document.querySelectorAll('.patch-color-option');

patchElements.forEach(element => {
    element.addEventListener('click', function () {
        updatePatchSelection(patchElements, element);
        updateAll();
    }) 
})

// << Functions >>
// Generates the Colour selection divs
function createQuantitySelectDiv(itemId, img_src, itemName) {
    const div = document.createElement('div');
    div.className = 'selection-block';
    if (itemId in outOfStock) {
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
    if (itemId in outOfStock) {
        return;
    }
    const increaseButton = document.getElementById(`qIncrease-${itemId}`);
    const decreaseButton = document.getElementById(`qDecrease-${itemId}`);
    const counterInput = document.getElementById(`counter-${itemId}`);

    increaseButton.addEventListener('click', () => changeQuantity(itemId, 1));
    decreaseButton.addEventListener('click', () => changeQuantity(itemId, -1));
    counterInput.addEventListener('input', (e) => updateQuantities(itemId, parseInt(e.target.value) || 0));
}

//Updates the counters on each item
function changeQuantity(itemId, change) {
    let item = null;
    if (itemId.startsWith('r112')) {
        item = r112_items.find(item => item.id === itemId);
    } else if (itemId.startsWith('6606')) {
        item = y6606_items.find(item => item.id === itemId);
    } else {
        item = 'No Hat found.'
    }
    if (item) {
        let currentCount = item.quantity + change;
        currentCount = Math.max(0, currentCount); // Prevent negative values
        item.quantity = currentCount;
        document.getElementById(`counter-${itemId}`).value = currentCount;
    }

    updateAll();
}

function updateQuantities(itemId, newQuantity) {
    const item_list = itemId.startsWith('r112')? r112_items : itemId.startsWith('6606')? y6606_items : [];
    console.log(item_list[1]);
    const item = item_list.find(item => item.id === itemId);
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
    let totalQuantity = [...r112_items, ...y6606_items].reduce((total, item) => {
        // Include 6606-USD-Daily if there is a separate pricing model.
        return item.id !== 'r112-USD-Daily' ? total + item.quantity : total;
    }, 0);

    // Set the quantity for 'r112-USD-Daily'
    const r112Item = r112_items.find(item => item.id === 'r112-USD-Daily');
    if (r112Item) {
        r112Item.quantity = totalQuantity;
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
    //console.log(selectedPatch);
    if (selectedPatch && typeof selectedPatch !== 'undefined') {
        searchParams.append('subscription_items[item_price_id][2]', selectedPatch.id);
    }

    // Add color charges
    [...r112_items, ...y6606_items].forEach((item, index) => {
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
    console.log(totalQuantity, selectedPatch);
    if (totalQuantity === 0 || selectedPatch === undefined) {
        checkoutButton.classList.add('ecb--hide');
        checkoutErrorMessage.classList.remove('cem--hide'); // Show the error
    } else {
        checkoutButton.classList.remove('ecb--hide');
        checkoutErrorMessage.classList.add('cem--hide'); // Hide the error
    }
}

function adjustProgressBar() {
    // Calculate the total quantity of all r112_items
    let totalQuantity = [...r112_items, ...y6606_items].reduce((total, item) => {
        // Include 6606-USD-Daily if there is a separate pricing model.
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
    /*items.forEach(item => {
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
    });*/
    updateURL(); // Update the URL based on the current quantities
}
