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