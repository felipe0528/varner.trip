import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokVideosComponent } from './tiktok-videos.component';

describe('TiktokVideosComponent', () => {
  let component: TiktokVideosComponent;
  let fixture: ComponentFixture<TiktokVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiktokVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
