# Nuxt 项目配置

## SCSS
> npm i node-sass sass-loader@10 scss-loader --save-dev
>   引用全局scss变量

> https://github.com/nuxt-community/style-resources-module

> npm i @nuxtjs/style-resources -D

edit nuxt.config.js

```
export default {
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      './assets/vars/*.scss'
      ]
  }
}
```





## Vuex持久化存储（vuex-persistedstate）

> https://www.npmjs.com/package/vuex-persistedstate
>
> npm install vuex-persistedstate --save
>
> 添加插件
> add plugins/vuex-persistedstate.js

```
  import createPersistedState from 'vuex-persistedstate'

  export default (context) => {
    createPersistedState({
      // 默认为localStorage
      storage: window.sessionStorage,
      reducer(obj) {
        const { count, token } = obj
        return { count, token }
      }
    })(context.store)
  }
```

  并在nuxt.config.js

```
  export default {
    plugins: [{ src: '@/plugins/vuex-persistedstate', ssr: false }]
  }
```




## 添加忽略文件


​	默认规则下，page目录下文件会添加到页面栈内，将components文件夹忽略

 	add .nuxtignore  

```
	pages/**/components/
```





## Axios  

> https://axios.nuxtjs.org/

> npm i @nuxtjs/axios --save

  edit nuxt.config.js

```
  export default {
    axios: {
      baseURL: 'http://api-eadmin-dev.haioupai.com',
      progress: true
    },
  }
```

  add plugins/axios.js

```
  export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ', config.url)
    })

​	$axios.onError(error => {
 	 const code = parseInt(error.response && error.response.status)
  	 if (code === 400) {
​    	redirect('/400')
 	 }
​	})

  }
```





## Element UI 按需引入
  npm install babel-plugin-component --save-dev

  add plugins/element-ui.js

    import Vue from 'vue'
    import {
      Button,
    }
    
    Vue.use(Button)

  并在nuxt.config.js

```
export default {
    plugins: [
      { src: '@/plugins/element-ui', ssr: true },
    ],
    build: {
      // 外联css
      extractCSS: { allChunks: true },
      // transpile: [/^element-ui/],
      // 按需引入
      babel: {
        plugins: [
          ['component',
            {
              libraryName: 'element-ui',
              styleLibraryName: 'theme-chalk'
            }
          ]
        ]
      }
    }
  }
```



