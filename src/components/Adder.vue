<template>
  <div>
    <button @click="addDeliveries">Add deliveries</button>
  </div>
</template>

<script>
export default {
  name: 'Adder',

  methods: {
    addDeliveries () {
      let newDeliveries = [
        {
          id: 0,
          customerName: 'Juan'
        },
        {
          id: 1,
          customerName: 'Marijo'
        },
        {
          id: 2,
          customerName: 'Thomas'
        },
        {
          id: 3,
          customerName: 'Miguel'
        },
        {
          id: 4,
          customerName: 'Renata'
        }
      ]
      this.$store.commit('addDeliveries', newDeliveries)
    }
  }
}
</script>