import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  constructor(private router: Router, private navCrl: NavController) {}

  ngOnInit() {}

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover'); // new page animation
    this.navCrl.navigateBack('/places/tabs/discover'); // back page animation
    // this.navCrl.pop();
  }
}
