<template>
<div>

  <!-- text between -->
  <p v-text="'And the result...'" />

  <!-- mixture effect -->

  <flask-item :buttonsVisible=false :amount=100 :size="15" :color="mixtureEffectFill"
    :style="{ margin: '3rem auto' }" />
  <p>{{ mixtureEffectFill }}</p>
  <!-- refresh btn -->
  <button-item @click="$emit('refresh')" :size="4" :font-size="1.5" icon="pi-refresh" />
  <button-item @click="showModal" :size="4" :font-size="1.5" :style="{ marginLeft: '20px' }" :movement="-0.5">
    ?</button-item>
  <router-link :to="{ path: linkShared }">
    <button-item :size="4" :font-size="1.5" icon="pi-share-alt" :style="{ marginLeft: '20px' }" />
  </router-link>
  <fade-animation>
    <modal-item v-if="modalVisible" @cancel="hideModal">
      <!-- Content of the modal -->
      <template v-slot:header>
        <h3>About the app</h3>
      </template>
      <template v-slot:body>
        <p>Mix three colors to create the perfect one!</p>
      </template>
      <template v-slot:footer>
        <button-item icon="pi-thumbs-up-fill" :movement="0" />
      </template>
    </modal-item>
  </fade-animation>
</div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue';
import ButtonItem from './shared/ButtonItem.vue';
import ModalItem from './shared/ModalItem.vue';
import FadeAnimation from './shared/FadeAnimation.vue'
import modalMixin from './../mixins/ModalMixin.js'

export default {
  name: 'ResultsBox',
  data() {
    return {
      modalVisible: false
    };
  },
  mixins: [modalMixin],
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill() {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    linkShared() {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    }
  },
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem,
    FadeAnimation

  },
}
</script>

<style></style>
