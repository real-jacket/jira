const BASEURL = "http://localhost:3001";

class Request {
  baseUrl;
  config;

  constructor() {
    this.baseUrl = BASEURL;
    this.config = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors", // no-cors, cors, *same-origin
    };
  }

  request(path, config) {
    return fetch(this.baseUrl + path, {
      ...this.config,
      config,
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err.json();
      });
  }

  get(path) {
    return this.request(path, this.config);
  }

  post(path, data) {
    return generateMethod.call(this, "post", path, data);
  }

  patch(path, data) {
    return generateMethod.call(this, "patch", path, data);
  }

  delete(path, data) {
    return generateMethod.call(this, "delete", path, data);
  }
}

function generateMethod(method, path, data) {
  return this.request(path, {
    ...this.config,
    method: method.toUpperCase(),
    body: JSON.stringify(data),
  });
}

const request = new Request();

export default request;
