// main blogpost component that displays all details of a blogpost object
import { Component } from '@angular/core'

@Component({ // decorator that marks as component
	selector: 'app-blogpost-view',					// label in html
	templateUrl: './blogpost-view.component.html'	// path to template
})

export class BlogpostViewComponent {
	blogpostTitle = 'blogpost title here'
	blogpostBody = 'blogpost body here'
}