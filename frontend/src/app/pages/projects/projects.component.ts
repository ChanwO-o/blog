import { Component, OnInit } from '@angular/core';
import Shuffle from 'shufflejs';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log("ngOnInit() projects");

		let projectGrid = new Shuffle(document.getElementById('portfolio-grid'), {
			itemSelector: '.item'
		});

		setTimeout(() => { // re-initialize grid shortly after ngOnInit() to hide 'squashing' behavior
			projectGrid = new Shuffle(document.getElementById('portfolio-grid'), {
				itemSelector: '.item'
			});
		}, 500);

		// setup Shuffle instance event listeners
		// Get notified when a layout happens
		projectGrid.on(Shuffle.EventType.LAYOUT, function () {
			console.log('Things finished moving!');
		});

		// Do something when an item is removed
		projectGrid.on(Shuffle.EventType.REMOVED, function (data) {
			console.log("item removed: ", this, data, data.collection, data.shuffle);
		});

		const portfolioFilters = document.getElementById('portfolio-filters'); // the div tag that surrounds all filter options
		const filters = portfolioFilters.getElementsByTagName('a'); // array of filters (a-tags)

		// set click listeners for each filter element
		let i;
		for (i = 0; i < filters.length; i++) {
			filters[i].addEventListener('click', function(e) {
				e.preventDefault(); // prevents default href behavior (following link to another page)

				let groupName = this.getAttribute('data-group'); // get selected filter name
				console.log("groupName: " + groupName);

				let j;
				for (j = 0; j < filters.length; j++)
					filters[j].classList.remove('active'); // remove active filter
				this.classList.add('active'); // set current filter as active

				projectGrid.filter(groupName); // apply new filter
			});
		}
		// console.log(projectGrid);

		// zoom into project image (can't use magnificPopup library due to dependency on jquery)
		// TODO: find image-viewing carousel library to use here, prefer one that supports multiple images and can load video
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
