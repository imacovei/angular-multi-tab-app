import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-tooltip',
  templateUrl: './info-tooltip.component.html',
  styleUrls: ['./info-tooltip.component.css']
})
export class InfoTooltipComponent implements OnInit {

  infoSymbol = faInfoCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
