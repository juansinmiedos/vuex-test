<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <Adder />
    <Renderer />
  </div>
</template>

<script>
import Adder from './components/Adder'
import Renderer from './components/Renderer'

export default {
  name: 'App',
  components: {
    Adder,
    Renderer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
