import ConfigAPIURL from "../config/ConfigAPIURL";

const APIRequest = {
  request: function (method, url, body) {
    const config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authToken: localStorage.getItem("token"),
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
        return this.returnResponse(data, url, config); // Handle the response
      })
      .catch(() => {
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },
};

export default APIRequest;
