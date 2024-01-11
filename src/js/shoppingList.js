export function displayShoppingList( shoppingList) {
    const shoppingListContainer = document.querySelector('.shopping-list-container');
    shoppingListContainer.innerHTML = "";

    if (shoppingList.length > 0) {
        shoppingList.forEach(item => {
            const materialContainer = document.createElement('div');
            materialContainer.classList.add('material-container', 'd-flex', 'justify-content-between');

            const itemName = item.name; 
            const amount = item.quantity; 

            const itemNameElement = document.createElement('div');
            itemNameElement.textContent = itemName;
            materialContainer.appendChild(itemNameElement);

            const amountSection = document.createElement('div');

            const plusButton = document.createElement('button');
            plusButton.textContent = '+';
            plusButton.classList.add('btn', 'btn-success', 'btn-sm', 'rounded-circle');
            plusButton.addEventListener('click', () => updateQuantity(itemName, 1));
            amountSection.appendChild(plusButton);

            const quantityInput = document.createElement('input');
            quantityInput.value = amount;
            quantityInput.readOnly = true;
            quantityInput.classList.add('quantity-input', 'text-center');
            quantityInput.style.width = '50px';
            amountSection.appendChild(quantityInput);

            const minusButton = document.createElement('button');
            minusButton.textContent = '-';
            minusButton.classList.add('btn', 'btn-warning', 'btn-sm', 'rounded-circle');
            minusButton.addEventListener('click', () => updateQuantity(itemName, -1));
            amountSection.appendChild(minusButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'x';
            removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'rounded-circle');
            removeButton.addEventListener('click', () => removeFromShoppingList(itemName));
            amountSection.appendChild(removeButton);
            materialContainer.appendChild(amountSection);

            shoppingListContainer.appendChild(materialContainer);
        });

        const clearBtn = document.createElement('button');
        clearBtn.classList.add("btn", "btn-outline-secondary", "mx-auto", "mt-3");
        clearBtn.textContent = "Clear list";
        clearBtn.addEventListener('click', () => {
            localStorage.removeItem('shoppingList');
            displayShoppingList([]);
        });
        shoppingListContainer.appendChild(clearBtn);
    }
}


function updateQuantity(itemName, changeAmount) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const updatedShoppingList = shoppingList.map(existingItem => {
        if (existingItem.name === itemName) {
            const newQuantity = Math.max(0, existingItem.quantity + changeAmount * existingItem.basicAmount);
            return { ...existingItem, quantity: newQuantity };
        }
        return existingItem;
    });

    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));

    displayShoppingList(updatedShoppingList);
}

function removeFromShoppingList(itemName) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const updatedShoppingList = shoppingList.filter(existingItem => existingItem.name !== itemName);

    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));

    displayShoppingList(updatedShoppingList);
}

export function addToShoppingList(materials, servingsAmount) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    materials.forEach(material => {
        const itemName = `${material.unit} ${material.name}`;
        const existingItemIndex = shoppingList.findIndex(item => item.name === itemName);
        
        if (existingItemIndex !== -1) {
            const existingItem = shoppingList[existingItemIndex];
            const existingQuantity = existingItem.quantity;
            const newQuantity = existingQuantity + (material.amount * servingsAmount);
            shoppingList[existingItemIndex] = { ...existingItem, quantity: newQuantity };
        } else { 
            const newItem = {
                name: itemName,
                quantity: material.amount * servingsAmount,
                unit: material.unit,
                basicAmount: material.amount,
            };
            shoppingList.push(newItem);
        }
    });

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    displayShoppingList(shoppingList);
}
