import {Head, Html, Main, NextScript} from "next/document";


export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
			<Main/>
			<NextScript/>
			<div id="dynamic_section" style={{"flex": 1}}></div>
			<script src="/dynamic.js" type="application/javascript" async={true}/>
			</body>
		</Html>
	)
}
