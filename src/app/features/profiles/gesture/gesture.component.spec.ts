import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureComponent } from './gesture.component';

describe('GestureComponent', () => {
  let component: GestureComponent;
  let fixture: ComponentFixture<GestureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
