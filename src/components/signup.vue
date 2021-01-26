<template>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Ange användarnamn och lösenord</p> <input v-model="this.$store.state.username" type="text" name="" placeholder="Användarnamn"> <input type="password" name="" placeholder="Lösenord"> <a class="forgot text-muted" @click="forgot" href="#">Forgot password?</a> <input type="submit" name="" value="Login" href="#">
                    <div class="col-md-12">
                        <ul class="social-network social-circle">
                            <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods:{
      forgot(){
          alert("Vi har ingen databas, ange vad som helst")
          console.log(this.$store.state.username)
    }
},
  name: 'Signup',
}
</script>