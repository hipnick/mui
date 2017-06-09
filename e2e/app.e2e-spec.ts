import { TestUiPage } from './app.po';

describe('test-ui App', () => {
  let page: TestUiPage;

  beforeEach(() => {
    page = new TestUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
