"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = void 0;

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */
const search = (query, type) => fetch(`${_config.API_URL}/search?q=${query}&type=${type}`, _config.HEADERS).then(_utils.default);

exports.search = search;

const searchArtists = query => search(query, 'artist');

exports.searchArtists = searchArtists;

const searchAlbums = query => search(query, 'album');

exports.searchAlbums = searchAlbums;

const searchTracks = query => search(query, 'track');

exports.searchTracks = searchTracks;

const searchPlaylists = query => search(query, 'playlist');

exports.searchPlaylists = searchPlaylists;