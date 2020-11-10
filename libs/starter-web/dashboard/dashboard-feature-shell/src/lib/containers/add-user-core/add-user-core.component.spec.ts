import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserCoreComponent } from './add-user-core.component';

describe('AddUserCoreComponent', () => {
  let component: AddUserCoreComponent;
  let fixture: ComponentFixture<AddUserCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
