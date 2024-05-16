<template>
<div class="page" @animationend="animateOnImageClick = false">
    <h1>About</h1>
    <p>This app was built with Vue.js</p>
    <img src="@/assets/vue.png" class="animate__animated" :class="{ 'animate__jackInTheBox': animateOnImageClick }"
        @click="startAnimation">
</div>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            animateOnImageClick: true
        }
    },
    methods: {
        startAnimation() {
            this.animateOnImageClick = true;
        }
    }
}
</script>