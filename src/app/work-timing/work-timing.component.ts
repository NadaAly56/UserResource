import { Component, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'app-work-timing',
  templateUrl: './work-timing.component.html',
  styleUrls: ['./work-timing.component.scss']
})
export class WorkTimingComponent {

  @Input() lan:string = 'rtl';
  setting:string = 'regular'
  days:string[] = ['السبت','الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة']
  daysEn:string[]=['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  setSettings(val:string):void {
    this.setting = val
  }
}
