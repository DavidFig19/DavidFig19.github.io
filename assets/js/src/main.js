class MainApp {
	constructor() {
	
	}

	load() {
		document.addEventListener('DOMContentLoaded', () => {
			this.init();
			
		});
	}

	init() {
		const year = new Date().getFullYear();

        document.getElementById("year-footer").textContent = year;
	}

}

window.hozen = window.hozen || {};
window.hozen.app = window.hozen.app || {};
window.hozen.app.MainApp = new MainApp();
window.hozen.app.MainApp.load();
