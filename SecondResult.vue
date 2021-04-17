
<template>
  <div>

    <p class="counter-container">Second Sayaç : {{ double }} - Second Result Component</p>
    <p class="counter-container"> Tıklama Sayısı : {{ stringC }}</p>

  </div>
</template>
<script>

  import { mapGetters } from "vuex";

  export default {

   /* computed : {
      counter(){
      //  return this.$store.state.counter * 2;
      return this.$store.getters.getDoubleCounter;
      },
      stringCounter(){
        return this.$store.getters.stringCounter;
      }
    }
    computed : mapGetters([
      'getDoubleCounter',
      'stringCounter'
    ])*/
    
    computed: {
      ...mapGetters({
        double: 'getDoubleCounter',
        stringC: 'stringCounter'
      }),
      customProp(){

      }
    }
  }

</script>

<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: wheat;
    font-size: 20px;
    color: #000;
  }
</style>
