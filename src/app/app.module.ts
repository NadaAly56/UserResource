import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourceTimingComponent } from './resource-timing/resource-timing.component';
import { WorkTimingComponent } from './work-timing/work-timing.component';
import { ReserverationComponent } from './reserveration/reserveration.component';
import { FormsModule } from '@angular/forms';
import { WeekDaysComponent } from './week-days/week-days.component';
import { TimePickerComponent } from './time-picker/time-picker.component'
import {StoreModule, provideStore} from "@ngrx/store"
import { resourceReducer } from './store/reducers/resource.reducer';
import { AppDirDirective } from './Directives/app-dir.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppDirDirective,
    AppComponent,
    HeaderComponent,
    ResourceComponent,
    ResourceTimingComponent,
    WorkTimingComponent,
    ReserverationComponent,
    WeekDaysComponent,
    TimePickerComponent,

  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({resource: resourceReducer}),
  ],
  exports: [
    AppDirDirective
  ],
  providers: [
    provideStore({resource: resourceReducer }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/locale/',  '.json')
}
