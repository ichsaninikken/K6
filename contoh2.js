import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 50,
  duration: '60s',
};
export default function () {
  http.get('hhttps://ub.ac.id/');
  sleep(1);
}