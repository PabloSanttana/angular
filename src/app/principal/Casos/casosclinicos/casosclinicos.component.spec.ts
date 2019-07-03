import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosclinicosComponent } from './casosclinicos.component';

describe('CasosclinicosComponent', () => {
  let component: CasosclinicosComponent;
  let fixture: ComponentFixture<CasosclinicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosclinicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosclinicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
