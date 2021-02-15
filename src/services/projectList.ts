import { FormField } from "../pages/project-list/SearchPane";
import request from "../utils/request";

export function getProjectsRequest(params?: FormField) {
  let path = "/projects";
  let _params: Array<string> = [];
  if (params && (params.name || params.header)) {
    Object.keys(params).forEach(
      (key) => params[key] && _params.push(key + "=" + params[key])
    );
    _params.length > 0 && (path = path + "?" + _params.join("&"));
  }
  return request.get(path);
}
