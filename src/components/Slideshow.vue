<template>
    <div class="slideshow-container">
      <div v-for="(item, index) in items" :key="index" v-show="currentIndex === index" class="slide">
        <div v-if="item.type === 'image'">
          <img :src="item.url" :alt="item.caption" />
        </div>
        <div v-else-if="item.type === 'video'">
          <video :src="item.url" autoplay controlslist="nofullscreen"></video>
        </div>
        <p class="overlay-text">{{ item.caption }}</p>
      </div>
    </div>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue';
  
    const items = ref([
        { type: 'image', url: '/assets/kitchen1.png', caption: 'Ready to upgrade your kitchen? Let us help!' },
        { type: 'video', url: '/assets/opening_cabinet.mp4', caption: 'Custom cabinets for your home.' },
        { type: 'image', url: '/assets/custom_closets.jpg', caption: 'High quality custom closets.' },
        { type: 'image', url: '/assets/kitchen2.png', caption: 'Dedicated to our craft' },
        // ... more items
    ]);
  
    const currentIndex = ref(0);
  
    onMounted(() => {
        setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % items.value.length;
        }, 3000); // Change slide every 3 seconds
    });
</script>
  
<style scoped>
    .slideshow-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
        transform: translateY(-100px);
    }
    .slide {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slide > div {
        height: 100%;
        width: 100%;
        object-fit: cover; /* This will cover the entire area, possibly cropping the image/video */
    }
    .slide > div > img, .slide > div > video {
        height: 100%;
        width: 100%;
        object-fit: cover; /* This will cover the entire area, possibly cropping the image/video */
    }
    .overlay-text {
        position: absolute;
        font-size: x-large;
        font-weight: bold;
        left: auto;
        color: white;
        background-color: black;
        padding: 10px;
        max-width: 80%;
    }

    @media screen and (max-width: 768px){
        .overlay-text{
            text-align: center;
        }
    }
</style>
  