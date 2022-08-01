import { useState, useEffect } from "react";

function useLocalStorage(key) {
    const [storage, setStorage] = useState();

    useEffect(() => {
        if (storage) {
            localStorage.setItem(key, storage)
        }
        else if (!storage && localStorage.getItem(key)) {
            setStorage(localStorage.getItem(key));
        }
    }, [storage])

    return [storage, setStorage];
}

function useJsonStorage(key) {
    const [storage, setStorage] = useState();

    useEffect(() => {
        if (storage && typeof storage === "object") {
            localStorage.setItem(key, JSON.stringify(storage));
        }
        else if (!storage && localStorage.getItem(key)) {
            setStorage(JSON.parse(localStorage.getItem(key)));
        }
        else if (typeof storage !== "object") {
            setStorage({})
        }
    }, [storage])

    return [storage, setStorage];

}

export { useLocalStorage, useJsonStorage };
