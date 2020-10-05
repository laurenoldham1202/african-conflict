import { Component, OnInit } from '@angular/core';

import * as M from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: M.Map;
  accessToken = 'pk.eyJ1IjoibGF1cmVub2xkaGFtMTIwMiIsImEiOiJjaW55dm52N2gxODJrdWtseWZ5czAyZmp5In0.YkEUt6GvIDujjudu187eyA';

  constructor() { }

  ngOnInit() {
    (M as any).accessToken = this.accessToken;

    this.map = new M.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: { lon: 18.08970, lat: 1.89502 },
      zoom: 2.9,
    });
  }

}
