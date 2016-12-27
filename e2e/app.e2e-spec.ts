import { RecentArticlesPage } from './app.po';

describe('recent-articles App', function() {
  let page: RecentArticlesPage;

  beforeEach(() => {
    page = new RecentArticlesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
