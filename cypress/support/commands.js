const Ajv = require ("ajv")
const ajv = new Ajv();
require('cypress-grep')();


/**
 * Llama al servicio acorde al primer parámetro enviado
 * @method callService
 * @param {string} lastUrl - última parte del endpoint que concatenará con el resto
 * @param {string} fileName - nombre del archivo de salida 
 */
    
Cypress.Commands.add("callService", (lastUrl, fileName, schema = false) => {
    cy.request({
        method: "GET",
        url: "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/" + lastUrl,
      }).then((response)=> {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response));
        cy.writeFile("../fixtures/eden" + fileName + ".json", response.body);
               
      if (!schema) {
        cy.log("No hay validación de esquema");
      } else {
        cy.fixture ("schemas/" + schema).then((JsonFile) => {

             
      const validate = ajv.compile(JsonFile);
      const valid = validate(response.body);
      if (!valid) {
        cy.log("Hay un error en el esquema");
      } else {
        cy.log("El esquema está bien");
      }
    });
  }
});
});

