<script setup lang="ts">
import { reactive, ref } from 'vue'
const tabs = ['图片', '视频', '软件', '音乐']
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
const activeTab = ref(0)

const openTab = (index: number) => {
  activeTab.value = index
}
</script>

<template>
  <div class="tab">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="openTab(index)"
      :class="{ active: activeTab === index }"
    >
      {{ tab }}
    </button>
  </div>

  <div class="tabcontent" v-if="activeTab == 0">
    <ul class="img-wrapper">
      <li v-for="(content, index) in tabContents" :key="index">
        <img :src="content.src" alt="" />
        <p>{{ tabContents[index].title }}</p>
      </li>
    </ul>
  </div>
</template>
<style>
.tab {
  border: 1px solid #ccc;
  background-color: #f8cb03;
  display: flex;
  overflow: auto;
  justify-content: space-between;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #fa0202;
}

.tabcontent {
  padding: 6px 12px;
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