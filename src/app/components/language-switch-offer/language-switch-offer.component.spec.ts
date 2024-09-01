import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitchOfferComponent } from './language-switch-offer.component';

describe('LanguageSwitchOfferComponent', () => {
  let component: LanguageSwitchOfferComponent;
  let fixture: ComponentFixture<LanguageSwitchOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [LanguageSwitchOfferComponent]
});
    fixture = TestBed.createComponent(LanguageSwitchOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
