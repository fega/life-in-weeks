<template>
  <div class="legend">
    <span class="component">
    <slot></slot>
    </span>
    <!-- <span>{{name}}</span> -->
    <span class="description">{{description}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
  },
};
</script>

<style>
.legend{
  display: flex;
  align-items: center;
  /* margin-bottom: 15px; */
  height: 40px;
}
.description{
  color:white;
  font-family: 'Bungee Inline', Arial, Helvetica, sans-serif;
  display: inline-block;
  text-align: left;
}
.component{
  position: relative;
  display: flex;
  margin-right: 15px;
  /* margin-top: 15px; */
  width: 50px;
  align-items: center;
  justify-content: center;
}

</style>
