import request from "../utils/request";

export function getProjectsRequest(params) {
  let path = "/projects";
  let _params = [];
  if (params && (params.name || params.header)) {
    Object.keys((key) => params[key] && _params.push(key + "=" + params[key]));
    _params.length > 0 && (path = path + "?" + _params.join("&"));
  }
  return request.get(path);
}
