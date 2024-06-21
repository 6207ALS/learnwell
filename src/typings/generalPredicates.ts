function isItem(data: unknown): data is Item {
	return (
		data !== null &&
		typeof data === "object" &&
		
		"loc" in data &&
		Array.isArray(data.loc) &&
		data.loc.every(item => typeof item === "string" || typeof item === "number") &&

		"msg" in data &&
		typeof data.msg === "string" &&
		
		"type" in data &&
		typeof data.type === "string"
	)
}

function isHTTPValidationError(data: unknown): data is HTTPValidationError {
	return (
		data !== null &&
		typeof data === 'object' &&
		"detail" in data && 
		Array.isArray(data.detail) &&
		data.detail.every(isItem)
	)
}

export {
	isHTTPValidationError
}