<template>
  <nav>
    <div class="logo">
      <router-link to="/home">Acessorios.com</router-link>
    </div>
    <div class="section">
      <h4>{{pagina}}</h4>
    </div>
    <slot />
  </nav>
</template>
<script>
export default {
  props:['pagina']
}
</script>
<style lang="">
nav{
  height: 60px;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
  justify-content: space-between;
  background: #8bc24a;
}

h4{
  margin: 0;
}

a,a:hover, a:active, a:link{
  text-decoration: none;
}

.logo{
  text-align: center;
}

.logo a{
  font-size: 20px;
  color: #fff;
  text-shadow: 5px 5px 10px #000;
}

.section{
  text-transform: uppercase;
  color: #fff;
  text-align: center;
}

.user-config{
  display: flex;
  align-items: flex-end;
}

.user{
  margin-left: auto;
  margin-right: 15px;
  margin-bottom: 10px;
  text-align: right;
}

.user h5{
  font-family: 'Montserrat';
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0;;
}

.user span{
  font-size: 16px;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
}

.user-config #btnSair{
  background: #fff;
  padding: 18px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.4s ease;
}

.user-config #btnSair:hover{
  transition: 0.4s ease;
  transform: scale(0.98);
}

</style>
