import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailsInfoComponent } from './case-details-info.component';

describe('CaseDetailsInfoComponent', () => {
  let component: CaseDetailsInfoComponent;
  let fixture: ComponentFixture<CaseDetailsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseDetailsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
