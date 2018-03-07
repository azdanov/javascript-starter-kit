/* eslint-disable import/prefer-default-export,no-console */
import 'whatwg-fetch';

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

export function getUsers() {
  return get('users');
}
