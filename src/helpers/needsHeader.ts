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