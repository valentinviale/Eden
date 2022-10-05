/// <reference types="cypress" />
import EdenPage from "../pages/eden.js";

describe("Test de pagina Eden", () => {
  it("Llamada a servicio: /inicio", () => {
    cy.callService("inicio", "espectaculos");
  });

  it("Llamada a servicio: /puntosdeventas", () => {
    cy.callService(
      "puntosdeventas",
      "puntosdeventas",
      "puntosdeventa_sch.json"
    );
  });

  it.only("Verificar las cards de los espectáculos", () => {
    const eden = new EdenPage();

    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");

    cy.fixture("eden/espectaculos").then((fixture) => {
      fixture.Eventos.forEach((infoEvento, $index) => {
        eden.getShowCard().eq($index).scrollIntoView();
        eden.getShowName().eq($index).should("have.text", infoEvento.Nombre);
        cy.wait(5);
        eden.getShowImage().eq($index).should("have.attr", "src", infoEvento.Imagen);
        eden.getShowImage().eq($index).trigger("mouseover");
        eden.getShowDate().should("be.visible")
        .and("contain.text" , infoEvento.Fecha)
        .and("contain.text", infoEvento.Lugar);
      });
    });
  });
});
