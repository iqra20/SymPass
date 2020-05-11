import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpassPage } from './addpass.page';

describe('AddpassPage', () => {
  let component: AddpassPage;
  let fixture: ComponentFixture<AddpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
