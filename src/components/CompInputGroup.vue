<template>
<div class="wrap-form">
    <div v-for="(item, index) in inputs" :key="index" class="wrap-input">
        <input v-if="item.type !== 'textarea'" :type="item.type" :name="item.name" v-model="formData[item.name]">
        <label :for="item.label">{{item.label}}</label>
    </div>
</div>
</template>

<script>
export default {
    props:{
        inputs:{
            type: Array,
            required: true
        }
    },
    data() {
        return {
            formData: {},
        }
    },
}
</script>

<style lang="css" scoped>
.wrap-input{
    position: relative;
}
.wrap-form .wrap-input label{
    position: absolute;
    left: 0;
    top: 10px;
    pointer-events: none;
    color: #8bc24a;
    text-transform: uppercase;
    font-size: 14px;
    transition: .5s;
}

.wrap-form .wrap-input input{
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 2px solid #8bc24a;
}

.wrap-form .wrap-input input:focus ~ label, .wrap-input input:valid ~ label{
    top: -12px;
    font-size: 11px;
    font-weight: 700;
}
    
</style>