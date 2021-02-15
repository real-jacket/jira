const BASEURL = "http://localhost:3001";

type Method = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

interface FetchConfig {
  method: Method;
  headers: HeadersInit;
  mode: RequestMode;
  body?: BodyInit;
}

class Request {
  baseUrl;
  config: FetchConfig;

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

  request(path: string, config: FetchConfig) {
    return fetch(this.baseUrl + path, {
      ...this.config,
      ...config,
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err.json();
      });
  }

  get(path: string) {
    return this.request(path, this.config);
  }

  post(path: string, data: any) {
    return generateMethod.call(this, "POST", path, data);
  }

  patch(path: string, data: any) {
    return generateMethod.call(this, "PATCH", path, data);
  }

  delete(path: string, data: any) {
    return generateMethod.call(this, "DELETE", path, data);
  }
}

function generateMethod(
  this: Request,
  method: Method,
  path: string,
  data: any
) {
  return this.request(path, {
    ...this.config,
    method: method,
    body: JSON.stringify(data),
  });
}

const request = new Request();

export default request;
