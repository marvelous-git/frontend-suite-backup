import { async, TestBed } from '@angular/core/testing';
import { UtilAuthModule } from './util-auth.module';

describe('UtilAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilAuthModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(UtilAuthModule).toBeDefined();
  });
});
