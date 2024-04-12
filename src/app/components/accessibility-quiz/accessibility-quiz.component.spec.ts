import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityQuizComponent } from './accessibility-quiz.component';

describe('AccessibilityQuizComponent', () => {
  let component: AccessibilityQuizComponent;
  let fixture: ComponentFixture<AccessibilityQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibilityQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
