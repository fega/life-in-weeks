<template>
  <div class="home">
    <div class="home-headers">
    <h1>Your Life in weeks</h1>
    <p>
        Hello, this is life in weeks,Here you can set your birth date and see where you are in your life (more or less).
    </p>
    <blockquote>
      "It kind of feels like our lives are made up of a countless number of weeks. But there they are—fully countable—staring you in the face."
    </blockquote>
    <figcaption>
    — Tim Urban
    </figcaption>
    <br>
    <div class="date-container">
      <label class="date-label" for="date">
        Your BirthDate:
      </label>
      <span>
        <input
          type="date"
          name="date"
          id="date"
          :min="minDate"
          :max="maxDate"
          v-model="date"
          @focus="show=false"
          @blur="show=true" >
          <button class="get-calendar-button">Get Calendar</button>
      </span>
    </div>
    <h2 v-if="show">Legend</h2>
    </div>
    <div class="years" v-if="show">
      <Legend />
      <Header />
      <Year
        v-for="(year, index) in years"
        :key="index"
        :year="year"
        :birthDate="birthDate"
        />
    </div>
    <h2>Inspired by:</h2>
    <ul id="inspired-by">
      <li><a href="https://www.youtube.com/watch?v=JXeJANDKwDc">Kurzgesagt</a> </li>
      <li><a href="https://waitbutwhy.com/2014/05/life-weeks.html">Wait but why</a> </li>
    </ul>
  </div>
  
</template>

<script>
import {
  INITIAL_BIRTHDAY, getYears, MIN_DATE, MAX_DATE,
} from '@/constants';
import Year from '@/components/Year.vue';
import Header from '@/components/Header.vue';
import Legend from '@/components/Legends.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      date: INITIAL_BIRTHDAY,
      years: getYears(),
      show: true,
      minDate: MIN_DATE,
      maxDate: MAX_DATE,
    };
  },
  components: {
    Year,
    Header,
    Legend,
  },
  computed: {
    birthDate() {
      return new Date(this.date);
    },
  },
  methods: {
    onDateChange() {
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 100);
    },
  },
};
</script>

<style scoped lang="scss">
.home{
  display: flex;
  flex-direction: column;
  color: white;
}

h1{
  color: white;
  font-family: 'Bungee Inline', Arial, Helvetica, sans-serif;
  font-size: 2.5em;
}
h2{
  color: white;
  font-family: 'Bungee Inline', Arial, Helvetica, sans-serif;
  font-size: 1.7em;
}

.years{
  margin: auto;
  @media (max-width: 1100px){
    width: 95%;
  }
  @media (min-width: 1100px){
    width: 1100px;
  }
}
.date-label{
  display: inline-block;
  color: white;
  font-family: 'Bungee Inline', Arial, Helvetica, sans-serif;
  width: 220px
}
.date-container{
  margin-bottom: 20px;
  font-size: 1.3em;
}
.get-calendar-button{
  background-color: #940c3a;
  color: white;
  padding: 5px 10px;
  font-weight: 700;
  border-radius: 10px;
  position: relative;
  box-shadow: black 0px 2px;
  text-shadow: black 0px 2px;
  min-width: max-content;
  border: none;
  margin: 0px 10px
}
#inspired-by{
  width: max-content;
  margin: auto;
}
a:link {
  color: aqua;
}
a:visited {
  color: darkviolet;
}
</style>
