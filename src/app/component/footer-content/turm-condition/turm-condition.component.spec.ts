import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmConditionComponent } from './turm-condition.component';

describe('TurmConditionComponent', () => {
  let component: TurmConditionComponent;
  let fixture: ComponentFixture<TurmConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
