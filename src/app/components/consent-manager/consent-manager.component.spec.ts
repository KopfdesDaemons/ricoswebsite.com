import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentManagerComponent } from './consent-manager.component';

describe('ConsentManagerComponent', () => {
  let component: ConsentManagerComponent;
  let fixture: ComponentFixture<ConsentManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ConsentManagerComponent]
});
    fixture = TestBed.createComponent(ConsentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
