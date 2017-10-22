import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnusedFeatureComponent } from './unused-feature.component';

describe('UnusedFeatureComponent', () => {
  let component: UnusedFeatureComponent;
  let fixture: ComponentFixture<UnusedFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnusedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnusedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
