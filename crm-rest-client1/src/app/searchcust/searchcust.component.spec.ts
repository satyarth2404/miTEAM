import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcustComponent } from './searchcust.component';

describe('SearchcustComponent', () => {
  let component: SearchcustComponent;
  let fixture: ComponentFixture<SearchcustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
