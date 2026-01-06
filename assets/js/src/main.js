class MainApp {
	constructor() {
	
	}

	load() {
		document.addEventListener('DOMContentLoaded', () => {
			this.init();
			this.loadProjects();
			
		});
	}

	init() {
		const year = new Date().getFullYear();

        document.getElementById("year-footer").textContent = year;
	}

	async loadProjects() {
		const url = '../../../data/projects.json';
		
		try {
			const response = await fetch(url);
			const data = await response.json();
			this.renderProjects(data);
		} catch (error) {
			console.log(error);
			
		}
		
	}

	renderProjects(projects) {

		const projectsContainer = document.querySelector('#container-projects');

		projects.forEach(project => {
			const layout = `
			  	<div class="col-md-6 col-xl-4">

                    <a target="_blank" href="${project.url}" class="card-project d-block">
                        <img class="card-project__img" src="assets/images/projects/${project.img}" alt="${project.name}">

                        <div class="card-project__description d-flex flex-column justify-content-center align-items-center p-5">
                            <h4 class="base text-white fw-medium text-center card-project__title">
                                ${project.name}
                                <br>
                                <small class="small">
                                    <i class="fas fa-link"></i>
                                    Visitar web
                                </small>    
                            </h4>
                        </div>
                    </a>

                </div> 
			`;

			projectsContainer.insertAdjacentHTML('beforeend', layout);
		});

	}

}

window.hozen = window.hozen || {};
window.hozen.app = window.hozen.app || {};
window.hozen.app.MainApp = new MainApp();
window.hozen.app.MainApp.load();
