<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Mutations Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Mutations Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Actions Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Actions Azalt</button>
     <hr>
    <button class="btn btn-success" @click="incAsync">+ Async Arttır</button>
  </div>
</template>

<script>

import { mapMutations , mapActions } from "vuex";

export default {

  methods : {
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),
    ...mapActions([
      "increment",
      "decrement",
      "incAsync"
    ])/*,
    increment(){
      this.$store.dispatch("increment")
    },
    decrement(){
      this.$store.dispatch("decrement")
    },
    incrementAsync(){
      this.$store.dispatch("incAsync")
    }*/

    //incrementCounter(){
    //  this.$emit("counterEvent", 1);
    //this.$store.state.counter++;  
    //this.$store.commit("updateCounter", +1);
    //},
    //decrementCounter(){
    //  this.$emit("counterEvent", -1);
    //this.$store.state.counter--;
    //this.$store.commit("updateCounter", -1);
    //}
  }

}
</script>

<style>
</style>
