import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionTwoComponent } from './second-section-two.component';

describe('SecondSectionTwoComponent', () => {
  let component: SecondSectionTwoComponent;
  let fixture: ComponentFixture<SecondSectionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSectionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
