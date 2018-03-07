/* eslint-disable import/no-extraneous-dependencies,no-console */

import { deleteUser, getUsers } from './api/userApi';

import './index.scss';

getUsers()
  .then(users => {
    global.document.getElementById('users').innerHTML = users.reduce(
      (string, user) =>
        `${string}<tr><td><a href="#" data-id="${
          user.id
        }" class="deleteUser">Delete</a></td><td>${user.id}</td><td>${
          user.firstName
        }</td><td>${user.lastName}</td><td>${user.email}</td></tr>`,
      '',
    );

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    [...deleteLinks].forEach(link =>
      link.addEventListener('click', event => {
        event.preventDefault();

        const a = event.target;
        deleteUser(a.attributes['data-id'].value);

        const tr = a.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
      }),
    );

    return true;
  })
  .catch(err => {
    console.error(err);
  });
