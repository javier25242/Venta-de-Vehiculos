import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadosComponent } from './usados.component';

describe('UsadosComponent', () => {
  let component: UsadosComponent;
  let fixture: ComponentFixture<UsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
