<template>
    <div class="slideshow-modal">
        <div class="slideshow-content">
            <img :src="photos[currentPhotoIndex].src" alt="Slideshow Image">
            <button class="left-arrow" @click="previousPhoto">&#9664;</button>
            <button class="right-arrow" @click="nextPhoto">&#9654;</button>
            <button class="close-button" @click="$emit('close')">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        photos: Array,
        currentPhotoIndex: Number,
    },
    methods: {
        nextPhoto() {
            if (this.currentPhotoIndex < this.photos.length - 1) {
                this.$emit('update:index', this.currentPhotoIndex + 1);
            }
        },
        previousPhoto() {
            if (this.currentPhotoIndex > 0) {
                this.$emit('update:index', this.currentPhotoIndex - 1);
            }
        },
    },
};
</script>

<style>
.slideshow-modal {
    position: fixed;
    top: 70px;
    left: 0px;
    width: 100vw;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.slideshow-content {
    position: flex;
}

.slideshow-content img {
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    max-height: 80vh;
    max-width: 80vw;
}

.left-arrow, .right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

.left-arrow {
    left: 50px;
}

.right-arrow {
    right: 50px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 4rem;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .close-button {
        right: 10px;
        font-size: 2rem;
    }

    .left-arrow {
        left: 10px;
    }

    .right-arrow {
        right: 10px;
    }
}

/* Add styles for the image as needed */
</style>
