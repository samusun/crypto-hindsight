

<template>
<div>

<b-card> 
<img id="profilePic" src="../assets/logos.png">
      <b-card-text>
        <p> {{$store.state.förnamn}} {{$store.state.efternamn}} </p>
        <p> Ålder: {{$store.state.ålder}} </p>
        <p> Intressen: {{$store.state.intressen}} </p>
      </b-card-text>
    </b-card>

    </div>
</template>

<script>
export default{
    name: 'profile'
}
</script>

<style scoped>
#profilePic {
    height: 10vh;
    width: 10vh;
}
</style>