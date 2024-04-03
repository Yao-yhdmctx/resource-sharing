<template>
  <div class="video-list">
    <div class="video-item" v-for="(tab, index) of tabContents" :key="index">
      <img class="video-img" :src="tab.src" alt="" />
    </div>
  </div>
</template>


<script setup>
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

<style scoped>
.video-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.video-item {
  width: 31.3%;
  margin: 1%;
  height: 100px;
  margin-bottom: 6px;
}
.video-img {
  width: 100%;
  height: 100%;
}
</style>