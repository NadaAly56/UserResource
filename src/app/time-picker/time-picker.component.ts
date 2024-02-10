import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent {
  isOpen: boolean= false
  houre:string = '09'
  minutes: string = '00'
  time: string = this.houre+":"+this.minutes
  constructor(){

  }
  togglePicker() {
    this.isOpen = !this.isOpen
    console.log(this.isOpen);
    this.time = `${this.houre}:${this.minutes}`
    return this.isOpen

  }
  getHour(e:any){
    this.houre = e.target.firstChild.data
    console.log(e);

  }
  getMinutes(e:any){
    this.minutes = e.target.firstChild.data
  }
}
