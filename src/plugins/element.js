import Vue from 'vue'
import { Form, FormItem, Input, Button, Message } from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

// 把弹框组件挂载到了Vue的原型对象上（$message是自己取的名，可以更换）
// 这样的话每一个组件都可以通过this访问到$message来进行弹窗提示
Vue.prototype.$message = Message
