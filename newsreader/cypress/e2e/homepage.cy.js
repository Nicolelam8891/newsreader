describe("Homepage", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://newsapi.org/v2/everything?q=apple&from=2023-11-19&to=2023-11-19&sortBy=popularity&apiKey=0f379f20ac8f44c8b3d787d28a09635a",
      {
        statusCode: 200,
        fixture: "articleCards",
      }
    ).as("homepage");
    cy.visit("http://localhost:3000/");
  });

  it("User flow for homepage", () => {
    cy.wait("@homepage").then((interception) => {
      cy.location("pathname").should("eq", "/");
      cy
        .get(".header")
        .get(".news-logo")
        .should("have.attr", "src")
        .should("include", "news.png"),
        cy.get("em").contains("Your nightly news reader");
      cy.get(".article-card").should("have.length", 19);
      cy.get('[href="/articleDetails/0"] > .card')
        .get('[href="/articleDetails/0"] > .card > .article-card-image')
        .first()
        .should("have.attr", "src")
        .should(
          "eq",
          "https://s.yimg.com/ny/api/res/1.2/Tlm3zGxKd.bz9EOEsnRMSQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02OTQ-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/8876b970-86ec-11ee-9fd6-02f35f98a609"
        );
      cy.get(
        '[href="/articleDetails/0"] > .card > .article-card-info > .article-card-title'
      ).contains(
        "p",
        "A four-pack of Apple AirTags is down to $80 in an Amazon Black Friday deal"
      );
      cy.get(
        '[href="/articleDetails/0"] > .card > .article-card-info > .article-card-description'
      ).contains(
        "p",
        "You can get a four-pack of Apple AirTags at nearly their lowest price ever right now in a Black Friday deal on Amazon"
      );
      cy.get(
        '[href="/articleDetails/0"] > .card > .article-card-info > .article-card-date'
      ).contains("p", "November 19, 2023 at 08:13 AM");
      cy.get('[href="/articleDetails/18"] > .card');
      cy.get('[href="/articleDetails/18"] > .card > .article-card-image')
        .last()
        .should("have.attr", "src")
        .should(
          "eq",
          "https://opengraph.githubassets.com/f208fbe1b5dece31df4fcb5dec5cb081a14f4d893e5d63b64c85e46d7ed4736f/erkyrath/infocom-zcode-terps"
        );
      cy.get(
        '[href="/articleDetails/18"] > .card > .article-card-info > .article-card-title'
      ).contains("p", "Source code to infocom");
      cy.get(
        '[href="/articleDetails/18"] > .card > .article-card-info > .article-card-description'
      ).contains("Historical source code for");
      cy.get(
        '[href="/articleDetails/18"] > .card > .article-card-info > .article-card-date'
      ).contains("p", "November 18, 2023 at 05:40 PM");
      cy.get(".search-button").contains("SEARCH").click();
      cy.get(".search-error").contains("p", "Please enter");
      cy.get(".search-input-bar")
        .should("have.attr", "placeholder", "Search for articles...")
        .type("best buy")
        .should("have.value", "best buy");
      cy.get(".search-button").contains("SEARCH").click();
      cy.get(".card");
      cy.get(".article-card-image")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://www.digitaltrends.com/wp-content/uploads/2023/06/google-pixel-tablet-review-27.jpg?resize=1200%2C630&p=1"
        );
      cy.get(".article-card-title").contains(
        "p",
        "Best Buy Black Friday deal knocks $100 off the Google Pixel Tablet"
      );
      cy.get(".article-card-description").contains(
        "p",
        "to pick up a tablet in the Google ecosystem"
      );
      cy.get(".article-card-date").contains("p", "November 19, 2023").click();
      cy.get(".article-details-container");
      cy.get(".article-image")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://www.digitaltrends.com/wp-content/uploads/2023/06/google-pixel-tablet-review-27.jpg?resize=1200%2C630&p=1"
        );
      cy.get(".article-title").contains(
        "p",
        "Best Buy Black Friday deal knocks $100 off the Google Pixel Tablet"
      );
      cy.get(".article-date").contains("p", "November 19, 2023");
      cy.get(".article-content").contains("p", "Joe Maring");
      cy.get(".article-link").contains("a", "Read");
      cy.get(".home-button").contains("HOME");
    });
  });

  it("Tests a bad route page for the home page", () => {
    cy.visit("http://localhost:3000/nonsense");
    cy.get(".home-button").contains("HOME");
    cy.get(".error-bad-route-container");
    cy.get(".error-nonsense-image")
      .should("have.attr", "src")
      .should(
        "eq",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c960925-08d7-4216-ab5b-8a6b53c68ab8/dbwck80-372f81c9-de1c-4fba-8114-6bf4a8f823c0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjOTYwOTI1LTA4ZDctNDIxNi1hYjViLThhNmI1M2M2OGFiOFwvZGJ3Y2s4MC0zNzJmODFjOS1kZTFjLTRmYmEtODExNC02YmY0YThmODIzYzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dpfhq-7_qgeFrkymsMXmqClkfGBimlFAXyKVxQKlK-g"
      );
    cy.get(".error-message-nonsense").contains("h1", "There is an error!");
    cy.get(".error-nonsense").contains(
      "h3",
      "Oh no, you have gone down the wrong path. Find your path back home by clicking on the home button!"
    );
    cy.get(".home-button").click();
    cy.get(".search-input-bar")
      .should("have.attr", "placeholder", "Search for articles...")
      .type("nonsense")
      .should("have.value", "nonsense");
    cy.get(".search-button").click();
    cy.get(".no-articles-user").contains(
      "p",
      "There are no articles that match your search criteria. Please try searching for another topic or find your way back home by clicking on the DarkSky logo."
    );
  });
});
