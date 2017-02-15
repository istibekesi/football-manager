import { FootballManagerPage } from './app.po';

describe('football-manager App', function() {
  let page: FootballManagerPage;

  beforeEach(() => {
    page = new FootballManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
