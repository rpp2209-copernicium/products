import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '30s',
  vus: 150,
};

export default function () {
  const res = http.get('http://localhost:3000/products/950000/styles')
}