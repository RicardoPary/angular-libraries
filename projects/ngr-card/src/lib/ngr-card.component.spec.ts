import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrCardComponent } from './ngr-card.component';

describe('NgrCardComponent', () => {
  let component: NgrCardComponent;
  let fixture: ComponentFixture<NgrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
