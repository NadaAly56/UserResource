import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent {
  @Input('day') day:string = ''
  isSelected: boolean = false
  num:number = 1
  addTimePicker(){
    this.num++
    console.log(this.num);

  }
  decreasTimePicker() {
    this.num--
  }
}
