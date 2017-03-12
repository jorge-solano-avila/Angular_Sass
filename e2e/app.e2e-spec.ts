import { AngularStylesPage } from './app.po';

describe('angular-styles App', () => {
  let page: AngularStylesPage;

  beforeEach(() => {
    page = new AngularStylesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
