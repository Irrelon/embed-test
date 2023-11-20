"use client";

import {useEffect} from "react";

export default function DirectRender() {
	useEffect(() => {
		const targetElem = document.getElementById("dynamic_section");
		if (targetElem === null) return;

		const loadData = () => {
			fetch("https://component-server.code.irrelon.com/api/v1/components/TestTabs1/1.0.0/html?targetElementId=dynamic_section").then((response) => {
				return response.text();
			}).then((content) => {
				const newHTML = document.createRange().createContextualFragment(content);

				if (targetElem !== null) {
					targetElem.append(newHTML);
				}
			});
		};

		const observer = new IntersectionObserver(loadData);
		observer.observe(targetElem);

		return () => {
			observer.unobserve(targetElem);
		};
	}, []);

	return (
		<>
			<header>HEADER</header>
			MAIN SECTION, DYNAMIC CONTENT BELOW
			<main id="dynamic_section" style={{"flex": 1}} suppressHydrationWarning={true}></main>
			<footer>FOOTER</footer>
		</>
	)
}
