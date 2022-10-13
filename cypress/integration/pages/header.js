class headerlocators {
    constructor() {
      this.LoginRegisterBtn = "[class] .menu-isnotauthenticated:nth-of-type(6) .text-white";
    }
  }
  
  export default class Header {
    constructor() {
      this.locators = new headerlocators();
    }
    getLoginRegisterButon() {
      return cy.get(this.locators.LoginRegisterBtn);
    }
  }