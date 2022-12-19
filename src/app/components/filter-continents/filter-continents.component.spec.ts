import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterContinentsComponent } from './filter-continents.component';

describe('FilterContinentsComponent', () => {
  let component: FilterContinentsComponent;
  let fixture: ComponentFixture<FilterContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterContinentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
