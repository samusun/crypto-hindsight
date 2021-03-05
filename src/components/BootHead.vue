<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"
        ><router-link to="/"> Krypto Hindsight </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/signup">Sign up</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <p v-if="$store.state.registered">{{ $store.state.username }}</p>
      <p id="online" v-if="userOnline">Online</p>
      <p id="offline" v-else>Offline</p>
    </b-navbar>
  </div>
</template>

<script>
export default {
  created() {
    if (navigator.onLine) {
      this.userOnline = true;
      addEventListener("offline", () => {
        this.userOnline = false;
      });

      addEventListener("online", () => {
        this.userOnline = true;
      });
    }
  },
  data() {
    return {
      userOnline: false,
    };
  },
  name: "BootHead",
};

// Här vill jag importera användarnamnet från store.
</script>
