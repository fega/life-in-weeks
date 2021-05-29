<template>
  <div class="header">
    <div class="year">
      <span>Year</span>
    </div>
    <div class="week">
      <span>Week</span>
      <div class="week-number-container">
       <div class="week-number" v-for="week in 52" :key="week">{{week}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    week: {
      default: () => ({
        week: 0, year: 0, phase: { color: 'black' },
      }),
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  color: white;
  display: flex;
  background-color: #10768444;
  margin-top: 40px;
}
.year{
  width: 40px;
  background-color: #10768444;
  display: flex;
  justify-content: center;
  align-items: center;
}
.week{
  width: calc(100% - 40px);
  text-align: center;
   margin-top: 8px;

}
.week-number-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
   font-size: 12px;
   margin-top:10px;
  height: 1.6em;
  @media (max-width: 700px){
    display: none;
  }
}
.week-number{
  width: 10px
}

</style>
