<template>
<div class="wrap-form">
    <div v-for="(item, index) in inputs" :key="index" class="wrap-input">
          <input v-if="item.type !== 'textarea' && item.type !== 'select'" :type="item.type" :name="item.name" v-model="formData[item.name]">
          <textarea v-if="item.type == 'textarea'" :name="item.name" v-model="formData[item.name]" rows="1">
          </textarea>
          <select v-if="item.type == 'select'" :name="item.name" :id="item.name" v-model="formData[item.name]"></select>
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
        },
        formData:{
          type: Object,
          required: true
        }
    },
    data() {
        return {
        }
    },
    mounted(){
      this.inputs.forEach(input => {
        this.$set(this.formData, input.name, '')
      })
    }
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

.wrap-form .wrap-input input, .wrap-form .wrap-input textarea, .wrap-form .wrap-input select{
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 2px solid #8bc24a;
}

.wrap-form .wrap-input textarea{
  width: 100%;
}

.wrap-form .wrap-input input:focus ~ label, .wrap-input input:valid ~ label,
.wrap-form .wrap-input textarea:focus ~ label, .wrap-input textarea:valid ~ label,
.wrap-form .wrap-input select:focus ~ label, .wrap-input select:valid ~ label{
    top: -12px;
    font-size: 11px;
    font-weight: 700;
}

.validation{
  position: relative;
}

.validation .hasError{
  position: absolute;
  color: red;
  top: 35px;
  left: 0;
  font-size: 10px;
}

</style>
