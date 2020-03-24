import { Component, OnInit } from '@angular/core';
import Shuffle from 'shufflejs';

@Component({
	selector: 'app-visitors',
	templateUrl: './visitors.component.html',
	styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log("ngOnInit() projects");

		var projectGrid = new Shuffle(document.getElementById('portfolio-grid'), {
			itemSelector: '.item'
		});

		const portfolioFilters = document.getElementById('portfolio-filters'); // the div tag that surrounds all filter options
		const filters = portfolioFilters.getElementsByTagName('a'); // array of filters (a-tags)

		// set click listeners for each filter element
		let i;
		for (i = 0; i < filters.length; i++) {
			filters[i].addEventListener('click', function(e) {
				e.preventDefault(); // prevents default href behavior (following link to another page)
				let groupName = this.getAttribute('data-group');

				let j;
				for (j = 0; j < filters.length; j++) {
					filters[j].classList.remove('active');
				}

				this.classList.add('active');

				// console.log(filters[0].classList);
				// console.log(filters[1].classList);
				// console.log(filters[2].classList);
				// console.log(filters[3].classList);

				projectGrid.filter(groupName);
			});
		}


		// filterOption.addEventListener('click', (e:Event) => {
		// 	// e.preventDefault();
		// 	console.log("filterOption clicked");
		// });


		// .on('click', function (e) {
		// 	e.preventDefault();
		// 	var groupName = $(this).attr('data-group');
		// 	$('#portfolio-filters > ul > li > a').removeClass('active');
		// 	$(this).addClass('active');
		// 	grid.shuffle('shuffle', groupName );
		// });

		// $('a.image-link').magnificPopup({
		// 	type: 'image',
		// 	removalDelay: 300,
		// 	mainClass: 'mfp-fade',
		// 	gallery: {
		// 		enabled: true
		// 	}
		// });
	}

}
