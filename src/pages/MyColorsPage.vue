<template>
<div class="page">
    <h1>My Colors</h1>
    <ul class="mixtures">
        <li :key="index" v-for="(color, index) in $store.state.colors">
            {{ color }}
        </li>
    </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MyColorsPage',
    computed: mapState(['colors'])
}
</script>