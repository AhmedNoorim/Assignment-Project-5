// get element using id
function getElementById(elementID) {
    return document.getElementById(elementID)
}

// hide element by id
function hideElement(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

// unhide element by id
function unHideElement(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

// set background color by id
function setBackGroundColorById(elementID, color) {
    const element = document.getElementById(elementID)
    element.classList.add('bg-' + color)
    element.classList.add('text-white')
}

// remove background color by id
function removeBackGroundColorById(elementID, color) {
    const element = document.getElementById(elementID)
    element.classList.remove('bg-' + color)
    element.classList.remove('text-black')
}

// get integer parsed inner-text by ID
function getTextToIntById(elementID) {
    const elementText = document.getElementById(elementID)
    const elementValue = parseInt(elementText.innerText)
    return elementValue
}

// get float parsed inner-text by ID
function getTextToFloatById(elementID) {
    const elementText = document.getElementById(elementID)
    const elementValue = parseFloat(elementText.innerText)
    return elementValue
}

// set inner-text by ID
function setTextById(elementID, value) {
    const elementText = document.getElementById(elementID)
    elementText.innerText = value
}