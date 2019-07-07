<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="main">
      <Sidebar class="sidebar"></Sidebar>
      <Detail class="detail"></Detail>
      <!-- <router-view name="slidebar"></router-view>
      <router-view name="Detail"></router-view>-->
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Detail from "./components/Detail";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Detail,
    Sidebar
    // PostList
  }
};
</script>
<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". header ."
    "main main main"
    ". footer .";
}
.header {
  grid-area: header;
  border: 1px solid red;
}
.main {
  grid-area: main;
  border: 1px solid black;
  display: flex;
}
.sidebar {
  grid-area: sidebar;
  border: 1px green solid;
  /* width: 15%; */
}
.footer {
  grid-area: footer;
  border: 1px solid purple;
}
</style>
