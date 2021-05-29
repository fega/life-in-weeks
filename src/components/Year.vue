<template>
  <div class="year" >
    <span
    :class="{decade: !(year.year % 10) && year.year!==0}"
    class="number"> {{year.year}} </span>

    <Week
      class="week" v-for="(week, index) in year.weeks"
      :birthDate="birthDate"
      :key="index"
      :week="week"/>
  </div>
</template>

<script>
import {
  isPast, addYears, isThisYear,
} from 'date-fns';
import { INITIAL_BIRTHDAY_DATE, PAST_DATE, FUTURE_DATE } from '@/constants';
import Week from './Week.vue';

export default {
  components: {
    Week,
  },
  props: {
    year: {
      default: () => ({ year: 0, weeks: [] }),
    },
    birthDate: {
      default: INITIAL_BIRTHDAY_DATE,
    },
  },
  computed: {
    currentWeek() {
      return addYears(this.week.year);
    },
    isPast() {
      return isPast(this.currentWeek);
    },
    isCurrent() {
      return isThisYear(this.currentWeek);
    },
    optimizedDate() {
      if (this.isCurrent) return this.birthDate;
      if (this.isPast) return PAST_DATE;
      return FUTURE_DATE;
    },
  },
};
</script>

<style scoped lang="scss">
.year{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.number{
  color: white;
  width: 40px;
  background-color: #10768444;
  padding-top: 2px;
}
.week{
  margin-top: 10px;
}
.decade{
  padding-bottom: 40px;
}
</style>
