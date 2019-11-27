"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
const TOKEN_API = 'BQAkVy6WE1K_WWYfDN0vXPWwakbuvFMj6cqqNMiPC1b7H_BpdNpU2rI_RAIURZ4xDswxJ9ISJTPEPJSDTe4oLJ25w1MHQgggdOAkh2zuIkyKOpm96-nuGKoNkbsH11Pn9C3ihDQ76pLrQichlmSIACW-uK0yw7eKuXoBrMGId4PihNgwhRA9Zw';
const API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`
  }
};
exports.HEADERS = HEADERS;