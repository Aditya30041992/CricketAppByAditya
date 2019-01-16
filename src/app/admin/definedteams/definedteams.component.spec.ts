import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinedteamsComponent } from './definedteams.component';

describe('DefinedteamsComponent', () => {
  let component: DefinedteamsComponent;
  let fixture: ComponentFixture<DefinedteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinedteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinedteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
