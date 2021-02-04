<template>
  <div>
      <h1> Välkommen till kryptokalkylatorn</h1>
    <about v-if="registered" :user="fromstore">
    </about> <about v-else :user="$route.params.user"></about>
  </div>
</template>

<script>
import about from '@/components/About.vue'

export default {
  name: 'About',
  created(){
      console.log(this.$route.params.user)
  },
  components: {
    about
  },
  data() {
      return {
          registered: this.$store.state.registered,
          fromstore: this.$store.state.username
      }
  }
}
</script>
