import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionWrapComponent } from './second-section-wrap.component';

describe('SecondSectionWrapComponent', () => {
  let component: SecondSectionWrapComponent;
  let fixture: ComponentFixture<SecondSectionWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSectionWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSectionWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
