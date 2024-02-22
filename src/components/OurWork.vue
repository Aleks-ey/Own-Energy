<template>
    <div class="work_top_line"></div>
    <h1 class="work_header text-purple-500">Our Work</h1>
    <div class="container">
        <div class="masonry-grid">
            <div v-for="(photo, index) in photos" :key="index" class="masonry-item cursor-pointer">
                <img :src="photo.src" :alt="`Photo ${index}`" class="img-cover" @click="openSlideshow(index)"/>
            </div>
        </div>
    </div>
    <div class="work_bottom_line"></div>

    <!-- Slideshow Modal -->
    <div v-bind="$attrs">
        <WorkSlideshowModal 
            v-if="isSlideshowOpen"
            :photos="photos"
            :currentPhotoIndex="currentPhotoIndex"
            @close="closeSlideshow"
            @update:index="updateCurrentPhotoIndex"
        />
    </div>
</template>
  
<script>
    import pkg from 'vue-masonry-css';
    const { VueMasonryPlugin } = pkg;

    import WorkSlideshowModal from './WorkSlideshowModal.vue';

    export default {
        name: 'OurWork',
        data() {
            return {
                photos: [
                    { src: '../assets/work/PHOTO1.jpg'},
                    { src: '../assets/work/PHOTO2.jpg'},
                    { src: '../assets/work/PHOTO3.jpg'},
                    { src: '../assets/work/PHOTO4.jpg'},
                    { src: '../assets/work/PHOTO5.jpg'},
                    { src: '../assets/work/PHOTO6.jpg'},
                    { src: '../assets/work/PHOTO7.jpg'},
                    { src: '../assets/work/PHOTO8.jpg'},
                    { src: '../assets/work/PHOTO9.jpg'},
                    { src: '../assets/work/PHOTO10.jpg'},
                    { src: '../assets/work/PHOTO11.jpg'},
                    { src: '../assets/work/PHOTO12.jpg'},
                    { src: '../assets/work/PHOTO13.jpg'},
                    { src: '../assets/work/PHOTO14.jpg'},
                    { src: '../assets/work/PHOTO15.jpg'},
                    { src: '../assets/work/PHOTO16.jpg'},
                    { src: '../assets/work/PHOTO17.jpg'},
                    { src: '../assets/work/PHOTO18.jpg'},
                    { src: '../assets/work/PHOTO19.jpg'},
                    { src: '../assets/work/PHOTO20.jpg'},
                    // { src: '../assets/work/PHOTO21.jpg'},
                    { src: '../assets/work/PHOTO22.jpg'},
                    { src: '../assets/work/PHOTO23.jpg'},
                    { src: '../assets/work/PHOTO24.jpg'},
                    { src: '../assets/work/PHOTO25.jpg'},
                    { src: '../assets/work/PHOTO26.jpg'},
                    { src: '../assets/work/PHOTO27.jpg'},
                    { src: '../assets/work/PHOTO28.jpg'},
                    { src: '../assets/work/PHOTO29.jpg'},
                    { src: '../assets/work/PHOTO30.jpg'},
                    { src: '../assets/work/PHOTO31.jpg'},
                    { src: '../assets/work/PHOTO32.jpg'},
                    { src: '../assets/work/PHOTO33.jpg'},
                    { src: '../assets/work/PHOTO34.jpg'},
                    { src: '../assets/work/PHOTO35.jpg'},
                    { src: '../assets/work/PHOTO36.jpg'},
                    { src: '../assets/work/PHOTO37.jpg'},
                    // { src: '../assets/work/PHOTO38.jpg'},
                    { src: '../assets/work/PHOTO39.jpg'},
                    { src: '../assets/work/PHOTO40.jpg'},
                    { src: '../assets/work/PHOTO41.jpg'},
                    { src: '../assets/work/PHOTO42.jpg'},
                ],
                isSlideshowOpen: false,
                currentPhotoIndex: 0,
            };
        },
        methods: {
            openSlideshow(index) {
                this.currentPhotoIndex = index;
                this.isSlideshowOpen = true;
            },
            closeSlideshow() {
                this.isSlideshowOpen = false;
            },
            updateCurrentPhotoIndex(newIndex) {
                this.currentPhotoIndex = newIndex;
            },
        },
        beforeDestroy() {
            if (this.$masonry) {
                this.$masonry.destroy();
            }
        },
        components: {
            WorkSlideshowModal,
        },
        props: {
            'data-astro-cid-ydzlgwus': {
                type: String,
                default: ''
            },
            // other props...
        },
    };
</script>
  
<style>
/* Masonry grid CSS */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
}

.masonry-item {
  width: 100%;
  grid-column: span 1;
  grid-row: span 1;
}

.masonry-item.wide {
  grid-column: span 1; /* Span 2 columns */
  grid-row: span 2;
}

.img-cover {
    object-fit: cover;
    width: 100%;
    height: 300px;
}

.work_top_line {
    width: 100%;
    height: 2px;
    background-color: purple;
    margin-top: 10rem;
}

.work_header {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.container {
    max-width: 100vw;
}


.work_bottom_line {
    width: 100%;
    height: 2px;
    background-color: purple;
    margin-top: 2rem;
}
</style>
  