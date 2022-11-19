<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  background-color: #fff;
  /* background-color: rgb(202, 192, 167); */
}
section {
  padding-top: 4em;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.button {
  border: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.04em;
}
.button-gold {
  background-color: rgb(25 124 83);
  color: #fff;
}
.align-center {
  text-align: center;
}
</style>
