const nextLocalStorage = () => {
	const isBrowser = typeof window !== "undefined";
	if (!isBrowser) return {};
	return window.localStorage;
};

const jsonStorage = (key, storage = nextLocalStorage()) => ({
	setItem(value) {
		if (typeof value !== "object") throw new Error("Invalid value");
		storage?.setItem(key, JSON.stringify(value));
		return value;
	},
	getItem() {
		try {
			return JSON.parse(storage?.getItem(key));
		} catch (error) {
			return JSON.parse(this.setItem({}));
		}
	},
});

export { jsonStorage };
