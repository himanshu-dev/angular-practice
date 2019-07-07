import {async, TestBed} from '@angular/core/testing';
import {MyFormComponent} from './my-form.component';

describe('My Form Component should pass every test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFormComponent]
    });
  });

  it('should create my-form component', async () => {
    const fixture = TestBed.createComponent(MyFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
