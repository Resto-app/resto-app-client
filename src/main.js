import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers"
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

/* add icons to the library */
library.add(faUser, faTrashCan, faPen, faAngleDown, faMagnifyingGlass)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
