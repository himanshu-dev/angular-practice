import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StockListComponent} from './stock-list.component';
import {By} from '@angular/platform-browser';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function stocks() {
    return fixture.debugElement.queryAll(By.css('.stock'));
  }

  it('should list stocks', () => {
    expect(stocks().length).toBe(4);
  });
});
