<!-- <template>
<div class="page">
    <page-title>Color</page-title>
</div>
<flask-item :buttonsVisible=false :amount=100 :size="15" :color="color" :style="{ margin: '3rem auto' }"></flask-item>
<i class="pi pi-share-alt"></i>
<InputText type="text" v-model="colorURL" :style="{ marginLeft: '20px', width: '400px' }" />
</template>

<script>
import InputText from 'primevue/inputtext';
import PageTitle from './../components/shared/PageTitle.vue'
import FlaskItem from './../components/shared/FlaskItem.vue';
export default {
    name: 'ColorPage',
    data() {
        return {
            colorURL: '',
            color: `rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`
        };
    },
    created() {
        this.updateColorURL();
    },
    watch: {
        '$route'(to, from) {
            this.updateColorURL();
        }
    },
    methods: {
        updateColorURL() {
            const red = parseInt(this.$route.params.red) || 0;
            const green = parseInt(this.$route.params.green) || 0;
            const blue = parseInt(this.$route.params.blue) || 0;

            if (this.isValidColor(red) && this.isValidColor(green) && this.isValidColor(blue)) {
                this.color = `rgb(${red}, ${green}, ${blue})`;
                this.colorURL = `http://localhost:8080/#/color/${red}/${green}/${blue}`;
                this.areColorsValid = true;
            } else {
                this.$router.push('/');
            }
        },
        isValidColor(color) {
            return color >= 0 && color <= 255;
        }
    },
    components: {
        PageTitle,
        InputText,
        FlaskItem
    },
}
</script> -->

<template>
<div class="page">
    <page-title>Color</page-title>
</div>
<flask-item v-if="areColorsValid" :buttonsVisible="false" :amount="100" :size="15" :color="color"
    :style="{ margin: '3rem auto' }"></flask-item>
<i class="pi pi-share-alt"></i>
<InputText type="text" v-model="colorURL" :style="{ marginLeft: '20px', width: '400px' }" />
</template>

<script>
import InputText from 'primevue/inputtext';
import PageTitle from './../components/shared/PageTitle.vue';
import FlaskItem from './../components/shared/FlaskItem.vue';

export default {
    name: 'ColorPage',
    data() {
        return {
            colorURL: '',
            color: '',
            areColorsValid: false
        };
    },
    created() {
        this.updateColorURL();
    },
    watch: {
        '$route'(to, from) {
            this.updateColorURL();
        }
    },
    methods: {
        updateColorURL() {
            const red = parseInt(this.$route.params.red)
            const green = parseInt(this.$route.params.green)
            const blue = parseInt(this.$route.params.blue)

            if (this.isValidColor(red) && this.isValidColor(green) && this.isValidColor(blue)) {
                this.color = `rgb(${red}, ${green}, ${blue})`;
                this.colorURL = `http://localhost:8080/#/color/${red}/${green}/${blue}`;
                this.areColorsValid = true;
            } else {
                this.$router.push('/');
            }
        },
        isValidColor(color) {
            return color >= 0 && color <= 255;
        }
    },
    components: {
        PageTitle,
        InputText,
        FlaskItem
    }
};
</script>
