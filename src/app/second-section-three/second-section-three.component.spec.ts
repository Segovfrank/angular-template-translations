import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionThreeComponent } from './second-section-three.component';

describe('SecondSectionThreeComponent', () => {
  let component: SecondSectionThreeComponent;
  let fixture: ComponentFixture<SecondSectionThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSectionThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
