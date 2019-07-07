import {async, TestBed} from '@angular/core/testing';
import {NotFoundComponent} from './not-found.component';

describe('Should pass all tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    });
  });

  it('should create not-found component', async () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a message as Page not found!', async () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.message).toEqual('Page not found!');
  });

  it('should render message in p tag', async () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toEqual('Page not found!');
  });
});
