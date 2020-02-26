<script>
({
  components: {},
  data: () => ({
    arr: ["one", "two", "three"]
  })
});
</script>

<template>
  <div>
    <h1>Martin Hanzel</h1>
    <div v-for="i in arr" :key="i">{{i}}</div>
  </div>
</template>
