import fetcher from './fetcher'

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      writable: false,
      configurable: false,
      enumerable: false,
      value: fetcher
    })
  }
}
