export function displayShoppingList(shoppingList) {
    const shoppingListContainer = document.querySelector('.shopping-list-container');
    shoppingListContainer.innerHTML = "";

    if (shoppingList.length > 0) {
        shoppingList.forEach(item => {
            const materialContainer = document.createElement('div');
            materialContainer.classList.add('material-container', 'd-flex','justify-content-between');

            const itemName = item.split(' ').slice(1).join(' '); // Extracting material name from item
            const amount = parseFloat(item);

            const itemNameElement = document.createElement('div');
            itemNameElement.textContent = itemName;
            materialContainer.appendChild(itemNameElement);

            const amountSecion=document.createElement('div');
            amountSecion.classList.add();

            const plusButton = document.createElement('button');
            plusButton.textContent = '+';
            plusButton.classList.add('btn', 'btn-success','custom-btn');
            plusButton.textContent="+";
            plusButton.addEventListener('click', () => updateQuantity(item, 1));
            amountSecion.appendChild(plusButton);

            const quantityInput = document.createElement('input');
            quantityInput.value = amount;
            quantityInput.readOnly = true;
            quantityInput.classList.add('quantity-input','text-center');
            quantityInput.style.width ='50px';
            amountSecion.appendChild(quantityInput);

            const minusButton = document.createElement('button');
            minusButton.textContent = '-';
            minusButton.classList.add('btn', 'btn-warning','custom-btn');
            minusButton.textContent="-";
            minusButton.addEventListener('click', () => updateQuantity(item, -1));
            amountSecion.appendChild(minusButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'x';
            removeButton.classList.add('btn', 'btn-danger','custom-btn');
            removeButton.addEventListener('click', () => removeFromShoppingList(item));
            amountSecion.appendChild(removeButton);
            materialContainer.appendChild(amountSecion);

            shoppingListContainer.appendChild(materialContainer);
        });

        const clearBtn = document.createElement('button');
        clearBtn.classList.add("btn", "btn-outline-secondary", "mx-auto", "mt-3");
        clearBtn.textContent = "Clear list";
        clearBtn.addEventListener('click', () => {
            localStorage.removeItem('shoppingList');
            displayShoppingList([]); // Clear the displayed shopping list
        });
        shoppingListContainer.appendChild(clearBtn);
    }
}

function updateQuantity(item, amount) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const updatedShoppingList = shoppingList.map(existingItem => {
        if (existingItem.includes(item)) {
            const regex = /\d+/;
            const existingQuantity = parseFloat(existingItem.match(regex)[0]);
            const newQuantity = existingQuantity + amount;
            return `${newQuantity} ${existingItem.split(' ').slice(1).join(' ')}`;
        }
        return existingItem;
    });

    // Save the updated shopping list in local storage
    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));

    // Update the displayed shopping list
    displayShoppingList(updatedShoppingList);
}

function removeFromShoppingList(item) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const updatedShoppingList = shoppingList.filter(existingItem => !existingItem.includes(item));

    // Save the updated shopping list in local storage
    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));

    // Update the displayed shopping list
    displayShoppingList(updatedShoppingList);
}

export function addToShoppingList(materials, servingsAmount) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    materials.forEach(material => {
        const itemName = `${material.unit} ${material.name}`;
        const existingItemIndex = shoppingList.findIndex(item => item.includes(itemName));

        if (existingItemIndex !== -1) {
            // Update the quantity of the existing item
            const existingItem = shoppingList[existingItemIndex];
            const regex = /\d+/;
            const existingQuantity = parseInt(existingItem.match(regex)[0], 10);
            const newQuantity = existingQuantity + (material.amount * servingsAmount);
            shoppingList[existingItemIndex] = `${newQuantity} ${material.unit} ${material.name}`;
        } else {
            // Add the item to the shopping list
            const newItem = `${material.amount * servingsAmount} ${material.unit} ${material.name}`;
            shoppingList.push(newItem);
        }
    });

    // Save the updated shopping list in local storage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    // Update the displayed shopping list
    displayShoppingList(shoppingList);
}
