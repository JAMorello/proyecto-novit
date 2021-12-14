import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFormDialogComponent } from './small-form-dialog.component';

describe('SmallFormDialogComponent', () => {
  let component: SmallFormDialogComponent;
  let fixture: ComponentFixture<SmallFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
