<template>
  <div id="App">
    <h1>{{ msg }}</h1>
    <h2>Portfolio</h2>
    <nav>
        <ul>
        <li v-for="(link, i) in links" :key="i"> {{link}}</li>
        </ul>
    </nav>
    <div class="gallery" v-for="(image,i) in gallery" :key="i">
      <img class="img" v-bind:src="image.picture" v-bind:alt="image.alt"
      @click="toggleBorder">
    </div>
  </div>
</template>


<script>
  import {toggleBorder} from './src/toggle.js',
  mixins {toggleBorder}
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></script>

<script>
  export default {
  name: 'App',
  data() {
    return {
      msg: 'Plant Portraits',
      links: ['Home', 'Portfolio', 'Process', 'Book a Consultation'],
      gallery:
      [
        {picture: require('./assets/plant1.jpg'), alt:'Pink cherry blossom flower', title: 'Cherry Blossom'},
        {picture: require('./assets/plant2.jpg'), alt: 'Purple phlox', title: 'Phlox'},
        {picture: require('./assets/plant3.jpg'), alt: 'Hot pink peony blossom', title: 'Peony'},
        {picture: require('./assets/plant4.jpg'), alt: 'Light purple foxglove flower', title: 'Foxglove'}
      ]
    }
  }
}

</script>




<style lang="scss">
*{box-sizing: border-box;}
#app {
  font-family: 'Calibri', sans-serif;
  line-height: 1.8;
  color: #393939;
  padding-left: 60px;
  $primary: #339966;
  $accent: #33cccc;
}
img{
  max-width: 100%;
}
h3 {padding-left: 20px;}
h4 {padding-left: 20px}
p {padding-left: 20px;}
@border-radius($radius)
  -webkit-border-radius: $radius
  -ms-border-radius: $radius
  border-radius: $radius
body {
background: primary;
color: accent;
}
div {
background: primary;
border-radius: 10px;
}
header {
   height: 270px;
   background-color: #339966;
   padding-left: 60px;
   display: flex;
   color: white;
}
header h1 {
  font-size: 45px;
  background-color: #339966;
}
header p {
   font-size: 22px;
   line-height: 1.5;
   font-style: italic;
 }
  *,
  *:before,
  *:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  nav {
     background-color: #ebebeb;
     height: 60px;
     padding-left: 10px;
     display: flex;
  }
  .topnav {
    float: left;
    text-align: left;
    padding: 0px 0px;
    text-decoration: none;
  }
  nav ul li a{
    position: relative;
    text-decoration: none;
  }
  nav ul li a::before{
    content: "";
    position: absolute;
    background-color: navy;
    height: 3px;
    width: 0px;
    bottom: -15px;
    transition: 0.5s;
    transform-origin: left;
  }
nav ul li a:hover:before{
  width: 100%;
  text-align: left;
}
nav ul li {
   display: inline;
   line-height: 60px;
}
nav ul li a {
   color: black !important;
   font-weight: bold;
   margin-right: 20px;
   font-size: 18px;
   text-decoration: none;
 }
nav ul li:not(:last-child):after {
   content: "/";
   position: relative;
   left: -5px;
}
footer {
   position: relative;
   left: 0;
   height: 350px;
   width: 100vw;
   background-color: #393939;
   z-index: -10;
   text-align: center;
   display: inline-block;
    }
    footer img {
   margin-bottom: 20px;
   display: inline-block;
}
footer {
   list-style-type: none;
   margin-top: 20px;
   margin-bottom: 20px;
   display: inline-block;
}
footer nav {
     color: white !important;
     background-color: #393939;
     display: inline-block;
     line-height: 60px;
  }
footer nav ul li a {
     color: white !important;
     font-weight: bold;
     margin-right: 20px;
     font-size: 14px;
     display: inline-block;
}
small {
   font-weight: lighter;
  display: inline-block;
}
.hidden {
  position: relative;
  left: -10000px;
  top: auto;
}
.hidden:focus {
  left: 0;
}

</style>
