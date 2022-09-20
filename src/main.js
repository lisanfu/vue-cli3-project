import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './components/index'
import './lib/element-ui'
// 打包生产环境不需要Mock
if (process.env.NODE_ENV !== 'production') import('./mock')
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
