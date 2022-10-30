export const getIsWxClient = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  }
  return false
}
