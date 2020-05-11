import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePassPage } from './detalle-pass.page';

describe('DetallePassPage', () => {
  let component: DetallePassPage;
  let fixture: ComponentFixture<DetallePassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
