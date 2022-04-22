import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'
import * as ElIconModules from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'// ElementPlus 组件内部默认使用英语，使用中文语言
export default {
  install (app:App) {
    // 对立注册Icon图标
    // 全局注册element-plus icon图标组件
    Object.keys(ElIconModules).forEach((key) => { // 循环遍历组件名称
      if (key !== 'Menu') { // 如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconModules[key])
      } else {
        app.component(key + 'Icon', ElIconModules[key])
      }
    })
    app.use(ElementPlus, { locale: zhCn, size: 'small', zIndex: 2000 })
  }
}
