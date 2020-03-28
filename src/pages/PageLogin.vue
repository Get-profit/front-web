<template>
    <section id="login">
            <div class="log-form">
                <h2 class="text-center">Login</h2>
                <form method="POST">
                    <input-group :inputs="fields"/>
                    <button class="btn-login">Entrar</button>
                </form>
            </div>
    </section>
</template>

<script>
import CompInputGroup from '@/components/CompInputGroup'

export default {

    components:{
        'input-group': CompInputGroup
    },

    data(){
        return{
            fields:[
                {
                    id: 1,
                    label: 'Login',
                    name: 'login',
                    type: 'text'
                },
                {
                    id: 2,
                    label: 'Senha',
                    name: 'senha',
                    type: 'password'
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
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