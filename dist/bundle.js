/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/builder.js":
/*!***************************!*\
  !*** ./src/js/builder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMainElements: () => (/* binding */ buildMainElements),\n/* harmony export */   buildMainFooter: () => (/* binding */ buildMainFooter),\n/* harmony export */   buildTasteSection: () => (/* binding */ buildTasteSection)\n/* harmony export */ });\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content */ \"./src/js/main-content.js\");\n/* harmony import */ var _wishListFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishListFuncs */ \"./src/js/wishListFuncs.js\");\n\r\n\r\n\r\n\r\nfunction buildMainElements(recipeData, servingsAmount) {\r\n    const header = document.createElement('div');\r\n    header.classList.add('d-flex', 'align-items-center', 'justify-content-between','custom-padding');\r\n\r\n    const addToCartBtn = document.createElement('button');\r\n    addToCartBtn.classList.add(\"btn\", \"btn-outline-danger\", \"add-to-cart-btn\");\r\n    addToCartBtn.innerHTML = '<i class=\"fa-solid fa-cart-shopping\"></i>';\r\n    addToCartBtn.title = 'Add to shopping list';\r\n\r\n    const titleElement = document.createElement(\"h1\");\r\n    titleElement.classList.add(\"m-4\", \"text-center\");\r\n    titleElement.textContent = recipeData.title;\r\n    \r\n    const servingsSection = document.createElement(\"div\");\r\n    servingsSection.classList.add(\"d-flex\", \"align-items-center\", \"m-4\", \"custom-padding\",'justify-content-between');\r\n    \r\n    const servingsAmountSection=document.createElement('div');\r\n    servingsAmountSection.classList.add(\"my-auto\");\r\n    servingsAmountSection.innerHTML = `<i class=\"fa-solid fa-people-group\" style=\"font-size: 24px;\"></i>`;\r\n\r\n    const servingsAmountDisplay = document.createElement(\"span\");\r\n    servingsAmountDisplay.textContent = servingsAmount;\r\n    servingsAmountDisplay.classList.add(\"serving-text\",\"mt-2\");\r\n\r\n    const servingsButtons = document.createElement(\"div\");\r\n    servingsButtons.classList.add(\"btn-group\"); \r\n\r\n    const plusButton = document.createElement(\"button\");\r\n    plusButton.classList.add(\"btn\", \"btn-outline-secondary\",'border-0','text-dark','btn-sm');\r\n    plusButton.textContent = \"+\";\r\n    plusButton.addEventListener(\"click\", () => (0,_main_content__WEBPACK_IMPORTED_MODULE_0__.updateServings)(recipeData.extendedIngredients, 1));\r\n\r\n    const minusButton = document.createElement(\"button\");\r\n    minusButton.classList.add(\"btn\", \"btn-outline-secondary\",'border-0','text-dark','btn-sm');\r\n    minusButton.textContent = \"-\";\r\n    minusButton.addEventListener(\"click\", () => (0,_main_content__WEBPACK_IMPORTED_MODULE_0__.updateServings)(recipeData.extendedIngredients, -1));\r\n\r\n    const readyInMinutes=document.createElement('p');\r\n    readyInMinutes.classList.add(\"my-auto\",\"fw-bold\",\"serving-text\");\r\n    readyInMinutes.innerHTML=`<i class=\"fa-regular fa-clock\"> </i> ${recipeData.readyInMinutes} Minutes`;\r\n\r\n    const addToWishListBtn = document.createElement('button');\r\n    addToWishListBtn.classList.add(\"btn\",\"add-to-wishlist-btn\");\r\n    (0,_wishListFuncs__WEBPACK_IMPORTED_MODULE_1__.initiallyBtnStyle)(addToWishListBtn,recipeData);\r\n    addToWishListBtn.innerHTML = `<i class=\"fa-solid fa-heart\"></i>`;\r\n    addToWishListBtn.title = 'Add to Wish list';\r\n    addToWishListBtn.addEventListener('click',() =>(0,_wishListFuncs__WEBPACK_IMPORTED_MODULE_1__.addToWishList)(addToWishListBtn,recipeData));\r\n\r\n    header.appendChild(addToCartBtn);\r\n    header.appendChild(titleElement);\r\n    header.appendChild(addToWishListBtn);\r\n    \r\n    servingsAmountSection.appendChild(servingsAmountDisplay);\r\n    servingsAmountSection.appendChild(plusButton);\r\n    servingsAmountSection.appendChild(minusButton);\r\n    servingsAmountSection.appendChild(servingsButtons);\r\n    servingsSection.appendChild(servingsAmountSection);\r\n    servingsSection.appendChild(readyInMinutes);\r\n\r\n    _main_content__WEBPACK_IMPORTED_MODULE_0__.mainContent.appendChild(header);\r\n    _main_content__WEBPACK_IMPORTED_MODULE_0__.mainContent.appendChild(servingsSection);\r\n\r\n    const titleMaterials = document.createElement(\"h5\");\r\n    titleMaterials.textContent = \"RECIPE INGREDIENTS\";\r\n    _main_content__WEBPACK_IMPORTED_MODULE_0__.mainContent.appendChild(titleMaterials);\r\n}\r\n\r\nfunction buildMainFooter(directions) {\r\n    const footer = document.createElement('div');\r\n    footer.classList.add(\"footer\", \"custom-padding\", \"mt-4\", \"text-center\");\r\n\r\n    const infoTitle = document.createElement('h4');\r\n    infoTitle.classList.add(\"titles\", \"m-4\");\r\n    infoTitle.textContent = \"How to cook it\";\r\n\r\n    const info = document.createElement('p');\r\n    info.textContent = \"This recipe was carefully designed and tested by Spooncular. Please check out directions at their website.\";\r\n\r\n    const dirBtn = document.createElement('button');\r\n    dirBtn.textContent = \"Directions\";\r\n    dirBtn.classList.add(\"btn\", \"btn-warning\", \"fw-bold\", \"mt-4\");\r\n\r\n    footer.appendChild(infoTitle);\r\n    footer.appendChild(info);\r\n    footer.appendChild(dirBtn);\r\n    _main_content__WEBPACK_IMPORTED_MODULE_0__.mainContent.appendChild(footer);\r\n\r\n    dirBtn.addEventListener('click', () => {\r\n        window.open(directions, '_blank');\r\n    });\r\n}\r\n\r\nfunction buildTasteSection(recipeId) {\r\n    const tasteSection = document.createElement('div');\r\n    tasteSection.classList.add( 'd-flex', 'justify-content-between', 'custom-padding','my-4'); \r\n\r\n    const createFlavorElement = (title, content) => {\r\n        const flavorElement = document.createElement('div');\r\n        flavorElement.classList.add('text-center','d-flex','flex-column','justify-content-between'); \r\n\r\n        const titleElement = document.createElement('p');\r\n        titleElement.classList.add('icon-titles');\r\n        titleElement.textContent = title;\r\n        flavorElement.appendChild(titleElement);\r\n\r\n        const contentElement = document.createElement('div');\r\n        contentElement.innerHTML = content;\r\n        flavorElement.appendChild(contentElement);\r\n\r\n        const ratingElement = document.createElement('p');\r\n        ratingElement.classList.add('rating-element','icon-titles');\r\n        flavorElement.appendChild(ratingElement);\r\n\r\n        return flavorElement;\r\n    };\r\n\r\n    const spiciness = createFlavorElement('Spiciness', '<i class=\"fa-solid fa-pepper-hot\"></i>');\r\n    const fattiness = createFlavorElement('Fattiness', '<img src=\"./images/trans-fat.png\">');\r\n    const savoriness = createFlavorElement('Savoriness', '<img src=\"./images/savory.png\">');\r\n    const bitterness = createFlavorElement('Bitterness', '<img src=\"./images/bitter-gourd.png\">');\r\n    const sourness = createFlavorElement('Sourness', '<img src=\"./images/sourness.png\">');\r\n    const saltiness = createFlavorElement('Saltiness', '<img src=\"./images/salt.png\">');\r\n    const sweetness = createFlavorElement('Sweetness', '<img src=\"./images/cupcake.png\">');\r\n\r\n    tasteSection.appendChild(spiciness);\r\n    tasteSection.appendChild(fattiness);\r\n    tasteSection.appendChild(savoriness);\r\n    tasteSection.appendChild(bitterness);\r\n    tasteSection.appendChild(sourness);\r\n    tasteSection.appendChild(saltiness);\r\n    tasteSection.appendChild(sweetness);\r\n\r\n    _main_content__WEBPACK_IMPORTED_MODULE_0__.mainContent.appendChild(tasteSection);\r\n\r\n    fetch(`https://api.spoonacular.com/recipes/${recipeId}/tasteWidget.json?apiKey=${_main_content__WEBPACK_IMPORTED_MODULE_0__.apiKey}`)\r\n        .then(res => res.json())\r\n        .then(recipeData => {           \r\n            spiciness.querySelector('.rating-element').textContent = `Rating: ${recipeData.spiciness}`;\r\n            fattiness.querySelector('.rating-element').textContent = `Rating: ${recipeData.fattiness}`;\r\n            savoriness.querySelector('.rating-element').textContent = `Rating: ${recipeData.savoriness}`;\r\n            bitterness.querySelector('.rating-element').textContent = `Rating: ${recipeData.bitterness}`;\r\n            sourness.querySelector('.rating-element').textContent = `Rating: ${recipeData.sourness}`;\r\n            saltiness.querySelector('.rating-element').textContent = `Rating: ${recipeData.saltiness}`;\r\n            sweetness.querySelector('.rating-element').textContent = `Rating: ${recipeData.sweetness}`;\r\n        })\r\n        .catch(error => {\r\n            console.error('Error fetching detailed recipe information:', error);\r\n        });\r\n}\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/builder.js?");

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRecipeCard: () => (/* binding */ createRecipeCard)\n/* harmony export */ });\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content */ \"./src/js/main-content.js\");\n\r\n\r\nfunction createRecipeCard(recipe) {\r\n    const card = document.createElement(\"button\");\r\n    card.classList.add(\"card\", \"recipe-card\", \"btn\", `recipe-card-${recipe.id}`);\r\n\r\n    const cardBody = document.createElement(\"div\");\r\n    cardBody.classList.add(\"card-body\", \"d-flex\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = recipe.image;\r\n    img.alt = recipe.title;\r\n    img.classList.add(\"card-img-top\");\r\n\r\n    const textDiv = document.createElement(\"div\");\r\n    textDiv.classList.add(\"preview-text\",\"mt-2\");\r\n\r\n    const mainTitle = document.createElement(\"h4\");\r\n    mainTitle.classList.add(\"main-title\");\r\n    mainTitle.textContent = recipe.title;\r\n\r\n    const secondTitle = document.createElement(\"p\");\r\n    secondTitle.classList.add(\"second-title\");\r\n    secondTitle.textContent=recipe.title;\r\n\r\n    textDiv.appendChild(mainTitle);\r\n    textDiv.appendChild(secondTitle);\r\n    cardBody.appendChild(img);\r\n    cardBody.appendChild(textDiv);\r\n    card.appendChild(cardBody);\r\n    card.addEventListener('click', () => (0,_main_content__WEBPACK_IMPORTED_MODULE_0__.getRecipeInformation)(recipe));\r\n\r\n    return card;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/card.js?");

/***/ }),

/***/ "./src/js/main-content.js":
/*!********************************!*\
  !*** ./src/js/main-content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiKey: () => (/* binding */ apiKey),\n/* harmony export */   getRecipeInformation: () => (/* binding */ getRecipeInformation),\n/* harmony export */   mainContent: () => (/* binding */ mainContent),\n/* harmony export */   updateServings: () => (/* binding */ updateServings)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/js/builder.js\");\n/* harmony import */ var _shoppingList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoppingList */ \"./src/js/shoppingList.js\");\n\r\n \r\n\r\n\r\nconst apiKey = '1f74624cab934a19a54b3c8b3b0313ea';\r\n// export const apiKey = 'e4e6e391a4984608ad5372d5becfb4bc';\r\nconst mainContent = document.querySelector('.main-content');\r\nlet servingsAmount = 3;\r\n\r\n\r\nfunction getRecipeInformation(recipe){\r\n    mainContent.textContent = \"\";\r\n\r\n    const foodMainImage = document.createElement(\"img\");\r\n    foodMainImage.classList.add(\"main-img\", \"img-fluid\");\r\n    foodMainImage.src = recipe.image;\r\n    mainContent.appendChild(foodMainImage);\r\n\r\n    fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`)\r\n        .then(res => res.json())\r\n        .then(recipeData => {\r\n            const materials = recipeData.extendedIngredients;\r\n\r\n            const materialsContainer = document.querySelector(\".materials-container\");\r\n            if(!materialsContainer){\r\n                (0,_builder__WEBPACK_IMPORTED_MODULE_0__.buildMainElements)(recipeData, servingsAmount);\r\n            }            \r\n            displayMaterials(materials, servingsAmount);           \r\n            (0,_builder__WEBPACK_IMPORTED_MODULE_0__.buildMainFooter)(recipeData.sourceUrl);\r\n            (0,_builder__WEBPACK_IMPORTED_MODULE_0__.buildTasteSection)(recipeData.id);\r\n               \r\n            document.querySelector('.add-to-cart-btn').addEventListener('click',() =>(0,_shoppingList__WEBPACK_IMPORTED_MODULE_1__.addToShoppingList)(materials, servingsAmount));\r\n        })\r\n        .catch(error => {\r\n            console.error('Error fetching detailed recipe information:', error);\r\n    });   \r\n}\r\n\r\nfunction updateServings(materials, amount) {\r\n    servingsAmount = Math.max(1, servingsAmount + amount);\r\n    document.querySelector(\".serving-text\").textContent = servingsAmount;\r\n\r\n    displayMaterials(materials, servingsAmount);\r\n}\r\n\r\nfunction displayMaterials(materials,servingsAmount) {\r\n    const materialsList = document.querySelector('.list-container');\r\n\r\n    if (!materialsList) {\r\n        createMaterialsList(materials, servingsAmount);\r\n        return;\r\n    }\r\n\r\n    const materialItems = document.querySelectorAll('.list-group-item');\r\n\r\n    materialItems.forEach((materialItem, index) => {\r\n        const material = materials[index];\r\n        materialItem.innerHTML = `<i class=\"fas fa-check\" style=\"margin-right: 10px;\"></i> ${material.amount * servingsAmount} ${material.unit} ${material.name}`;\r\n    });\r\n}\r\n\r\nfunction createMaterialsList(materials, servingsAmount) {\r\n    const materialsList = document.createElement(\"ul\");\r\n    materialsList.classList.add(\"list-group\", \"list-group-flush\", \"list-container\");\r\n\r\n    const midpoint = Math.ceil(materials.length / 2);\r\n    const column1 = document.createElement(\"div\");\r\n    column1.classList.add(\"col-md-6\");\r\n    const column2 = document.createElement(\"div\");\r\n    column2.classList.add(\"col-md-6\");\r\n\r\n    materials.forEach((material, index) => {\r\n        const materialItem = document.createElement(\"li\");\r\n        materialItem.classList.add(\"list-group-item\");\r\n        materialItem.innerHTML = `<i class=\"fas fa-check\" style=\"margin-right: 10px;\"></i> ${material.amount * servingsAmount} ${material.unit} ${material.name}`;\r\n\r\n        if (index < midpoint) {\r\n            column1.appendChild(materialItem);\r\n        } else {\r\n            column2.appendChild(materialItem);\r\n        }\r\n    });\r\n\r\n    const row = document.createElement(\"div\");\r\n    row.classList.add(\"row\", \"list-container\");\r\n\r\n    row.appendChild(column1);\r\n    row.appendChild(column2);\r\n    materialsList.appendChild(row);\r\n\r\n    const existingMaterialsList = document.querySelector('.list-container');\r\n\r\n    if (existingMaterialsList) {\r\n        existingMaterialsList.replaceWith(materialsList);\r\n    } else {\r\n        const materialsContainer = document.createElement('div');\r\n        materialsContainer.classList.add('materials-container');\r\n        materialsContainer.appendChild(materialsList);\r\n        mainContent.appendChild(materialsContainer);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/main-content.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/js/card.js\");\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-content */ \"./src/js/main-content.js\");\n/* harmony import */ var _shoppingList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoppingList */ \"./src/js/shoppingList.js\");\n/* harmony import */ var _wishListFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishListFuncs */ \"./src/js/wishListFuncs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_shoppingList__WEBPACK_IMPORTED_MODULE_3__.displayShoppingList)((0,_shoppingList__WEBPACK_IMPORTED_MODULE_3__.getShoppingList)());\r\n(0,_wishListFuncs__WEBPACK_IMPORTED_MODULE_4__.displayWishList)();\r\n\r\nconst searchBtn = document.querySelector('.search-btn');\r\nconst textBox = document.querySelector('.search-box');\r\n\r\nfunction handleSearch() {\r\n    (0,_search__WEBPACK_IMPORTED_MODULE_0__.getResults)(textBox.value, _card__WEBPACK_IMPORTED_MODULE_1__.createRecipeCard, _main_content__WEBPACK_IMPORTED_MODULE_2__.getRecipeInformation);\r\n}\r\n\r\nsearchBtn.addEventListener('click', handleSearch);\r\n\r\ntextBox.addEventListener('keydown', (event) => {\r\n    \r\n    if (event.key === 'Enter') {\r\n        event.preventDefault();\r\n        handleSearch();\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResults: () => (/* binding */ getResults)\n/* harmony export */ });\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content */ \"./src/js/main-content.js\");\n\r\n\r\nfunction getResults(searchText, createRecipeCard) {\r\n    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${_main_content__WEBPACK_IMPORTED_MODULE_0__.apiKey}&query=${searchText}`)\r\n        .then(res => res.json())\r\n        .then(data => {\r\n            const leftMenu = document.querySelector('.left-menu');\r\n            leftMenu.innerHTML = \"\";\r\n            if (data.results && data.results.length > 0) {\r\n                data.results.forEach(recipe => {\r\n                   const card= createRecipeCard(recipe);\r\n                   leftMenu.appendChild(card);\r\n                });\r\n            } else {\r\n                leftMenu.innerHTML = \"<p class='titles m-4 fw-bold'>No results found</p>\";\r\n            }\r\n        })\r\n        .catch(error => {\r\n            console.error('Error fetching data:', error);\r\n        });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/search.js?");

/***/ }),

/***/ "./src/js/shoppingList.js":
/*!********************************!*\
  !*** ./src/js/shoppingList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToShoppingList: () => (/* binding */ addToShoppingList),\n/* harmony export */   displayShoppingList: () => (/* binding */ displayShoppingList),\n/* harmony export */   getShoppingList: () => (/* binding */ getShoppingList)\n/* harmony export */ });\nfunction displayShoppingList( shoppingList) {\r\n    const shoppingListContainer = document.querySelector('.shopping-list-container');\r\n    shoppingListContainer.innerHTML = \"\";\r\n\r\n    if (shoppingList.length > 0) {\r\n        shoppingList.forEach(item => {\r\n            const materialContainer = document.createElement('div');\r\n            materialContainer.classList.add('material-container', 'd-flex', 'justify-content-between');\r\n\r\n            const itemName = item.name; \r\n            const amount = item.quantity; \r\n\r\n            const itemNameElement = document.createElement('div');\r\n            itemNameElement.textContent = itemName;\r\n            materialContainer.appendChild(itemNameElement);\r\n\r\n            const amountSection = document.createElement('div');\r\n\r\n            const plusButton = document.createElement('button');\r\n            plusButton.textContent = '+';\r\n            plusButton.classList.add('btn', 'btn-success', 'btn-sm', 'rounded-circle');\r\n            plusButton.addEventListener('click', () => updateQuantity(itemName, 1));\r\n            amountSection.appendChild(plusButton);\r\n\r\n            const quantityInput = document.createElement('input');\r\n            quantityInput.value = amount;\r\n            quantityInput.readOnly = true;\r\n            quantityInput.classList.add('quantity-input', 'text-center');\r\n            quantityInput.style.width = '50px';\r\n            amountSection.appendChild(quantityInput);\r\n\r\n            const minusButton = document.createElement('button');\r\n            minusButton.textContent = '-';\r\n            minusButton.classList.add('btn', 'btn-warning', 'btn-sm', 'rounded-circle');\r\n            minusButton.addEventListener('click', () => updateQuantity(itemName, -1));\r\n            amountSection.appendChild(minusButton);\r\n\r\n            const removeButton = document.createElement('button');\r\n            removeButton.textContent = 'x';\r\n            removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'rounded-circle');\r\n            removeButton.addEventListener('click', () => removeFromShoppingList(itemName));\r\n            amountSection.appendChild(removeButton);\r\n            materialContainer.appendChild(amountSection);\r\n\r\n            shoppingListContainer.appendChild(materialContainer);\r\n        });\r\n\r\n        const clearBtn = document.createElement('button');\r\n        clearBtn.classList.add(\"btn\", \"btn-outline-secondary\", \"mx-auto\", \"mt-3\");\r\n        clearBtn.innerHTML = 'Clear list <i class=\"fa-solid fa-trash-can\"></i>';\r\n        clearBtn.addEventListener('click', () => {\r\n            localStorage.removeItem('shoppingList');\r\n            displayShoppingList([]);\r\n        });\r\n        shoppingListContainer.appendChild(clearBtn);\r\n    }\r\n}\r\n\r\nfunction updateQuantity(itemName, changeAmount) {\r\n    const shoppingList = getShoppingList();\r\n    const updatedShoppingList = shoppingList.map(existingItem => {\r\n        if (existingItem.name === itemName) {\r\n            const newQuantity = Math.max(0, existingItem.quantity + changeAmount * existingItem.basicAmount);\r\n            return { ...existingItem, quantity: newQuantity };\r\n        }\r\n        return existingItem;\r\n    });\r\n\r\n    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));\r\n\r\n    displayShoppingList(updatedShoppingList);\r\n}\r\n\r\nfunction removeFromShoppingList(itemName) {\r\n    const shoppingList = getShoppingList();\r\n    const updatedShoppingList = shoppingList.filter(existingItem => existingItem.name !== itemName);\r\n\r\n    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));\r\n\r\n    displayShoppingList(updatedShoppingList);\r\n}\r\n\r\nfunction addToShoppingList(materials, servingsAmount) {\r\n    const shoppingList = getShoppingList();\r\n\r\n    materials.forEach(material => {\r\n        const itemName = `${material.unit} ${material.name}`;\r\n        const existingItemIndex = shoppingList.findIndex(item => item.name === itemName);\r\n        \r\n        if (existingItemIndex !== -1) {\r\n            const existingItem = shoppingList[existingItemIndex];\r\n            const existingQuantity = existingItem.quantity;\r\n            const newQuantity = existingQuantity + (material.amount * servingsAmount);\r\n            shoppingList[existingItemIndex] = { ...existingItem, quantity: newQuantity };\r\n        } else { \r\n            const newItem = {\r\n                name: itemName,\r\n                quantity: material.amount * servingsAmount,\r\n                unit: material.unit,\r\n                basicAmount: material.amount,\r\n            };\r\n            shoppingList.push(newItem);\r\n        }\r\n    });\r\n\r\n    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));\r\n\r\n    displayShoppingList(shoppingList);\r\n}\r\n\r\nfunction getShoppingList() {\r\n    return JSON.parse(localStorage.getItem('shoppingList')) || [];\r\n}\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/shoppingList.js?");

/***/ }),

/***/ "./src/js/wishListFuncs.js":
/*!*********************************!*\
  !*** ./src/js/wishListFuncs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToWishList: () => (/* binding */ addToWishList),\n/* harmony export */   displayWishList: () => (/* binding */ displayWishList),\n/* harmony export */   initiallyBtnStyle: () => (/* binding */ initiallyBtnStyle)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/js/card.js\");\n\r\n\r\n\r\nfunction addToWishList(addToWishListBtn, recipeData) {\r\n    const wishList=getWishlist();\r\n\r\n    const wishListContainer = document.querySelector('.wish-list-container');\r\n    console.log(wishList);\r\n    const isAlreadyInWishlist = isInWishList(recipeData);\r\n\r\n    if (!isAlreadyInWishlist) {\r\n        // Adding to Local storage\r\n        wishList.push({\r\n            recipe: recipeData,\r\n        });\r\n        localStorage.setItem('wishlist', JSON.stringify(wishList));\r\n\r\n        // Adding to UI\r\n        const card = (0,_card__WEBPACK_IMPORTED_MODULE_0__.createRecipeCard)(recipeData);\r\n        wishListContainer.appendChild(card);\r\n\r\n        addToWishListBtn.classList.remove(\"btn-outline-danger\");\r\n        addToWishListBtn.classList.add(\"btn-danger\");    \r\n    } else {\r\n        console.log('Recipe already in wishlist');\r\n        \r\n        // Removing from Local storage\r\n        const updatedWishlist = wishList.filter(item => item.recipe.id !== recipeData.id);\r\n        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));\r\n\r\n        // Removing from UI\r\n        const cardToRemove = wishListContainer.querySelector(`.recipe-card-${recipeData.id}`);\r\n        if (cardToRemove) {\r\n            cardToRemove.remove();\r\n            console.log('Recipe has been removed from wishlist'); \r\n        }\r\n        \r\n        addToWishListBtn.classList.remove(\"btn-danger\");\r\n        addToWishListBtn.classList.add(\"btn-outline-danger\");\r\n    }\r\n}\r\n\r\nfunction displayWishList() {\r\n    const wishListContainer = document.querySelector('.wish-list-container');\r\n\r\n    wishListContainer.innerHTML = '';\r\n    getWishlist().forEach(item => {\r\n        wishListContainer.appendChild((0,_card__WEBPACK_IMPORTED_MODULE_0__.createRecipeCard)(item.recipe));\r\n    });\r\n}\r\n\r\nfunction initiallyBtnStyle(addToWishListBtn,recipe){\r\n    const isExist=isInWishList(recipe);\r\n    if(isExist){       \r\n        addToWishListBtn.classList.add('btn-danger');\r\n    }else{\r\n        addToWishListBtn.classList.add('btn-outline-danger','text-whit');\r\n    }\r\n}\r\n\r\nfunction isInWishList(recipeToSearch){  \r\n    return getWishlist().some(item => item.recipe.id === recipeToSearch.id);\r\n}\r\n\r\nfunction getWishlist() {\r\n    return JSON.parse(localStorage.getItem('wishlist')) || [];\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipes-project/./src/js/wishListFuncs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;