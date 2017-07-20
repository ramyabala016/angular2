import { IntroPage } from './app.po';

describe('intro App', () => {
  let page: IntroPage;

  beforeEach(() => {
    page = new IntroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
