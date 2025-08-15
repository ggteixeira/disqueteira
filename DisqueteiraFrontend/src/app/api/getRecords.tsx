import { RECORD_PATH } from '@/utils/path';
import axios from 'axios';

export async function getRecords() {
  const { data } = await axios.get(`${RECORD_PATH}`);
  return data;
}
