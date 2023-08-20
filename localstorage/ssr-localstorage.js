const SSRGetStorageData = (keyName) => {
    if (typeof window !== "undefined") {
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem;
    }
};

const SSRSaveStorageData = (keyName, value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(keyName, JSON.stringify(value));
    }
};

const SSRdeleteStorageData = (keyName) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(keyName);
    }
};

const SSRUpdateStorageData = (keyName, updateVal) => {
    if (typeof window !== "undefined") {
        const getItem = localStorage.getItem(keyName);
        if (!getItem) throw new Error("Item not found!");
        localStorage.setItem(keyName, JSON.stringify(updateVal));
    }
};
