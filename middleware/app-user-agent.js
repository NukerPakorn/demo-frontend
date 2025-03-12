export default function ({ store, req }) {
  const userAgent = req.headers['user-agent']
  store.commit('setUserAgent', userAgent)
}
