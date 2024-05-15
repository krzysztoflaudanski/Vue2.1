<template>
<div id="app">
  <div class="container">

    <!-- header -->
    <app-header />
    <Menubar :model="items" class="menuBar" />
    <!-- color mixin -->
    <color-mixin />

  </div>
</div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import ColorMixin from './components/ColorMixin'
import Menubar from 'primevue/menubar';

export default {
  name: 'App',
  data() {
    return {
      items: [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Contact', icon: 'pi pi-fw pi-envelope' },
        { label: 'About', icon: 'pi pi-fw pi-info' }
      ]
    };
  },
  components: {
    AppHeader,
    ColorMixin,
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
