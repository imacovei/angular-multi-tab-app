import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';

import { BreweriesComponent } from './breweries.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfoTooltipComponent } from '../info-tooltip/info-tooltip.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

describe('BreweriesComponent', () => {
  let component: BreweriesComponent;
  let fixture: ComponentFixture<BreweriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        TooltipModule
      ],
      declarations: [
        BreweriesComponent,
        InfoTooltipComponent,
        FaIconComponent
      ],
      providers:[DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
