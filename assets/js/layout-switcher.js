const layout_switcher = document.querySelector("#layout-switcher");
layout_switcher.querySelector("button").addEventListener("click", switch_layout);


function switch_layout() {
	let new_layout;
	switch (layout_switcher.getAttribute("data-view")) {
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

	layout_switcher.setAttribute("data-view", new_layout);
}
