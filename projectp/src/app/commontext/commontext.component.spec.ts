import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontextComponent } from './commontext.component';

describe('CommontextComponent', () => {
  let component: CommontextComponent;
  let fixture: ComponentFixture<CommontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommontextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
