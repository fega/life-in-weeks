<template>
  <div class="legends">
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
</template>

<script>
import Legend from './Legend.vue';
import Week from './Week.vue';
import Label from './Tooltip.vue';

export default {
  components: {
    Legend,
    Week,
    Label,
  },
};
</script>

<style>
.legends{
  margin-bottom: 30px;
  margin: auto;
  width: max-content;
}
</style>
