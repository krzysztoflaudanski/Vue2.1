<template>
<div id="app">
  <div class="container">

    <!-- header -->
    <app-header />
     <Menubar :model="items" class="menuBar">
      <template #item="{ item, props }">
        <router-link v-slot="{ href, navigate }" :to="item.to" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      </Menubar>

      <!-- router view -->

      <!-- <router-view v-slot="{ Component }">
        <transition>
          <slide-fade-animation :is="Component" />
        </transition>
      </router-view> -->

      <router-view v-slot="{ Component }">
        <SlideFadeAnimation class="animate__faster">
          <component :is="Component" />
        </SlideFadeAnimation>
      </router-view>

      <!-- <SlideFadeAnimation class="animate__faster">
        <router-view></router-view>
      </SlideFadeAnimation> -->
  </div>
</div>
</template>

<script>
import SlideFadeAnimation from './components/shared/SlideFadeAnimation.vue';
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import Menubar from 'primevue/menubar';
import { RouterView } from 'vue-router';
import router from './router';

export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          // command: () => { this.$router.push('/') }
          to: "/"
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter',
          to: "/Mixin"
          // command: () => { this.$router.push('/mixin') }
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info',
          to: "/About"
          // command: () => { this.$router.push('/about') }
        },
        {
          label: 'My colors',
          icon: 'pi pi-fw pi-palette',
          to: "/my-colors"
        }
      ]
    }
  },
  components: {
    AppHeader,
    Menubar,
    SlideFadeAnimation
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}

.menuBar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, .3);
  overflow: hidden;
}
</style>
