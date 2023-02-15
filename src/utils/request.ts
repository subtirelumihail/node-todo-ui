// @ts-nocheck
import axios from "axios";

import { getLocalStorageAuth } from "./auth";


const HOST = process.env.REACT_APP_API_SERVER;
const NAMESPACE = "api";

const client = axios.create({
  baseURL: `${HOST}/${NAMESPACE}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const handleRequestSuccess = (res) => res;

const handleRequestError = (err) => {
  throw err;
};

const interpolateURI = (url, id) => {
  const action = url.replace(":id", id);
  return action;
};

// Set authentication
const setAuthHeaders = (config) => {
  const user = getLocalStorageAuth();

  if (user) {
    config.url = interpolateURI(config.url, user.id);
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
};

// Request use middleware
client.interceptors.request.use(setAuthHeaders);
client.interceptors.response.use(handleRequestSuccess, handleRequestError);

// Request types
const get = (uri) => client.get(uri);
const put = (uri, body) => client.put(uri, body);
const deleteFn = (uri) => client.delete(uri);
const post = (uri, body) => {
  return client.post(uri, body);
};

const request = {
  get,
  put,
  post,
  delete: deleteFn,
};

export default request;
