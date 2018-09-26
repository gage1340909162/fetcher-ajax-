/*!
 * @date 8.31
 * @author wanggaoke
 * @params
**/
import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'

const resHeaders = {
  Accept: 'text/json'
}

const http = (url, opts) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...opts
    }).then(res => {
      if (res.ok) {
        resolve(res.json())
      } else {
        reject(res)
      }
    })
  })
}

const json2url = (obj) => {
  if (!obj) return
  const arr = []
  Object.keys(obj).forEach(key => {
    arr.push(`${key}=${obj[key]}`)
  })
  return arr.join('&')
}

export default {
  get (url, params) {
    return http(`${url}?${json2url(params)}`, {
      method: 'GET',
      headers: resHeaders
    })
  },
  post (url, params) {
    return http(url, {
      method: 'POST',
      headers: Object.assign({}, resHeaders, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: json2url(params)
    })
  },
  jsonp (url, params) {
    return fetchJsonp(`${url}?${json2url(params)}`, {
      jsonpCallback: 'custom_callback'
    }).then(res => res.json())
  }
}
