import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { firstValueFrom } from 'rxjs';

import { DataService } from '../shared/data.service';
import { filterLengthValidator } from '../shared/validators';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit
{

  public breweriesInputForm: FormGroup;
  public breweriesData!: Brewery[];
  public loading: boolean = false;
  public searchSymbol = faSearchLocation;
  public filterMinLength = 4;

  constructor(private fb: FormBuilder, private dataService: DataService)
  {
    this.breweriesInputForm = this.fb.group({
      location: ['', [filterLengthValidator(this.filterMinLength)]],
      filterType: ['city', [Validators.required]],
    }); 
  }

  ngOnInit(): void
  {
  }

  public async getAllBreweries()
  {
    const request$ = this.dataService.getBackendData("https://api.openbrewerydb.org/breweries", [], []);
    this.breweriesData = (await firstValueFrom(request$)).dataItems;
  }

  public getBreweries()
  {
    this.getAllBreweries().then(
      this.FilterBreweries.bind(this)
    );
  }

  private FilterBreweries()
  {
    if (this.breweriesInputForm.value.location.length > 0)
    {
      this.FilterBreweriesByCity();
      this.FilterBreweriesByState();
      this.FilterBreweriesByCountry();
    }
  }

  private FilterBreweriesByCity()
  {
    if (this.breweriesInputForm.value.filterType === "city")
    {
      this.breweriesData = this.breweriesData.filter((obj: Brewery) => obj.city.includes(this.breweriesInputForm.value.location));
    }
  }

  private FilterBreweriesByState()
  {
    if (this.breweriesInputForm.value.filterType === "state")
    {
      this.breweriesData = this.breweriesData.filter((obj: Brewery) => obj.state.includes(this.breweriesInputForm.value.location));
    }
  }

  private FilterBreweriesByCountry()
  {
    if (this.breweriesInputForm.value.filterType === "country")
    {
      this.breweriesData = this.breweriesData.filter((obj: Brewery) => obj.country.includes(this.breweriesInputForm.value.location));
    }
  }

  get location() { return this.breweriesInputForm.get('location'); }

}

export interface Brewery
{
  address_2: string;
  address_3: string;
  brewery_type: string;
  city: string;
  country: string;
  county_province: string;
  created_at: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  phone: string;
  postal_code: string;
  state: string;
  street: string;
  updated_at: string;
  website_url: string;
}