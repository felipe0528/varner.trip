import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAssistanceComponent } from './ai-assistance.component';

describe('AiAssistanceComponent', () => {
  let component: AiAssistanceComponent;
  let fixture: ComponentFixture<AiAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAssistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
