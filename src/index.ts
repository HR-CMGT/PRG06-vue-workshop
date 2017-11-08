import Vue, { ComponentOptions } from 'vue'
import App from './components/app.vue'

let opt:ComponentOptions<Vue> = {el : '#app'}
new App(opt)