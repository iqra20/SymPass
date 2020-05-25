import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalImgPage } from './modal-img.page';

describe('ModalImgPage', () => {
  let component: ModalImgPage;
  let fixture: ComponentFixture<ModalImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
