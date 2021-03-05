<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "krypto-data",
};
</script>
<script>
export default {
  created() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=29-04-2014"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  },

  data() {
    return {
      form: {
        summa: null,
      },
      valuta1: ["SEK", "EUR", "USD"],
      valuta2: ["Bitcoin", "Ethereum"],
      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.form.summa = null),
        (this.form.valuta1 = ""),
        (this.form.valuta2 = ""),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 400px 0 0;
}
</style>
