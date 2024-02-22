<template>
    <header :class="headerClass">
        <!-- Logo on the left -->
		<div>
            <img src="../../OwnEnergyLogo.svg" alt="Logo" :class="logoClass" class="hidden md:block max-h-32" @click="redirectToHome"/>
            <img src="../../OwnEnergyLogo.webp" alt="Logo" :class="logoClass" class="block md:hidden max-h-32" @click="redirectToHome"/>
		</div>

        <button id="hamburger" class="hamburger block md:hidden" @click="toggleMenu()">
            <!-- Simple Hamburger Icon (3 lines) -->
            <div></div>
            <div></div>
            <div></div>
        </button>

        <!-- Hamburger Menu (Mobile) -->
        <nav id="hamburgerMenu" :class="hamburgerMenuClass" v-if="hamburgerMenuVisible">
            <a href="/" class="link text-white hover:text-orange-500">Home</a>
			<div class="mobile_group">
                <span @click="toggleServicesDropdown" class="text-white hover:text-orange-500 flex justify-between items-center">
                    Services <span class="material-icons">expand_more</span> <!-- Arrow icon -->
                </span>
                <div v-if="servicesDropdownVisible" class="mobile_group_dropdown text-white p-2 mt-1 rounded">
                    <a href="/cabinets" class="block hover:text-orange-500">Custom Cabinets</a>
                    <a href="/closets" class="block hover:text-orange-500">Closets</a>
                    <a href="/installation" class="block hover:text-orange-500">Installation</a>
                </div>
            </div>
			<a href="/faq" class="link text-white hover:text-orange-500">FAQ</a>
			<a href="/process" class="link text-white hover:text-orange-500">Process</a>
			<a href="/warranty" class="link text-white hover:text-orange-500">Warranty</a>
            <button class="md:hidden bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" @click="toggleMenu(), toggleMobileNavPopup()">
                Free Estimate
            </button>
        </nav>
	
		<!-- Navigation in the middle (Desktop) -->
		<nav class="hidden md:flex gap-4">
			<a href="/" class="text-white hover:text-orange-500">Home</a>
            <div class="relative desktop_dropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
			    <span class="text-white hover:text-orange-500">Services</span>
                <div class="desktop_dropdown_menu p-2 mt-1 rounded" 
                    v-show="isDropdownVisible"
                    @mouseenter="showDropdown"
                    @mouseleave="hideDropdown"
                >
                    <a href="/cabinets" class="block hover:text-orange-500">Cabinet Fabrication</a>
                    <a href="/closets" class="block hover:text-orange-500">Closet Fabrication</a>
                    <a href="/installation" class="block hover:text-orange-500">Installation</a>
                </div>
            </div>
			<a href="/faq" class="text-white hover:text-orange-500">FAQ</a>
			<a href="/process" class="text-white hover:text-orange-500">Process</a>
			<a href="/warranty" class="text-white hover:text-orange-500">Warranty</a>
		</nav>

        <!-- Free Estimate Popup -->
        <FreeEstimatePopup/>

        <!-- Mobile Nav Popup -->
        <div v-if="mobileNavPopupVisible" class="mobile-nav-popup">
            
            <div class="popup-content">
                <p class="font-bold mb-2">Contact us for a free estimate!</p>
                <p>Email: info.cabinetsandclosets@gmail.com</p>
                <p>Phone: (561) 221-2681</p>
                <button @click="toggleMobileNavPopup()" class="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Close</button>
            </div>
        </div>

    </header>
</template>

<script>
    import { ref, onMounted, onUnmounted } from 'vue';
    import FreeEstimatePopup from './FreeEstimatePopup.vue';

    export default {
        components: {
            FreeEstimatePopup,
        },
        setup() {
            const headerClass = ref('largeHeader');
            const hamburgerMenuVisible = ref(false);
            const hamburgerMenuClass = ref('largeHamburgerMenu');
            const servicesDropdownVisible = ref(false);
            const isDropdownVisible = ref(false);
            let isMouseOverDropdown = false;
            const logoClass = ref(false);
            const mobileNavPopupVisible = ref(false);

            function updateClasses() {
                if (window.scrollY > 0) {
                    headerClass.value = 'smallHeader';
                    hamburgerMenuClass.value = 'smallHamburgerMenu';
                    logoClass.value = 'smallLogo';
                } else {
                    headerClass.value = 'largeHeader';
                    hamburgerMenuClass.value = 'largeHamburgerMenu';
                    logoClass.value = 'largeLogo';
                }
            }

            onMounted(() => {
                window.addEventListener('scroll', updateClasses);
            });

            onUnmounted(() => {
                window.removeEventListener('scroll', updateClasses);
            });

            function toggleMenu() {
                hamburgerMenuVisible.value = !hamburgerMenuVisible.value;
            }

            function toggleServicesDropdown() {
                servicesDropdownVisible.value = !servicesDropdownVisible.value;
            }

            const showDropdown = () => {
                isDropdownVisible.value = true;
                isMouseOverDropdown = true;
            };

            const hideDropdown = () => {
                isMouseOverDropdown = false;
                setTimeout(() => {
                    if (!isMouseOverDropdown) {
                        isDropdownVisible.value = false;
                    }
                }, 300); // Delay before hiding the dropdown
            };

            function toggleMobileNavPopup() {
                mobileNavPopupVisible.value = !mobileNavPopupVisible.value;
            }

            function redirectToHome() {
                window.location.href = '/';
            }

            return { 
                headerClass, 
                toggleMenu, 
                hamburgerMenuVisible, 
                hamburgerMenuClass,
                toggleServicesDropdown, 
                servicesDropdownVisible,
                showDropdown,
                hideDropdown,
                isDropdownVisible,
                logoClass,
                redirectToHome,
                mobileNavPopupVisible,
                toggleMobileNavPopup,
            };
        }
    };
</script>


<style scoped>
    .largeHeader {
        /* Larger height and lower opacity */
        height: 100px;
        z-index: 100;
        transition: 0.5s;

        background-color: rgba(20, 22, 72, 0.99);
        display: flex;
        flex-direction: row;
        position: sticky;
        top: 0;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;

    }

    .smallHeader {
        /* Smaller height and higher opacity */
        height: 80px;
        opacity: 0.8;
        z-index: 100;
        transition: 0.5s;

        background-color: rgba(20, 22, 72, 0.99);
        display: flex;
        flex-direction: row;
        position: sticky;
        top: 0;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .hamburger {
        margin-left: auto;
        margin-right: 20px;
    }

    .largeHamburgerMenu {
        display: flex;
        position: fixed;
        transition: 0.5s;
        top: 100px;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.99);
        z-index: 100;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 30px;
        text-align: center;
    }

    .smallHamburgerMenu {
        display: flex;
        position: fixed;
        transition: 0.5s;
        top: 70px;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.99);
        z-index: 100;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 30px;
        text-align: center;
    }

    .link {
        transform: translateY(-100px);
    }

    #hamburgerMenu a {
        display: block;
        color: white;
        font-size: 1.5rem;
        text-decoration: none;
    }

    #hamburgerMenu div {
        display: block;
        color: white;
        font-size: 1.5rem;
        text-decoration: none;
    }

    #hamburgerMenu button {
        transform: translateY(-70px);
        font-size: large;
    }

    .hamburger div {
        width: 30px;
        height: 3px;
        background-color: white;
        margin: 6px 0;
        transition: 0.4s;
    }

    .desktop_dropdown_menu {
        /* display: none; */
        position: absolute;
        left: -20px;
        top: 90%; /* Positioned directly below the trigger */
        min-width: 200px;
        background-color: #fff;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .desktop_dropdown_menu[style*="display: none"] {
        display: none !important;
    }

    .desktop_dropdown_menu[style*="display: block"] {
        opacity: 1;
    }

    .desktop_dropdown_menu a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .desktop_dropdown_menu a:hover {
        background-color: #ddd;
        color: orange;
    }

    .mobile_group {
        position: relative;
        transform: translateY(-100px);
        line-height: 2rem;
    }

    .mobile_group > span {
        transform: translateX(8px);
    }

    .mobile_group_dropdown {
        line-height: 2.5rem;
    }

    .mobile-nav-popup {
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
        font-size: larger;
        background: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        text-align: center;
        border: 2px solid orange;
        opacity: 100% !important;
    }

    .largeLogo {
        height: 150px;
        width: 150px;
        transition: 0.5s;
    }

    .smallLogo {
        height: 100px;
        width: 100px;
        transition: 0.5s;
    }
</style>
