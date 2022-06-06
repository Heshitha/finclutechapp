import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/Login.vue'
import CustomerView from '@/views/CustomersView.vue'
import UsersView from '@/views/UsersView.vue'
import BulkUploadView from '@/views/BulkUploadView.vue'
import CustomerSelectView from '@/views/CustomerSelectView.vue'

const routes: Array<RouteRecordRaw> = [
  {name: 'home', path:'/', component:HomeView},
  {name: 'login', path:'/login', component:LoginView},
  {name: 'users', path:'/users', component:UsersView},
  {name: 'customers', path:'/customers', component:CustomerView},
  {name: 'bulkupload', path:'/bulkupload', component:BulkUploadView},
  {name: 'customerView', path:'/customers/:id', component:CustomerSelectView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
