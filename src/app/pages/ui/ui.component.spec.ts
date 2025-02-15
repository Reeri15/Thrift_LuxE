import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIComponent } from './ui.component';

describe('UIComponent', () => {
  let component: UIComponent;
  let fixture: ComponentFixture<UIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
