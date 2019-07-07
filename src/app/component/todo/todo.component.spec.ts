import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoComponent} from './todo.component';

describe('TestSuite', () => {

  function delay(callback) {
    setTimeout(callback, 4900);
  }

  const delay2 = (callback) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, 4900);
  });

  let counter = 0;

  beforeEach(() => {
    jasmine.clock().install();
    delay(() => {
      counter++;
    });
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  const throwsError = () => {
    throw new Error('custom error');
  };

  const toLowerCase = (str) => {
    return str.toLowerCase();
  };

  xdescribe('MathTestSuite', () => {

    it('Should test basic functionality', () => {
      const a = 2 - 1;
      expect(a).toEqual(1);
    });

    it('Should test advance functionality', () => {
      const a = 10 * 2;
      expect(a).toEqual(20);
    });

    describe('ToExcludeSuite', () => {
      xit('test to exclude', () => {
        const x = 2;
        expect(x).toBeTruthy();
      });
    });

  });

  xit('Spy test', () => {
    const str = 'Hello';
    const spyToLowerCase = spyOn(String.prototype, 'toLowerCase').and.callThrough();
    expect(toLowerCase).toBeDefined();
    expect(toLowerCase(str)).toEqual('hello');
    expect(String.prototype.toLowerCase).toHaveBeenCalled();
    const calls = spyToLowerCase.calls.count();
    console.log('spyToLowerCase.calls.count()', calls);
    expect(calls).toEqual(1);
  });

  xit('async testing', () => {
    expect(counter).toEqual(0);
    console.log('counter', counter);
    jasmine.clock().tick(5000);
    console.log('counter', counter);
    expect(counter).toEqual(1);
  });

  it('Sample', () => {
    const str = 'Hello world';
    expect(str).toMatch('wor');
    const arr = [1, 2, 3];
    expect(arr).toContain(2);
    const amount = 20.934;
    expect(amount).toBeCloseTo(20.9, 1);
    const x = Math.random() + Math.random();
    expect(x).toBeGreaterThan(0);
    expect(x).toEqual(jasmine.any(Number));
  });
});
