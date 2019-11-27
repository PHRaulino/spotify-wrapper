/* eslint-disable no-console */
import { getAlbumTracks } from '../src/album';

global.fetch = require('node-fetch');

const albumTracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');

albumTracks.then(data => console.log(data));
