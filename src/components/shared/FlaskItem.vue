<script>
import ButtonItem from './ButtonItem.vue';
export default {
    name: 'FlaskItem',
    data() {
        return {
            isAnimated: false
        }
    },
    props: {
        size: {
            type: Number,
            default: 10
        },
        amount: {
            type: Number,
            default: 50
        },
        color: {
            type: String
        },
        variant: {
            type: String
        },
        buttonsVisible: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        flaskStyle() {
            return {
                height: `${this.size}rem`,
                width: `${this.size}rem`
            }
        },

        fillClasses() {
            return [
                'flask__fill',
                (this.variant) && `flask__fill--${this.variant}`
            ]
        },

        fillStyle() {
            const style = { height: this.amount + '%' }

            if (!this.variant) {
                style.backgroundColor = this.color || '#fff'
            }

            return style
        }
    },
    components: {
        ButtonItem
    },
    methods: {
        animation() {
            this.isAnimated = true

        }
    }
}
</script>

<template>
<div class="flask animate__animated" :class="isAnimated && 'animate__shakeY'" :style="flaskStyle"
    @animationend="isAnimated = false">
    <!-- decrement btn -->
    <button-item v-if="buttonsVisible" class="flask__btn flask__btn--left" icon="pi-arrow-down"
        @click="$emit('decrement'); animation()" />

    <div :class="fillClasses" :style="fillStyle" />

    <!-- increment btn -->
    <button-item v-if="buttonsVisible" class="flask__btn flask__btn--right" icon="pi-arrow-up" :movement="-0.5"
        @click="$emit('increment'); animation()" />
</div>
</template>

<style lang="scss">
.flask {
    display: block;
    border: 10px solid #ddd;
    border-radius: 50%;
    margin: 2rem 1rem;
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    box-shadow: 0 20px 40px 0 rgba(107, 154, 212, .3);

    &__fill {
        width: 100%;
        height: 100%;
        transition: .2s;

        &--red {
            background-color: $colorThree;
            background-image: linear-gradient(189deg, $colorThree 0%, #FF2525 74%);
        }

        &--green {
            background-color: $colorFour;
            background-image: linear-gradient(0deg, $colorFour 0%, #2AF598 100%);
        }

        &--blue {
            background-color: $colorFive;
            background-image: linear-gradient(183deg, $colorFive 0%, $colorSix 100%);
        }

    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $colorOne;
        background-image: linear-gradient(0deg, $colorOne 0%, $colorSeven 100%);
        opacity: 0.2;
    }

    &__btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &--right {
            right: 1rem;
        }

        &--left {
            left: 1rem;
        }
    }
}
</style>

<!-- // this.$refs.fade.classList.add('animate__animated', 'animate__shakeY')
// setTimeout(() => {
//     this.$refs.fade.classList.remove('animate__animated', 'animate__shakeY')
// }, 300) -->