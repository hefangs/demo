<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="Detail"></router-view>
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
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". header ."
    ". main ."
    ". footer .";
}
.header {
  grid-area: header;
  border: 1px solid red;
}
.main {
  grid-area: main;
  border: 1px solid black;
}
.sidebar {
  grid-area: sidebar;
  border: 1px green solid;
}
.footer {
  grid-area: footer;
  border: 1px solid purple;
}
</style>
