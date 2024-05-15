<template>
<div id="app">
  <div class="container">

    <!-- header -->
    <app-header />
    <Menubar :model="items" class="menuBar" />
    <router-link to="/">Home</router-link>
    <router-link to="/mixin">Mixin</router-link>
    <router-link to="/about">About</router-link>

    <!-- router view -->
    <router-view />

  </div>
</div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import Menubar from 'primevue/menubar';

export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter',
          to: '/mixin'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info',
          to: '/about'
        }
      ]
    }
  },
  components: {
    AppHeader,
    Menubar
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
