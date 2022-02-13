
// function updateCaseNum(isIncreasing) {
//     const caseInput = document.getElementById('case-num');
//     const caseInputText = caseInput.value;
//     let caseInputTextConvert = parseInt(caseInputText);

//     if (isIncreasing) {
//         caseInputTextConvert = caseInputTextConvert + 1;
//     } else if (caseInputTextConvert > 0) {
//         caseInputTextConvert = caseInputTextConvert - 1;
//     }
//     caseInput.value = caseInputTextConvert;
//     // update total balance
//     const totalCase = document.getElementById('total-case');
//     totalCase.innerText = caseInputTextConvert * 59;
// }


// // Event handler on plus button increament

// document.getElementById('case-plus').addEventListener('click', function () {
//     updateCaseNum(true);
// })

// // Event handler on minus button decreament
// document.getElementById('case-minus').addEventListener('click', function () {
//     updateCaseNum(false)
// })

function updateCaseNum(isIncreasing) {
    const caseInput = document.getElementById('case-input');
    let caseNum = caseInput.value;
    if (isIncreasing) {
        caseNum = parseInt(caseNum) + 1;
    }
    else if (caseNum > 0) {
        caseNum = parseInt(caseNum) - 1;
    }
    caseInput.value = caseNum;
    // update total balance
    const totalCase = document.getElementById('total-case');
    totalCase.innerText = caseNum * 59;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNum(true)
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNum(false)
});

// iphone 11 
function updatteIphonePrice(isIphoneIncrease) {
    const iphone11 = document.getElementById('iphone-11-input');
    let iphoneValue = iphone11.value;

    if (isIphoneIncrease) {
        iphoneValue = parseInt(iphoneValue) + 1;
    } else if (iphoneValue > 0) {
        iphoneValue = parseInt(iphoneValue) - 1;
    }
    iphone11.value = iphoneValue;
    // iphone 11 total price

    const iphone11TotalPrice = document.getElementById('iphone-11-total');
    const iphone11TotalPriceText = iphone11TotalPrice.innerText;
    iphone11TotalPrice.innerText = iphoneValue * 1219;
}

document.getElementById('iphone-plus-btn').addEventListener('click', function () {
    updatteIphonePrice(true)
});

document.getElementById('iphone-minus-btn').addEventListener('click', function () {
    updatteIphonePrice(false)
})

