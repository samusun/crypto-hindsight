<template>
<div>
<div v-if="!this.$store.state.registered" >

    <form>
<b-container fluid>
    <h1> Registrera </h1>
  <b-row class="my-1">
    <b-col sm="9">
      <b-form-input v-model="namn1" type="text" placeholder="Användarnamn"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="9">
      <b-form-input v-model="namn2" type="text"  placeholder="Upprepa användarnamn"></b-form-input>
    </b-col>
  </b-row>
 <p v-if="lika" >Användarnamnen behöver vara lika</p>
 <p v-if="!lika" > Korrekt! </p>

 <b-row class="my-1">
    <b-col sm="9">
      <b-form-input v-model="förnamn" type="text"  placeholder="Förnamn"></b-form-input>
    </b-col>
  </b-row>


 <b-row class="my-1">
    <b-col sm="9">
      <b-form-input v-model="efternamn" type="text"  placeholder="Efternamn"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="9">
      <b-form-input v-model="ålder" type="number"  placeholder="Ålder"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="9">
      <b-form-input v-model="intressen" type="text"  placeholder="Intressen"></b-form-input>
    </b-col>
  </b-row>

  
  <b-row class="my-1">
    <b-col sm="9">
      <b-form-input type="password" v-model="password" autocomplete="on" placeholder="Lösenord"></b-form-input>
    </b-col>
  </b-row>

   <b-button type="submit" variant="success" @click="save" name="" value="Login" href="#">Registrera</b-button>
                              </b-container>
                              </form>
                              </div>

                              <div v-else >
        <h2>Välkommen {{$store.state.username}}</h2>
     </div>
     <div v-if="$store.state.registered" >
     <profile/>
     <input type="button" value="Logga ut" @click="logout" >
     </div>
                              </div>

                              
</template>

<script>
import profile from '@/components/profile.vue'

export default {
  components: {
    profile,
  },
    computed: {
        lika: function(){
            if (this.namn1 !== "" && this.namn1 === this.namn2){
        return false } else { return true}
        }
    },
    methods:{
        save(){
            this.$emit("signed-in")
            this.$store.state.username = this.namn1;
            this.$store.state.förnamn = this.förnamn;
            this.$store.state.efternamn = this.efternamn;
            this.$store.state.intressen = this.intressen;
            this.$store.state.password = this.password;
            this.$store.state.ålder = this.ålder;
            this.$store.state.registered = true
        },
      forgot(){
          alert("Vi har ingen databas, ange vad som helst")
          console.log(this.$store.state.username)
    },
    logout(){
        this.$store.state.registered = false
    }
},
data(){
    return{
          namn1: "",
          namn2: "",
          password:"",
          förnamn: "",
          efternamn: "",
          intressen:"",
          ålder: "",
    }
}

}
</script>
