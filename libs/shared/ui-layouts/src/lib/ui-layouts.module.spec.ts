import { async, TestBed } from '@angular/core/testing';
import { UiLayoutsModule } from './ui-layouts.module';

describe('UiLayoutsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLayoutsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(UiLayoutsModule).toBeDefined();
  });
});
