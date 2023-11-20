export default function Home() {
	return (
		<>
			<header>HEADER</header>
			MAIN SECTION, DYNAMIC CONTENT BELOW
			<main id="dynamic_section" style={{"flex": 1}} suppressHydrationWarning={true}></main>
			<footer>FOOTER</footer>
			<script src="/dynamic.js" type="application/javascript" async={true}/>
		</>
	)
}
