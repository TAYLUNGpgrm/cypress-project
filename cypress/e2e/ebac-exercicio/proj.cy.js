/// <reference types="cypress"/>

describe("Abrindo URL", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Preenchendo o Formulário", () => {
    // Preechendo o formulário
    cy.get('input[type="text"]').type("Taylung Dutra");
    cy.get('input[type="email"]').type("testeCy@gmail.com");
    cy.get('input[type="tel"]').type("31982749178");
    // Adicionando
    cy.get(".adicionar").click();
  });
  it("Editando o contato da lista", () => {
    // editando...
    cy.get(".edit").first().click();
    cy.get('input[type="text"]').clear().type("Paulo Santos Pereira");
    cy.get('input[type="email"]').clear().type("pauloCy@gmail.com");
    cy.get('input[type="tel"]').clear().type("31982938291");
    cy.get('button[type="submit"]').click();
  });
  it("Deletando contato da lista", () => {
    cy.get(".delete").first().click();
    cy.get(".delete").last().click();
    cy.get(".delete").eq(2).click();
  });
});
