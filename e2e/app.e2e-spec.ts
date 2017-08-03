import { PruebasPage } from './app.po';

describe('pruebas App', () => {
  let page: PruebasPage;

  beforeEach(() => {
    page = new PruebasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
