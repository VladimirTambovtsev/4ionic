import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from './../../places.service';

@Component({
  selector: 'app-bookings-offer',
  templateUrl: './bookings-offer.page.html',
  styleUrls: ['./bookings-offer.page.scss']
})
export class BookingsOfferPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtr: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
}
