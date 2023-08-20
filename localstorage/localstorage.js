const getStorageData = (keyName) => {
    const savedItem = localStorage.getItem(keyName);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem;
};

const saveStorageData = (keyName, value) => {
    localStorage.setItem(keyName, JSON.stringify(value));
};

const deleteStorageData = (keyName) => {
    localStorage.removeItem(keyName);
};

const updateStorageData = (keyName, updateVal) => {
    const getItem = localStorage.getItem(keyName);
    if (!getItem) throw new Error("Item not found!");
    localStorage.setItem(keyName, JSON.stringify(updateVal));
};
