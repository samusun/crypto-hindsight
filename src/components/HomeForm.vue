<template>
  <div>
    <div class="form-row">
      <b-form
        class="form-group col-md-4"
        @submit="onSubmit"
        @reset="onReset"
        v-if="show"
      >
        <b-form-group id="input-group-1" label="Summa:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="summa"
            type="number"
            min="100"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Valuta:" label-for="input-2">
          <b-form-select
            id="input-2"
            v-model="valuta1"
            :options="['sek']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Kryptovaluta:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="valuta2"
            :options="['bitcoin', 'ethereum', 'tezos']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Datum du tänkte köpa in dig:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="date"
            type="date"
            :min="min"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <b-card v-if="this.priceThen" class="result" header="Resultat">
      <p>Resultatet är enastående</p>
      <b-button variant="success" @click="calc">Beräkna</b-button>
      <b-card-text>{{ result }}</b-card-text>
    </b-card>
  </div>
</template>

<style scoped>
.form-row {
  justify-content: center;
}
</style>

<script>
export default {
  watch: {
    summa(nyaSumma, gamlaSumma) {
      console.log(
        `Användaren har ändrat summan ifrån ${gamlaSumma} till ${nyaSumma}`
      );
    },
  },
  data() {
    return {
      summa: null,
      date: null,
      valuta1: ["sek"],
      valuta2: ["bitcoin", "ethereum"],
      priceThen: null,
      priceNow: null,
      gains: null,
      show: true,
      today: new Date(),
      todayDate: "",
      missedGainz: null,
      result: null,
      allData: null,
      change: 1,
      min: "2013-02-03",
    };
  },
  computed: {
    fixDate() {
      return this.date
        .split("-")
        .reverse()
        .join("-");
    },
  },
  methods: {
    calc() {
      this.change = this.priceNow / this.priceThen;
      console.log(this.change + " this change");
      this.missedGainz = this.summa * this.change;
      this.finalresult = Math.round(this.missedGainz) + this.valuta1;

      this.result =
        "Hade du köpt " +
        this.valuta2 +
        " " +
        this.date +
        " för " +
        this.summa +
        " " +
        this.valuta1 +
        " hade det varit värt " +
        this.finalresult +
        " idag ";
    },

    onSubmit(event) {
      event.preventDefault();
      this.$store.commit("increment");
      console.log("Antal sökningar: " + this.$store.state.antalSök);
      this.today =
        this.today.getFullYear() +
        "-" +
        (this.today.getMonth() + 1) +
        "-" +
        this.today.getDate();
      this.today = this.today
        .split("-")
        .reverse()
        .join("-");

      fetch(
        "https://api.coingecko.com/api/v3/coins/" +
          this.valuta2 +
          "/history?date=" +
          this.fixDate
      )
        .then((response) => response.json())
        .then((result) => {
          this.priceThen = Math.round(result.market_data.current_price.sek);
          console.log(result);
          return console.log("Då kostade en Bitcoin " + this.priceThen);
        });

      fetch(
        "https://api.coingecko.com/api/v3/coins/" +
          this.valuta2 +
          "/history?date=" +
          this.today
      )
        .then((response) => response.json())
        .then((result) => {
          this.priceNow = Math.round(result.market_data.current_price.sek);
          console.log(result);
          return console.log("Nu kostar en bitcoin" + this.priceNow);
        });
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.summa = null),
        (this.priceThen = null),
        (this.valuta1 = ""),
        (this.valuta2 = ""),
        (this.result = ""),
        (this.today = new Date()),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};

// Längsta man kan gå tillbaka i tiden är typ Maj 2013
</script>

<style scoped lang="scss">
$primary: #e0e530;
$secondary: #e0e530;
$third: #b61a28;
$fourth: #73557b;
$white: #fff;
$gray: #9b9b9b;

.b-button {
  color: rgb(255, 87, 87);
}

.result {
  background-color: $fourth;
}
</style>
