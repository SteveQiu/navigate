<template>
    <div class="encouragement-container" ref="phoneContainer">
        <img class="phone" src="../assets/img/phone.png" alt="" ref="phone" v-bind:style="phoneStyleObject">
        <div class="slide">
            <div class="text">
                Scroll Down
            </div>
            <div style="position:absolute;transform: rotate(40deg);">
                <LoremText />
            </div>
        </div>
        <div class="slide">
            <div class="text">
                Thank you
            </div>
            <div style="position:absolute;transform: rotate(-40deg);">
                <LoremText />
            </div>
        </div>
        <div class="slide">
            <div class="text">
                Have a nice day!
            </div>
            <div style="position:absolute;transform: rotate(40deg);">
                <LoremText />
            </div>
        </div>
    </div>
</template>

<script>
import LoremText from './LoremText.vue';

export default {
    name: 'PhoneContainer',
    components: {
        LoremText,
    },
    data: function () {
        return {
            observer: null,
            observedElm: null,
            phoneWidth: '200px',
            phoneHeight: '400px',
            phoneLeft: `${(window.innerWidth - 200) / 2}px`,
            phoneTop: '0px',
            phonePosition: 'absolute',
        }
    },
    computed: {
        phoneStyleObject() {
            return {
                width: this.phoneWidth,
                height: this.phoneHeight,
                left: this.phoneLeft,
                top: this.phoneTop,
                position: this.phonePosition,
            }
        }
    },
    destroyed() {
        this.phoneObserver.unobserve(this.observedElm);
    },
    mounted: function () {
        this.setupPhoneObserver()
    },
    methods: {
        setupPhoneObserver() {
            let threshold = []
            for (let i = 1; i < 20; i++) {
                threshold.push(i / 20);
            }
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: threshold
            };
            this.observedElm = this.$refs.phoneContainer;
            this.phoneObserver = new IntersectionObserver(this.updatePhoneSize, options);
            this.phoneObserver.observe(this.observedElm);
        },
        updatePhoneSize(entries) {
            entries.forEach((entry) => {
                if (entry.target !== this.$refs.phoneContainer) return;

                const ratio = entry.boundingClientRect.top / entry.rootBounds.height;
                const bottom = entry.rootBounds.height - entry.boundingClientRect.top
                const powExp = 1
                const basis = 2
                const width = 200 * Math.pow(basis - entry.intersectionRatio, powExp)
                const height = 400 * Math.pow(basis - entry.intersectionRatio, powExp)
                const midThreshold = Math.min((window.innerHeight - height) / 2, Math.abs(bottom))
                console.log(entry);
                console.log(entry.intersectionRatio, entry.boundingClientRect.top, bottom, entry.rootBounds.height, entry.boundingClientRect.top / entry.rootBounds.height);

                if (ratio < 0.3) {
                    this.phoneWidth = `${width}px`
                    this.phoneHeight = `${height}px`
                    this.phoneLeft = `${(window.innerWidth - width) / 2}px`
                    this.phoneTop = `${midThreshold}px`
                    this.phonePosition = 'fixed'
                }
                else {
                    this.phoneWidth = '200px'
                    this.phoneHeight = '400px'
                    this.phoneLeft = `${(window.innerWidth - 200) / 2}px`
                    this.phoneTop = '0px'
                    this.phonePosition = 'absolute'
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.encouragement-container {
    position: relative;
}

.phone {
    min-width: 200px;
    min-height: 400px;
    max-width: 100vw;
    max-height: 200vw;
    transform: rotate(90deg);
    z-index: 0;
    position: absolute;
    transition: all 0.4s ease;
}

@media only screen and (max-width: 800px) {
    .phone {
        transform: rotate(0deg);
    }
}

.slide {
    z-index: 1;
    color: black;
    float: none;
    font-size: 2em;
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .text {
        position: absolute;
        top: 15%;
    }
}
</style>