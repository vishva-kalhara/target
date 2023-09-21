function openLfetMenu() {
    if (window.innerWidth < 768) {
        const menu_left = document.querySelector(".menu_left");
        const menu_right = document.querySelector(".menu_right");
        
        menu_left.style.display = 'block'
        menu_right.style.display = 'none'
    }  
}

function closeLfetMenu() {
    if (window.innerWidth < 768) {
        const menu_left = document.querySelector(".menu_left");
        const menu_right = document.querySelector(".menu_right");
        
        menu_left.style.display = 'none'
        menu_right.style.display = 'block'
    }
}

function postHandler(file_name, formData) {
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					const result = req.responseText;
					resolve(result);
				} else {
					reject(new Error("Request failed"));
				}
			}
		};
		req.open("POST", `./widgets/${file_name}.php`, true);
		req.send(formData);
	});
}

function getHandler(file_name, expression) {
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					const result = req.responseText;

					resolve(result);
				}
			}
		};
		req.open("GET", `./widgets/${file_name}.html?${expression}`);
		req.send();
	});
}