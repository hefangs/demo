<template>
  <div class="sidebar">
    <ul>
      <li>
        <a href="#">demo集合1</a>
      </li>
      <li>
        <a href="#">demo集合</a>
      </li>
      <li>
        <a href="#">demo集合</a>
      </li>
      <li>
        <a href="#">111</a>
      </li>
      <li>
        <a href="#">111</a>
      </li>
      <li>
        <a href="#">111</a>
      </li>
      <li>
        <a href="#">111</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SlideBar"
};
</script>
<style scoped>
.sidebar {
  width: 10%;
}
li {
  text-align: center;
  list-style-type: none;
  /* padding: 2px; */
  border-bottom: 1px solid;
  background: #f6f6f6;
}
li:hover {
  background: #00b8a9;
}
a {
  /* padding-top: 3px;
      padding-bottom: 3px; */
  text-decoration: none;
  font-size: 14px;
  color: #40514e;
  line-height: 60px;
  display: flex;
  display: block;
  justify-content: center;
  align-items: center;
}
</style>

