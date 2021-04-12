import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompamyprofileComponent } from './compamyprofile.component';

describe('CompamyprofileComponent', () => {
  let component: CompamyprofileComponent;
  let fixture: ComponentFixture<CompamyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompamyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompamyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
