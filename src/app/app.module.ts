import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { NumbersComponent } from './numbers/numbers.component';
import { InfoComponent } from './info/info.component';
import { InfoTooltipComponent } from './info-tooltip/info-tooltip.component';
import { NewlinePipe } from './shared/pipes';
import { DataService } from './shared/data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    NumbersComponent,
    InfoComponent,
    InfoTooltipComponent,
    NewlinePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    TooltipModule,
    FontAwesomeModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
