"use client";

import {useEffect} from "react";

export default function StaticRender() {
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
			MAIN SECTION, STATIC CONTENT BELOW
			<p>This demo shows statically included HTML with no client-side hydration. The content is rendered via SSR and then delivered to the page BEFORE rendering in Next.js occurs, so the host application can render a pre-generated static HTML section.</p>
			<main id="static_section" style={{"flex": 1}} suppressHydrationWarning={true}>

			</main>
			<footer>FOOTER</footer>
		</>
	)
}
