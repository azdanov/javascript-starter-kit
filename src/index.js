/* eslint-disable import/no-extraneous-dependencies,no-console */

import { getUsers } from './api/userApi';

import './index.scss';

getUsers()
  .then(users => {
    global.document.getElementById('users').innerHTML = users.reduce(
      (accumulator, user) =>
        `${accumulator}<tr><td><a href="#" data-id="${
          user.id
        }" class="deleteUser">Delete</a></td><td>${user.id}</td><td>${
          user.firstName
        }</td><td>${user.lastName}</td><td>${user.email}</td></tr>`,
      '',
    );
    return true;
  })
  .catch(err => {
    console.error(err);
  });
