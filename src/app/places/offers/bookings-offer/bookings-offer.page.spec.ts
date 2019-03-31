import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsOfferPage } from './bookings-offer.page';

describe('BookingsOfferPage', () => {
  let component: BookingsOfferPage;
  let fixture: ComponentFixture<BookingsOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsOfferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
