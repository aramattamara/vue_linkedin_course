import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from "@/pages/ShoppingCartPage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAgPtUo49GwSVXhJ5KCrVef4K_HLJtMePk",
    authDomain: "vue-linkedin-project.firebaseapp.com",
    projectId: "vue-linkedin-project",
    storageBucket: "vue-linkedin-project.appspot.com",
    messagingSenderId: "356500704411",
    appId: "1:356500704411:web:ec180060e3a5768434ca3e",
    measurementId: "G-36QT8EK98F"
};
initializeApp(firebaseConfig);


createApp(App)
    .use(VueRouter.createRouter({
        history:VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [{
            path: '/cart',
            component: ShoppingCartPage,
        }, {
            path: '/products',
            component: ProductsPage,
        },{
            path: '/products/:productId',
            component: ProductDetailPage,
        }, {
            path: '/',
            redirect: '/products',
        }, {
            path:'/:pathMatch(.*)*',
            component: NotFoundPage
        }]
    }))
    .mount('#app')
