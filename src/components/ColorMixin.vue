<template>
<div>

  <!-- mixtures list -->
  <mixtures-list :mixtures="mixtures" @increment="increment" @decrement="decrement" />

  <!-- result box -->
  <result-box @refresh="refresh" :mixtures="mixtures" />

</div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ColorMixin',
  data: () => ({
    // mixtures: [
    //   {
    //     variant: 'red',
    //     amount: 20
    //   },
    //   {
    //     variant: 'green',
    //     amount: 70
    //   },
    //   {
    //     variant: 'blue',
    //     amount: 40
    //   }]
  }),
  computed: {
    ...mapState(['mixtures'])
  },
  methods: {
    ...mapMutations({ setMixtureAmount: 'SET_MIX', resetMixtures: 'RESET_MIX' }),
    increment(index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 100) return false
      this.setMixtureAmount({ index, amount: mixture.amount + 1 })
    },

    decrement(index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 0) return false
      this.setMixtureAmount({ index, amount: mixture.amount - 1 })
    },

    refresh() {
      const newAmounts = {
        red: 20,
        green: 70,
        blue: 40
      };
      this.resetMixtures(newAmounts);
    }
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
