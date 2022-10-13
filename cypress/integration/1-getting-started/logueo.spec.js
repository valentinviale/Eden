/// <reference types="cypress" />
import EdenPage from "../pages/eden.js";
import LoginPage from "../pages/login.js";
import HeaderPage from "../pages/header.js";
import DataUsers from "../../fixtures/eden/usuarios.json";
import registerCypressGrep from "cypress-grep";
registerCypressGrep();


beforeEach(() => {
  cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
});

it(
  "login", { tags: ["@login", "@logueo"] }, () => {
  
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
  

  
      const header = new HeaderPage();
      const login = new LoginPage();
      

      header.getLoginRegisterButon().click();

      login.getUserInput().type(DataUsers.users[0].user);
      login.getPassInput().type(DataUsers.users[0].password);
      login.getLoginBtn().click();
      cy.get(':nth-child(5) > .nav-link').click();
  });