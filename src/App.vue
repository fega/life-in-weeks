<template>
  <div class="ribbon">
    <a href="https://github.com/fega/life-in-weeks">Fork me on GitHub</a>
  </div>
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
.ribbon {
  background-color: #a00;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  right: -50px;
  top: 40px;
  -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
          transform: rotate(45deg);
	-webkit-box-shadow: 0 0 10px #888;
     -moz-box-shadow: 0 0 10px #888;
          box-shadow: 0 0 10px #888;
}
.ribbon a {
  border: 1px solid #faa;
  color: #fff;
  display: block;
  font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 1px 0;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 0 5px #444;
}
</style>
