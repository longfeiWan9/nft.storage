let API = /** @type {string} **/ process.env.NEXT_PUBLIC_API || ''
let MAGIC_TOKEN = /** @type {string} **/ process.env.NEXT_PUBLIC_MAGIC || ''

if (globalThis.window) {
  switch (location.host) {
    case 'staging.nft.storage':
      API = 'https://api-staging.nft.storage'
      MAGIC_TOKEN = 'pk_live_9363234DECD6F093'
      break
    case 'dev.nft.storage':
      API = 'https://api-dev.nft.storage'
      MAGIC_TOKEN = 'pk_live_9363234DECD6F093'
      break
    case 'nft.storage':
      API = 'https://api.nft.storage'
      MAGIC_TOKEN = 'pk_live_20429A8C4CDEDCF7'
      break
    default:
      break
  }
}

const AUTHENTICATED_ROUTES = {
  MANAGE: 'manage',
  FILES: 'files',
  NEW_FILE: 'new-file',
  NEW_KEY: 'new-key',
  PINNING_REQUEST: 'pinning-request',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AUTHENTICATED_ROUTES,
  API: API,
  MAGIC_TOKEN: MAGIC_TOKEN,
}
