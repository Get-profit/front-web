<template>
    <header>
        <h4>{{name}}</h4>
    </header>
</template>
<script>
export default {
    props:{
        name:{
            type: String,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="css">
    header{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        background: #8bc24a;
    }
    header h4{
        text-transform: uppercase;
        margin: 0;
    }
</style>