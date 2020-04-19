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

    this.readNumberUsingOfOperator();
    
    this.readNumberUsingFromOperator();
  }

  readNumberUsingOfOperator(){
    of(2,4,6,8).subscribe(console.log);
    
    of(2,4,6,8).subscribe(
      (next) => console.log(`Next item is ${next}`),
      (error) => console.error(`Error occured at ${error}`),
      ()=> console.log(`Competed reading stream`)
    );
  }

  readNumberUsingFromOperator(){
    from([1,2,3,4,5,6,7,8,9]).subscribe(
      (next) => console.log(`Next item is ${next}`),
      (error) => console.error(`Error occured at ${error}`),
      ()=> console.log(`Competed reading stream`)
    );

    const numbers = of(1,2,3,4);
    numbers.subscribe((number)=> console.log(number));
  }
}
