import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angLearn';
  constructor(public  ser:NewsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ser.get_one().subscribe(x=>{
      console.log('get_one')
      console.log(x)
    })
    
    this.ser.get_two().subscribe(x=>{
      console.log('get_two')

      console.log(x)
    })
    
    this.ser.get_three().subscribe(x=>{
      console.log('get_three')

      console.log(x)
    })
    
    this.ser.get_four().subscribe(x=>{
      console.log('get_four')

      console.log(x)
    })
    
    
    
  }
}
