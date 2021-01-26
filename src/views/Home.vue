<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logos.png">
    <HomeForm/>
    <Top7/>
  </div>
</template>
<script>


import HomeForm from '@/components/HomeForm.vue'
import Top7 from '@/components/Top7.vue';

export default {
  name: 'Home',
  components: {
    HomeForm,
    Top7,
  }
}
</script>

<style scoped>
img{
    width: 400px;
}
</style>