import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit(){
    const numbers = of(1,2,3,4);

    numbers.subscribe((number)=> console.log(number));
  }
}
