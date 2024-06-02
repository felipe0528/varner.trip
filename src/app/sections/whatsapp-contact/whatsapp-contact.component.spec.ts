import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappContactComponent } from './whatsapp-contact.component';

describe('WhatsappContactComponent', () => {
  let component: WhatsappContactComponent;
  let fixture: ComponentFixture<WhatsappContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
