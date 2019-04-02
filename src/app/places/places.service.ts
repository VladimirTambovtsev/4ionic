import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      '1',
      'Mariott',
      'In the heart-center of Boradway',
      'http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201805/349610855.jpg',
      149.99
    ),
    new Place(
      '2',
      'Hayatt',
      '5 stars at Brooklyn',
      'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/10/05/1518/Grand-Hyatt-New-York-P288-Exterior.jpg/Grand-Hyatt-New-York-P288-Exterior.16x9.adapt.1920.1080.jpg',
      249.99
    ),
    new Place(
      '3',
      'Pullman',
      'High class of business trips',
      'https://www.ahstatic.com/photos/2185_ho_00_p_2048x1536.jpg',
      99.99
    )
  ];

  get getPlaces() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }

  constructor() {}
}
