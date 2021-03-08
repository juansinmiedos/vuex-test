<template>
  <div>
    Renderer

    <div v-for="(delivery, key) in deliveries" :key="key">
      <div>{{ delivery.customerName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Renderer',

  // data () {
  //   return {
  //     deliveries: [
  //       {
  //         id: 0,
  //         customerName: 'Juan'
  //       }
  //     ]
  //   }
  // },

  computed: {
    deliveries () {
      return this.$store.getters.getDeliveries
    }
  }
}
</script>