// Returns a key value based on the provided route
// If route exists in list of routes that need the Header component, return same string
// Else, return unique key string value
function needsHeader(pathname: string): string {
	const isPageWithHeader = [
		"/",
		"/about",
		"/mission",
		"/contact",
	].includes(pathname);

	return (isPageWithHeader) ? "header" : pathname;
}

export default needsHeader;