const posts = document.querySelector(".posts");
const layout_switcher = posts.querySelector("button.layout-switcher");

layout_switcher.addEventListener("click", _ => {
	let new_layout;
	switch (posts.getAttribute("data-view")) {
		case "list":
			new_layout = "grid";
			break;
		case "grid":
			new_layout = "list";
			break;
		default:
			new_layout = "list";
			break;
	}

	posts.setAttribute("data-view", new_layout);
});
