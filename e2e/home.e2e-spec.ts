import { HomePage } from './home.po';

describe('ng-app Home', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home Component');
  });
});
