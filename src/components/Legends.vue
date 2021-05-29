<template>
  <div class="legends">
    <div class="column">
      <Legend description="Your past life">
      <Week
      :week="{phase:{ color: 'rgb(73, 233, 166)'}, week: 0, year:-10 }"
      :birthDate="new Date(0)"/>
    </Legend>
    <Legend description="Your future life">
      <Week
      :week="{phase:{ color: 'rgb(73, 233, 166)'}}" />
    </Legend>
    <Legend description="Your Current week">
      <Week
        :week="{phase:{ color: 'rgb(73, 233, 166)'}}"
        class="isCurrent"
        style="border-color: none !important;" />
    </Legend>
    <Legend description="Interesting Fact">
      <Label name="Label" />
    </Legend>
    </div>
    <div class="column">
      <Legend v-for="(phase, index) in phases" :key="index" :description="phase.name">
      <Week
      :week="{phase:{ color: phase.color}, week: 0, year:-10 }"
      :birthDate="new Date(0)"/>
    </Legend>
    </div>

  </div>
</template>

<script>
import { BASIC_LIFE_PHASES } from '@/constants';
import Legend from './Legend.vue';
import Week from './Week.vue';
import Label from './Tooltip.vue';

export default {
  components: {
    Legend,
    Week,
    Label,
  },
  data() {
    return {
      phases: BASIC_LIFE_PHASES.reverse(),
    };
  },
};
</script>

<style lang="scss">
.legends{
  display: flex;
  margin-bottom: 30px;
  margin: auto;
  width: max-content;
  @media (max-width: 700px){
    flex-direction: column;
  }
}
.column{
  margin: 0px 30px;
}
</style>
