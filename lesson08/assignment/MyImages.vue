<template>
  <div id="app">
<ul>
<li v-for="link in links"> {{link}}</li>
</ul>
<div class=background><h1>Portfolio</h1>
</div>

<div v-for="images in images" {{images}}:key="item.id"> {{index}}.{{image.name}}
  </div>

<footer class="footer">
  <ul>
    <li><a href="./index.html">About</a><a href="./portfolioimages.html">Portfolio</a><a href="processaccordian.html">Process</a><a href="contactgrid.html">Book a Consultation</a></li>
  </ul>
</nav>
<p><small>© 2022 Plant Portraits LLC | Seattle, WA</small></p>
</footer>
</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></script>

<script>


export default {
  name: 'App',
  data() {
  return {
  links: ['Home', 'Portfolio', 'Process', 'Book a Consultation'],
  gallery:[
  {images: required('./images/plant1.jpg'), alt:'Pink cherry blossom flower'},
  {images: required('./images/plant2.jpg'), alt: 'Purple phlox'},
  {images: required('./images/plant3.jpg'), alt: 'Hot pink peony blossom'},
  {images: required('./images/plant4.jpg'), alt: 'Light purple foxglove flower'},
  ],
  }
  }
  }
</script>
