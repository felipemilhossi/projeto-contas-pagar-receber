import { ProjetoContasPagarReceberPage } from './app.po';

describe('projeto-contas-pagar-receber App', function() {
  let page: ProjetoContasPagarReceberPage;

  beforeEach(() => {
    page = new ProjetoContasPagarReceberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
