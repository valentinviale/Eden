class loginlocators {
    constructor() {
      this.inputUser = "input#email";
      this.inputPass = "input#clave";
      this.loginBtn = "button#continuar";

    }};

    export default class Login {

        constructor() {
          this.locators = new loginlocators();
        }
      
        getUserInput() {
          return cy.get(this.locators.inputUser);
        }
      
        getPassInput() {
          return cy.get(this.locators.inputPass);
        }
      
        getLoginBtn() {
          return cy.get(this.locators.loginBtn);
        }
      
        
        };
      