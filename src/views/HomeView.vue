<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
interface tabType {
  tabs: string
  components: string
}
const router = useRouter()
const tabs = [
  { tabs: '图片', components: '/imgList' },
  { tabs: '视频', components: '/videoList' },
  { tabs: '软件', components: '/imgList' },
  { tabs: '音乐', components: '/imgList' }
]
const activeTab = ref(0)
const openTab = (index: number, tab: tabType) => {
  activeTab.value = index
  router.push(tab.components)
}
openTab(0, tabs[0])
</script>

<template>
  <div class="tab">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="openTab(index, tab)"
      :class="{ active: activeTab === index }"
    >
      {{ tab.tabs }}
    </button>
  </div>
  <router-view />
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