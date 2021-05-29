<template>
  <div class="tooltip-container">
    <div class="tooltip">
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.tooltip-container{
  position: relative;
}
.tooltip {
  background-color: #940c3a;
  color: white;
  padding: 5px 10px;
  font-weight: 700;
  border-radius: 10px;
  position: relative;
  box-shadow: black 0px 2px;
  text-shadow: black 0px 2px;
  min-width: max-content;
}
.tooltip:before{
  border: solid;
  border-color: #940c3a transparent;
  border-width: 0px 6px 10px 6px;
  content: "";
  left: calc(50% - 6px );
  bottom: 30px;
  position: absolute;
}
</style>
