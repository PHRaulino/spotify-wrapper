/* global fetch */
import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const getAlbum = idAlbum =>
  fetch(`${API_URL}/albums/${idAlbum}`, HEADERS).then(toJSON);

export const getAlbums = idAlbums =>
  fetch(`${API_URL}/albums/?ids=${idAlbums}`, HEADERS).then(toJSON);

export const getAlbumTracks = idAlbum =>
  fetch(`${API_URL}/albums/${idAlbum}/tracks`, HEADERS).then(toJSON);
