import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQaComponent } from './faqa.component';

describe('FAQaComponent', () => {
  let component: FAQaComponent;
  let fixture: ComponentFixture<FAQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
