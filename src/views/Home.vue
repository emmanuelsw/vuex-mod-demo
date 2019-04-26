<template>
  <transition name="component-fade" mode="out-in">
    <component :is="currentStep"></component>
  </transition>
</template>

<script>
const Step1 = () => import('./Step1.vue')
const Step2 = () => import('./Step2.vue')
const Step3 = () => import('./Step3.vue')
const Step4 = () => import('./Step4.vue')

export default {
  name: 'home',
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  computed: {
    currentStep () {
      return this.$store.state.currentStep || 'Step1'
    }
  }
}
</script>
