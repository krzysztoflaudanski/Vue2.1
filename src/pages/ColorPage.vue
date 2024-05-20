<template>
<div v-bind="$attrs" :class="$attrs.class">
    <div class="page" v-bind="$attrs" :class="$attrs.class">
        <page-title>Color</page-title>
    </div>
    <p v-show="areNumbers"> You've pick great color!</p>
    <Message severity="error" v-show="!areNumbers">Color doesn't exist</Message>
    <flask-item v-if="areColorsValid" :buttonsVisible="false" :amount="100" :size="15" :color="color"
        :style="{ margin: '3rem auto' }"></flask-item>
    <i class="pi pi-share-alt"></i>
    <InputText type="text" v-model="colorURL" :style="{ marginLeft: '20px', width: '400px' }" />
</div>
</template>

<script>
import InputText from 'primevue/inputtext';
import PageTitle from './../components/shared/PageTitle.vue';
import FlaskItem from './../components/shared/FlaskItem.vue';
import Message from 'primevue/message';

export default {
    name: 'ColorPage',
    inheritAttrs: false,
    data() {
        return {
            colorURL: '',
            color: '',
            areColorsValid: false,
            areNumbers: true,
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
            const red = parseInt(this.$route.params.red);
            const green = parseInt(this.$route.params.green);
            const blue = parseInt(this.$route.params.blue);

            if (isNaN(red) || isNaN(green) || isNaN(blue)) {
                this.areNumbers = false;
                this.$router.push('/');
                return;
            }
            if (!this.isValidColor(red) || !this.isValidColor(green) || !this.isValidColor(blue)) {
                this.color = `rgb(${red}, ${green}, ${blue})`;
                this.areNumbers = false;
                return;
            }
            this.color = `rgb(${red}, ${green}, ${blue})`;
            this.colorURL = `http://localhost:8080/#/color/${red}/${green}/${blue}`;
            this.areColorsValid = true;
            this.areNumbers = true;
        },
        isValidColor(color) {
            return color >= 0 && color <= 255;
        }
    },
    components: {
        PageTitle,
        InputText,
        FlaskItem,
        Message
    }
};
</script>
