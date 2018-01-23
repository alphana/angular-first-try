import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureZoneComponent } from './secure-zone.component';

describe('SecureZoneComponent', () => {
  let component: SecureZoneComponent;
  let fixture: ComponentFixture<SecureZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
