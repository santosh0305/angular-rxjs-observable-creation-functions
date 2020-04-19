import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';
import { tap,map,take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular - RxJs';

  ngOnInit(){

    // this.readNumberUsingOfOperator();
    
    // this.readNumberUsingFromOperator();

    // this.readStringsFromStream();

    // this.readUsingPipeOperator();

    this.usePipeAndTap();

    //this.useTakeOperator();
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

  readStringsFromStream(){
    of('red apple','green apple', 'kashmir apple').subscribe(
      (next) => console.log(`Next type of apple is ${next}`),
      (err)=> console.error(`Error occured`),
      () => console.log('complete')
    );
  }

  readUsingPipeOperator(){
    of(2,4,6).
      pipe(
        map(item=> item * 2),
        tap(item => console.log(item)),
        take(2)
      ).subscribe(console.log);
  }

  usePipeAndTap(){
    of(5,10,15,20).pipe(
      map(item => item * 2),
      tap(item => console.log(`Multiplied value is ${item}`)),
      map(item => item -3),
      tap(item => console.log(`Subtracted value is ${item}`)),
      map(item => {
        if(item<20){
          throw new Error('Values lesser than 10')
        } 
        return item;
      })
    ).subscribe(console.log)
  }

  useTakeOperator(){
    of(2,4,6,8,10,15,30).pipe(
      tap(item => console.log(`Initial value ${item}`)),
      map(item=>item / 2),
      tap(item => console.log(`Divide Value : ${item}`)),
      take(2)
    ).subscribe();
  }

}

// observable -> pipe -> subscribe
// https://rxjs.dev/operator-decision-tree