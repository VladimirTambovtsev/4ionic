import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  constructor(
    private router: Router,
    private navCrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover'); // new page animation
    // this.navCrl.navigateBack('/places/tabs/discover'); // back page animation
    // this.navCrl.pop();
    const modalEl = await this.modalCtrl.create({
      component: CreateBookingComponent
    });
    modalEl.present();
  }
}
