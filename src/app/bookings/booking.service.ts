import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _booking: Booking[] = [
    {
      id: '1',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'u1'
    }
  ];

  get bookings() {
    return [...this._booking];
  }
}
