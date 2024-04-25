const clicarNoIconeDePesquisa = () => {
  cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
}
describe('Pesquisar termo emprestimo', () => {
  it('Pesquisar por emprestimo', () => {
    // Acessar a home do portal web
    cy.visit('https://blogdoagi.com.br/');

    // Clica no ícone de pesquisa
    clicarNoIconeDePesquisa();

    // Digita "emprestimo" no campo de pesquisa
    cy.get('#search-field[type="search"]').type('emprestimo')

    // Pressiona Enter ou clica novamente no ícone de pesquisa
    cy.get('.search-form input[type="search"]').type('{enter}')

    // Verifica se os resultados relacionados são exibidos
    cy.contains('Resultados encontrados para: emprestimo').should('be.visible')
  });
});

describe('Pesquisar por "conta corrente" em outra área do blog', () => {
  it('Realiza a pesquisa por "conta corrente"', () => {
    // Visita a página de notícias do blog do Agi
    cy.visit('https://blogdoagi.com.br/noticias')

    // Realiza a pesquisa por "conta corrente"
    clicarNoIconeDePesquisa(); // Clica no ícone de pesquisa
    cy.get('#search-field').type('conta corrente') // Digita "conta corrente" no campo de pesquisa
    cy.get('.search-form input[type="search"]').type('{enter}') // Pressiona Enter para realizar a pesquisa

    // Verifica se os resultados relacionados são exibidos
    cy.contains('Resultados encontrados para: conta corrente').should('be.visible')
  })
})