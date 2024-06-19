function isHTTPValidationError(data: unknown): data is HTTPValidationError {
	return (
		data !== null &&
		typeof data === "object" && 
		'success' in data &&
		typeof data.success === "string"
	)
}

export {
	isHTTPValidationError
}