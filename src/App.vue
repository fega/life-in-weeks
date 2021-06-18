<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
  <iframe style="width: 100%;
  height: 450px;
  border: none;
  margin-top: 100px;" id="sengrid-iframe" src="https://cdn.forms-content.sg-form.com/3fd93a63-d079-11eb-8b02-ae3c4237bfe5"/>
</template>

<style lang="scss">
body{
  margin: 0px;
  background-color: #031417;
  padding-bottom: 150px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding:0px;
  background-color:#031417;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
 
}
</style>
