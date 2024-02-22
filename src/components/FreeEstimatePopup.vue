<template>
    <div>
        <!-- Your Button -->
        <button class="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" @click="togglePopup">
            Free Estimate
        </button>

        <!-- Popup -->
        <div v-if="isPopupVisible" class="popup">
            <div class="popup-content">
                <p class="font-bold mb-2">Contact us for a free estimate!</p>
                <p>Email: info.cabinetsandclosets@gmail.com</p>
                <p>Phone: (561) 221-2681</p>
                <button @click="togglePopup" class="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPopupVisible: false
        };
    },
    methods: {
        togglePopup() {
            this.isPopupVisible = !this.isPopupVisible;
        }
    }
};
</script>

<style scoped>
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup-content {
        background: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        text-align: center;
    }
</style>
