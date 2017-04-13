import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';

@Component({selector: 'sunlight-bills', template: ''})
class MockBillsComponent {}
@Component({selector: 'fountain-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'fountain-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'fountain-title', template: ''})
class MockTitleComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockBillsComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockTitleComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, bills and footer', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('fountain-header')).toBeDefined();
    expect(main.querySelector('fountain-title')).toBeDefined();
    expect(main.querySelector('sunlight-bills')).toBeDefined();
    expect(main.querySelector('fountain-footer')).toBeDefined();
  });
});
