<template>
    <section id="login">
      <login />
    </section>
</template>
<script>
import LoginComponent from '@/components/LoginComponent'

export default {
  name: 'LoginTemplate',
  components:{
    'login': LoginComponent
  }

}
</script>

<style lang="css">
.log-form{
    width: 400px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #e2e2e2;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    text-align: center;
}
.log-form form{
    border: 2px solid #8bc24a;
    padding: 15px;
    border-radius: 5px;
}

.log-form form div{
    position: relative;
}

.log-form h2 {
    font-weight: 700;
    text-transform: uppercase;
    color: #53aa5e;
    margin: 0 0 40px;
}

.log-form button{
    background: #8bc24a;
    border: none;
    color: #fff;
    text-transform: uppercase;
    padding: 5px 20px;
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 25px;
}
</style>
