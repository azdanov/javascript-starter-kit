/* eslint-disable no-console,no-undef */
import app from './app';

// noinspection JSUnresolvedVariable
if (!PRODUCTION) {
  app();
} else {
  import('raven-js')
    .then(Raven => {
      Raven.config(
        'https://013d4edd1b0544ffaf88bc05d8cc75d8@sentry.io/300035',
      ).install();

      Raven.context(() => {
        app();
      });

      return Raven;
    })
    .catch(err => {
      throw err;
    });
}
