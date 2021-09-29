import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLayoutComponent } from './land-layout.component';

describe('LandLayoutComponent', () => {
  let component: LandLayoutComponent;
  let fixture: ComponentFixture<LandLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
