/* eslint-disable no-param-reassign,security/detect-non-literal-regexp */
function getQueryStringParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[]]/g);

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const result = regex.exec(url);

  if (!result) {
    return null;
  }
  if (!result[2]) {
    return '';
  }
  return decodeURIComponent(result[2].replace(/\+/g, ' '));
}

export default function getBaseUrl() {
  // ?useMockApi=true query string will enable runtime api change
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'
    : '/';
}
