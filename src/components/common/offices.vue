<template>
    <div class="offices">
        <div class="container container--pr-0">
            <div class="row">
                <div class="col-5">
                    <div class="offices__inner">
                        <h3 class="section-title">Our Offices</h3>
                        <div class="offices-tabs">
                            <div class="offices-tabs__switcher">
                                <div @click="changeTab(0)" :class="{active : activeTab == 0}">Kyiv</div>
                                <div @click="changeTab(1)" :class="{active : activeTab == 1}">New York</div>
                                <div @click="changeTab(2)" :class="{active : activeTab == 2}">Guangzhou</div>
                                <div @click="changeTab(3)" :class="{active : activeTab == 3}">Barcelona</div>
                            </div>
                            <transition name="fade">
                                <div class="offices-tab" v-show="activeTab == 0">
                                    <h4 class="offices-tab__title">Global Message Services Ukraine LLC</h4>
                                    <span>Kuiv, Stepan Bandera, 33</span>
                                    <span>02066</span>
                                    <span>Ukraine</span>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div class="offices-tab" v-show="activeTab == 1">
                                    <h4 class="offices-tab__title">Global Message Services US LLC</h4>
                                    <span>Kuiv, Stepan Bandera, 33</span>
                                    <span>02066</span>
                                    <span>USA</span>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div class="offices-tab" v-show="activeTab == 2">
                                    <h4 class="offices-tab__title">Global Message Services China LLC</h4>
                                    <span>Kuiv, Stepan Bandera, 33</span>
                                    <span>02066</span>
                                    <span>Guango</span>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div class="offices-tab" v-show="activeTab == 3">
                                    <h4 class="offices-tab__title">Global Message Services Spain LLC</h4>
                                    <span>Kuiv, Stepan Bandera, 33</span>
                                    <span>02066</span>
                                    <span>Spain</span>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="col-5 col-5--full">
                    <office-map :cord="cord[activeTab]"></office-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import officeMap from './office-map'

export default {
    components: {
        officeMap
    },
    data () {
        return {
            activeTab: 0,
            cord: [
                { lat: 50.4518867, lng: 30.5110706 },
                { lat: 40.721814, lng: -74.0055505 },
                { lat: 23.1247423, lng: 113.2573118 },
                { lat: 41.3856529, lng: 2.169472 }
            ]
        }
    },
    methods: {
        changeTab(num) {
            this.activeTab = num
        }
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>