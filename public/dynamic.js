const loadData = () => {
	const url = new URL(window.location);
	console.log("url from host application", url)

	// http://localhost:3002/en-uk/uk/individual/myBasePath/someOtherPath/funds/GB12342345
	const baseUrl = "http://localhost:3002/en/uk/individual/myBasePath/someOtherPath/funds";
	const parsedUrl = new URL(baseUrl);
	const injectionParts = parsedUrl.pathname.split("/", 4).join("/");
	const finalBits = /(.*?)\/(.*?)\/(.*?)\/funds(.*)/.exec(url.pathname) || ["", "", "", "", "", "", ""];

	console.log("parsedUrl", parsedUrl);
	console.log("injectionParts", injectionParts);
	console.log("finalBits", finalBits);

	const integrationUrl = "http://localhost:3000/difraas/schroders/v1" + injectionParts + "/funds" + finalBits[4] + url.search;
	console.log("integrationUrl", integrationUrl)

	const finalUrl = integrationUrl.indexOf("?") > -1 ? `${integrationUrl}&clientBaseUrl=${baseUrl}` : `${integrationUrl}?clientBaseUrl=${baseUrl}`;

	fetch(finalUrl).then((response) => {
		return response.text();
	}).then((content) => {
		const newHTML = document.createRange().createContextualFragment(content);
		document.getElementById("dynamic_section").replaceChildren(newHTML);
	});
};

const target = document.querySelector('#dynamic_section');
const observer = new IntersectionObserver(loadData);
observer.observe(target);
