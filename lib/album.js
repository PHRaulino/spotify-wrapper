"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */
const getAlbum = idAlbum => fetch(`${_config.API_URL}/albums/${idAlbum}`, _config.HEADERS).then(_utils.default);

exports.getAlbum = getAlbum;

const getAlbums = idAlbums => fetch(`${_config.API_URL}/albums/?ids=${idAlbums}`, _config.HEADERS).then(_utils.default);

exports.getAlbums = getAlbums;

const getAlbumTracks = idAlbum => fetch(`${_config.API_URL}/albums/${idAlbum}/tracks`, _config.HEADERS).then(_utils.default);

exports.getAlbumTracks = getAlbumTracks;