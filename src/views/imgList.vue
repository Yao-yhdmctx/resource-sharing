<script setup lang="ts">
import { reactive } from 'vue'
import img1 from '@/assets/image/1.jpg'
import img2 from '@/assets/image/2.jpg'
import img3 from '@/assets/image/3.jpg'
import img4 from '@/assets/image/4.jpg'
import img5 from '@/assets/image/5.jpg'
import img6 from '@/assets/image/6.jpg'
import img7 from '@/assets/image/7.jpg'
import img8 from '@/assets/image/8.jpg'
import img9 from '@/assets/image/9.jpg'
import img10 from '@/assets/image/10.jpg'
import img11 from '@/assets/image/11.jpg'
const tabContents = reactive([
  { title: 'Tab 1 Content', src: img1 },
  { title: 'Tab 1 Content', src: img2 },
  { title: 'Tab 1 Content', src: img3 },
  { title: 'Tab 1 Content', src: img4 },
  { title: 'Tab 1 Content', src: img5 },
  { title: 'Tab 1 Content', src: img6 },
  { title: 'Tab 1 Content', src: img7 },
  { title: 'Tab 1 Content', src: img8 },
  { title: 'Tab 1 Content', src: img9 },
  { title: 'Tab 1 Content', src: img10 },
  { title: 'Tab 1 Content', src: img11 }
])
</script>

<template>
  <div class="tabcontent">
    <ul class="img-wrapper">
      <li v-for="(content, index) in tabContents" :key="index">
        <img :src="content.src" alt="" />
        <p>{{ tabContents[index].title }}{{ index }}</p>
      </li>
    </ul>
  </div>
</template>
<style>
.tabcontent {
  padding: 6px 0;
  border: 1px solid #ccc;
  border-top: none;
}
.img-wrapper {
  column-count: 3;
  column-gap: 2px;
  padding: 0;
  counter-reset: count;
  width: 100%;
}

.img-wrapper > li {
  list-style: none;
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 10px;
}
.img-wrapper > li > img {
  width: 100%;
}
</style>