
import {Component} from 'angular2/core';
@Component({
	selector: 'pm-app',
	template:`
	<div>
	<h1>{{PagTitle}}</h1>
	<div>My first component</div>
	</div>
`
})
export class AppComponent
{
	PagTitle: string ="ACME Title";	
}