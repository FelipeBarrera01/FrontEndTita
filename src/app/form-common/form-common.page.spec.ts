import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCommonPage } from './form-common.page';

describe('FormCommonPage', () => {
  let component: FormCommonPage;
  let fixture: ComponentFixture<FormCommonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCommonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
