import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-timing',
  templateUrl: './resource-timing.component.html',
  styleUrls: ['./resource-timing.component.scss']
})
export class ResourceTimingComponent {
minute:number = 30
fixedRadio:string = ''
multyRadio:string = ''
increase(){
  this.minute++
  console.log(this.fixedRadio);

}
decrease(){
  this.minute--
}
resetFixed(){
  this.fixedRadio = ''
}
resetMulty(){
  this.multyRadio = ''
}
}
