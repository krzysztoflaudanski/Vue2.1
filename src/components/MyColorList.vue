<template>
<div class="page">
    <ul class="mixtures">
        <flask-item :key="index" v-for="(color, index) in colors" :buttonsVisible=false :amount=100
            :size="10" :color="color" :buttonTrash="true" @removeColor="deleteColor(index)" />
    </ul>
</div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'MyColorsList',
    computed: mapGetters({ colors: 'RGBColors' }),
    components: {
        FlaskItem,
    },
    methods: {
        formatColor(color) {
            return `rgb(${color.red}, ${color.green}, ${color.blue})`;
        },
        deleteColor(index) {
            this.removeColor(index);
        },
        ...mapMutations({ removeColor: 'REMOVE_COLOR' }),
    }
}
</script>