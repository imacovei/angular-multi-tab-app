import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { InfoTooltipComponent } from './info-tooltip/info-tooltip.component';
import { InfoComponent } from './info/info.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './shared/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TabsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        TooltipModule
      ],
      declarations: [
        AppComponent,
        BreweriesComponent,
        NumbersComponent,
        InfoComponent,
        InfoTooltipComponent,
        FaIconComponent
      ],
      providers:[DataService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-multi-tab-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-multi-tab-app');
  });

  it('should contain at least one tab', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div > div > tabset')?.childElementCount).toBeGreaterThan(0);
  });
});
