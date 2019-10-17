import { CounsAppPage } from './app.po';

describe('couns-app App', function() {
  let page: CounsAppPage;

  beforeEach(() => {
    page = new CounsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
