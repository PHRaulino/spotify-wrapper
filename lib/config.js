"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
const TOKEN_API = 'BQDI7glD5hOEbA09QDOaGUqTqN9vKX8FqZn1gA0uyW3YVppq3Hgu1brjOttGf-XJZFujtvxb1X8TEoT3qQrWxreobEe4laQYBItozjjg1sVSN6wSilvTHG0eKs9kXAXSQpeul0vClTXxuSBRkFIJgEvvFUHY3CCAeNjeZykmq_xjHnnu366ihw';
const API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`
  }
};
exports.HEADERS = HEADERS;