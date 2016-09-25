
import {Component} from 'angular2/core'
import {ProductListComponent} from './products/product-list.component'
@Component({
	selector: 'pm-app',
	template:`
	<div>
	<h1>{{Title}}</h1>
	<pm-products></pm-products>
	</div>
`,
directives:[ProductListComponent]
})
export class AppComponent
{
	Title: string ="ACME Product Manegment"	
}