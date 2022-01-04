import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsAddComponent } from './divisions-add.component';

describe('DivisionsAddComponent', () => {
  let component: DivisionsAddComponent;
  let fixture: ComponentFixture<DivisionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
