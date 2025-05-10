import ConfigAPIURL from "../config/ConfigAPIURL";

const APIRequest = {
  request: function (method, url, body) {
    const config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    if (body !== "") {
      config.body = body;
    }

    return fetch(url, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "datha");
        return this.returnResponse(data, url, config); // Handle the response
      })
      .catch(() => {
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },
  returnResponse: async function (response, url, config) {
    return Promise.resolve(response);
  },
};

export default APIRequest;
