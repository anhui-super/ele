<template>
    <div>登入页面</div>
</template>
<script>
export default {
    mounted(){
        // detele localStorage.user
        localStorage.setItem('user','0');
        // this.$store.commit('changeLogin','1');   
    }
}
</script>
<style lang="scss" scoped>

</style>
