<template>
  <div>
    <h1>{{ user }}</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
  },
  name: "about",
};
</script>
