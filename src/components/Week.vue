<template>
  <div
    class="week"
    :class="{isCurrent}"
    :style="{borderColor, backgroundColor}"
    >
    <Tooltip class="week-tooltip" v-if="week.tooltip" :name="week.tooltip.name"/>
  </div>
</template>

<script>
import {
  isPast, addWeeks, addYears, isThisWeek,
} from 'date-fns';
import { INITIAL_BIRTHDAY_DATE } from '@/constants';
import Tooltip from './Tooltip.vue';

export default {
  components: {
    Tooltip,
  },
  props: {
    week: {
      default: () => ({ week: 0, year: 0, phase: { color: 'black' } }),
    },
    birthDate: {
      default: INITIAL_BIRTHDAY_DATE,
    },
  },
  computed: {
    currentWeek() {
      return addYears(addWeeks(this.birthDate, this.week.week), this.week.year);
    },
    isPast() {
      return isPast(this.currentWeek);
    },
    isCurrent() {
      return isThisWeek(this.currentWeek);
    },
    backgroundColor() {
      return this.isPast ? this.week?.phase?.color : 'transparent';
    },
    borderColor() {
      return this.week?.phase?.color;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: #FE2CD4;
.week{
  position: relative;
  display: flex;
  border: 1px solid black;

  width: 10px;
  height: 10px;
  border-radius: 3px;
  @media (max-width: 700px){
    width: 5px;
  }
}
.week-tooltip{
  top: 19px;
  left: 50%;
  position: absolute;
  z-index: 100;
  transform: translateX(-50%);
  font-size: 1.1em;
}
.isCurrent{
  background-color: white !important;
  border-color: white !important;
  box-shadow: 0 0 5px $color,
    0 0 10px $color,
    0 0 20px $color,
    0 0 30px $color,
    0 0 40px $color,
    0 0 40px $color,
    0 0 40px $color,
    0 0 40px $color;

  z-index: 10;
}
</style>
