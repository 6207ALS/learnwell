function needsBlobs(pathname: string): string {
	const isPageWithBlobs = [
		"/",
		"/about",
		"/mission",
		"/contact",
	].includes(pathname);

	return (isPageWithBlobs) ? "blobs" : pathname;
}

export default needsBlobs;