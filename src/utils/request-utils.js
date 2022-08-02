function getAuthTokenHeaders(user) {
	return { "X-Authorization": user?.token };
}

export { getAuthTokenHeaders };
