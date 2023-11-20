const loadData = () => {
	fetch("http://localhost:3011/api/v1/components/TestTabs1/1.0.0/html?targetElementId=dynamic_section").then((response) => {
		return response.text();
	}).then((content) => {
		const newHTML = document.createRange().createContextualFragment(content);
		document.getElementById("dynamic_section").append(newHTML);
	});
};

const target = document.querySelector('#dynamic_section');
const observer = new IntersectionObserver(loadData);
observer.observe(target);
