class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "819e52fd-78d6-4fd2-8c5e-ace4e0671a5f",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

// export the class
export default Api;
