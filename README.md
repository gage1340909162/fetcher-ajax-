# fetcher-ajax-
ajax请求：get、post、jsonp

#### 使用说明
```
  // 下载第三方包  -- whatwg-fetch：用来做兼容  -- fetch-jsonp：jsonp请求
  npm install --save-dev whatwg-fetch fetch-jsonp
  // 两种使用方法
  1、在main.js中挂载
      import fetcher from './fetcher'
      Vue.use(fetcher)
      在组件中使用this.$http.get/post/jsonp()
  2、直接使用
      import http from './fetcher/fetcher'
      http.get/post/jsonp()
```

#### 参数说明
  参数 | 说明 | 类型
  -------  |  -------  |  ------- 
  url | 请求的地址 | 字符串
  params | 需要传送的参数 | 字符串或对象
