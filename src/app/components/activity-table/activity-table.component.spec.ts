import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTableComponent } from './activity-table.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducer/reducers';

describe('ActivityTableComponent', () => {
  let component: ActivityTableComponent;
  let fixture: ComponentFixture<ActivityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTableComponent, ReversePipe ],
      imports: [
        StoreModule.forRoot(reducers, {})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
