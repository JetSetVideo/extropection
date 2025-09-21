export default defineNuxtPlugin((nuxtApp) => {
  import { library } from 'fortawesome/fontawesome-svg-core'
  import { fab } from 'fortawesome/free-brands-svg-icons'
  import { fas } from 'fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from 'fortawesome/vue-fontawesome'

  library.add(fab, fas)

  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
