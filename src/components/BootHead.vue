

<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
   <b-navbar-brand href="#"><router-link to="/">  Krypto Hindsight </router-link> </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item ><router-link to="/signup">Sign up</router-link></b-nav-item>
      </b-navbar-nav>


      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em> 
          </template>
          <b-dropdown-item href="/signup">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>


export default {
    computed: {

    },
  name: 'BootHead',
}

// Här vill jag importera användarnamnet från store.
</script>

