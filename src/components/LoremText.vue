<template>
    <div class="container">
        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoremText',
    data: () => {
        let textArray = [];
        for (let i = 0; i < 10; i++) {
            textArray.push(`Web Development `);
        }
        return {
            text: textArray.join('')
        };
    }
}
</script>

<style lang="less" scoped>
.container {
    color: white;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
    overflow: hidden;
    width: 80vw;
    line-height: 2em;
}

.text {
    white-space: nowrap;
    animation: ani 5s infinite;
    animation-timing-function: linear;
    position: relative;
}

@keyframes ani {
    0% {
        right: 0px;
    }

    100% {
        right: 1000px;
    }
}
</style>