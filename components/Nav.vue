<template>
  <div class="btn-group">
    <NuxtLink class="button" to="/"> Vuex </NuxtLink>
    <NuxtLink class="button" to="/events"> Pinia </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn-group {
  display: flex;
  gap: 10px;
}
.btn-group .button {
  background: #444444;
  color: aliceblue;
  box-sizing: border-box;
  padding: 1rem 2rem;
  border-radius: 3px;
  border: 0;
  text-decoration: none;
}
.btn-group .button:hover {
  background: #555;
}
</style>