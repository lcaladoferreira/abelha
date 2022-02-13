import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserMediaComponent } from './get-user-media.component';

describe('GetUserMediaComponent', () => {
  let component: GetUserMediaComponent;
  let fixture: ComponentFixture<GetUserMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
