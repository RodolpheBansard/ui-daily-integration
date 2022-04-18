import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmIntroSectionComponent } from './fm-intro-section.component';

describe('FmIntroSectionComponent', () => {
  let component: FmIntroSectionComponent;
  let fixture: ComponentFixture<FmIntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmIntroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
