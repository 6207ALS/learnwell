// Returns a key value based on the provided route
// If route exists in list of routes that need the Blobs component, return same string
// Else, return unique key string value
function needsBlobs(pathname: string): string {
	const isPageWithBlobs = [
		"/",
		"/about",
		"/mission",
		"/contact",
		"/signin",
	].includes(pathname);

	return (isPageWithBlobs) ? "blobs" : pathname;
}

export default needsBlobs;