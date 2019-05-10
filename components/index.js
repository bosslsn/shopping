import Footer from './footer/footer'
import bannerComponent from './banner/index'
import TabCheck from './tabCheck/tabCheck'
import lists from './listComponent/index'
import Alerts from './alertComponent/alerts'
import Button from './btnComponent/btnComponent'
export default {
  install (Vue) {
    Vue.component('Footer', Footer)
    Vue.component('TabCheck', TabCheck)
    Vue.component('Alerts', Alerts)
    Vue.component('Button', Button)
    Vue.use(lists)
    Vue.use(bannerComponent)
  }
}
