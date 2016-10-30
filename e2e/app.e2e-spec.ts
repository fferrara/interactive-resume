import { InteractiveResumePage } from './app.po';

describe('interactive-resume App', function() {
  let page: InteractiveResumePage;

  beforeEach(() => {
    page = new InteractiveResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
