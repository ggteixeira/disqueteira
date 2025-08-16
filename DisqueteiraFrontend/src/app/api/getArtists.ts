import { ARTIST_PATH } from '@/utils/path';
import axios from 'axios';

export async function getArtists() {
  const { data } = await axios.get(`${ARTIST_PATH}`);
  return data;
}
