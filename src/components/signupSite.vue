<template class="body" >
<div class="container">
    {{inloggad}}
<signUp @signed-in="welcome" />
</div>
</template>

<script>
import signUp from '@/components/signup.vue'


export default {
    methods: {
      welcome() {
        console.log('Användaren har loggat in')
        this.inloggad = "Du är inloggad"
      }
    },
      data(){
          return{
              inloggad: ""
          }
      },
  name: 'signup',
  components: {
    signUp,
  }
}

</script>