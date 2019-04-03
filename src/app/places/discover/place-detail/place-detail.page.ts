import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  async onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover'); // next page animation
    // this.navCtrl.navigateBack('/places/tabs/discover'); // back page animation
    // this.navCtrl.pop();
    const modalEl = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    });
    modalEl.present();
    const resultData = await modalEl.onDidDismiss();
    console.log(resultData);
    // .then(resultData => {
    //   console.log(resultData.data, resultData.role);
    //   if (resultData.role === 'confirm') {
    //     console.log('BOOKED!');
    //   }
    // });
  }
}
