import Lists from './listComponent'
import ListX from './listX'
import ListY from './listY'
export default {
  install (Vue) {
    Vue.component('Lists', Lists)
    Vue.component('ListX', ListX)
    Vue.component('ListY', ListY)
  }
}
