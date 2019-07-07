import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SlideBar from '../components/sidebar'
import Detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
        name:'root',
        path:'/',
        components:{
          slidebar:SlideBar,
          main:Detail
        }
      },
      // {
      //   name:'post_content',
      //   path:'/topic/:id&author=:name',
      //   components:{
      //     main:Article,
      //     slidebar:SlideBar
      //   }
      // }




  ]
})
