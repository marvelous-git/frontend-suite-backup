import { async, TestBed } from '@angular/core/testing';
import { AuthFeatureShellModule } from './auth-feature-shell.module';

describe('AuthFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFeatureShellModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AuthFeatureShellModule).toBeDefined();
  });
});
