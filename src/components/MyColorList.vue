<template>
<div class="page">
    <ul class="mixtures">
        <flask-item :key="index" v-for="(color, index) in $store.state.colors" :buttonsVisible=false :amount=100
            :size="10" :color="formatColor(color)" />
    </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'
import FlaskItem from './shared/FlaskItem.vue';

export default {
    name: 'MyColorsList',
    computed: mapState(['colors']),
    components: {
        FlaskItem,
    },
    methods: {
        formatColor(color) {
            return `rgb(${color.red}, ${color.green}, ${color.blue})`;
        }
    }
}
</script>