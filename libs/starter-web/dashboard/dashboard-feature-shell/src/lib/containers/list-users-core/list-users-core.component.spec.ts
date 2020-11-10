import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersCoreComponent } from './list-users-core.component';

describe('ListUsersCoreComponent', () => {
  let component: ListUsersCoreComponent;
  let fixture: ComponentFixture<ListUsersCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
