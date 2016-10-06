import { FormsV16Page } from './app.po';

describe('forms-v16 App', function() {
  let page: FormsV16Page;

  beforeEach(() => {
    page = new FormsV16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
