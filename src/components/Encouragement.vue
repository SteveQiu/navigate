<template>
    <div class="encouragement-container">
        <div class="phone-container" ref="phoneContainer">
            <img class="phone" src="/img/phone.png" alt="" ref="phone" v-bind:style="phoneStyleObject">
            <div class="inst">Scroll Down</div>
            <div class="ppt">
                <div>Thank you</div>
            </div>
        </div>
        <table class="end">
            <tr><td>THE END</td></tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Encouragement',
        data: function () {
            return {
                observer: null,
                phoneWidth: '200px',
                phoneHeight: '400px',
                phoneLeft: `${(window.innerWidth-200)/2}px`,
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
            this.phoneObserver.unobserve(this.$refs.phoneContainer)
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
                this.phoneObserver = new IntersectionObserver(this.updatePhoneSize, options);
                this.phoneObserver.observe(this.$refs.phoneContainer)
            },
            updatePhoneSize(entries, observer) {
                entries.forEach((entry) => {
                    if (entry.target == this.$refs.phoneContainer && entry.boundingClientRect.top < 0) {
                        console.log(entry);
                        console.log(entry.intersectionRatio);
                        const powExp = 1
                        const basis = 2
                        const width = 200*Math.pow(basis-entry.intersectionRatio, powExp)
                        const height = 400*Math.pow(basis-entry.intersectionRatio, powExp)
                        const top = Math.min((window.innerHeight- height)/2, Math.abs(entry.boundingClientRect.top))
                        this.phoneWidth = `${width}px`
                        this.phoneHeight = `${height}px`
                        this.phoneLeft = `${(window.innerWidth-width)/2}px`
                        this.phoneTop = `${top}px`
                        this.phonePosition = 'fixed'
                    }
                    else{
                        this.phoneWidth= '200px'
                        this.phoneHeight= '400px'
                        this.phoneLeft= `${(window.innerWidth-200)/2}px`
                        this.phoneTop= '0px'
                        this.phonePosition='absolute'
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .encouragement-container {
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .phone-container {
        min-height: calc(90vh - 60px);
        min-width: 100vw;
        max-height: calc(90vh - 60px);
        max-width: 100vw;
        position: relative;
    }

    .phone {
        min-width: 200px;
        min-height: 400px;
        max-width: 100vw;
        max-height: 200vw;
        transform: rotate(90deg);
        top: 0;
        z-index: 2;
        position: absolute;
        transition: all 0.4s ease;
    }

    @media only screen and (max-width: 800px) {
        .phone {
            transform: rotate(0deg);
        }
    }

    .inst{
        z-index: 3;
        color: white;
        position: absolute;
        top:28vh;
        text-align: center;
        font-size: 2em;
        width: 100vw;
        
        div{
            margin: 50px 0;
        }
    }

    .ppt{
        z-index: 3;
        color: white;
        position: absolute;
        top:60vh;
        text-align: center;
        font-size: 2em;
        width: 100vw;
        
        div{
            margin: 50px 0;
        }
    }

    .end {
        height: 100vh;
        width: 100vw;
        text-align: center;
        font-size: 3em;
        z-index: 3;
        color: white;
        position: relative;

        td {
            vertical-align: middle;
            height: inherit;
        }
    }
</style>