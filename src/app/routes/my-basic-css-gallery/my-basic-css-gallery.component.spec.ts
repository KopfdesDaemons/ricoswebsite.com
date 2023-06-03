import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBasicCssGalleryComponent } from './my-basic-css-gallery.component';

describe('MyBasicCssGalleryComponent', () => {
  let component: MyBasicCssGalleryComponent;
  let fixture: ComponentFixture<MyBasicCssGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBasicCssGalleryComponent]
    });
    fixture = TestBed.createComponent(MyBasicCssGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
