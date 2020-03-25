<template>
    <section id="login">
            <div class="log-form">
                <h2 class="text-center">Login</h2>
                <form method="POST">
                    <div>
                        <input type="text" name="formUsuario" value="">
                        <label for="formUsuario">Usuário</label>
                    </div>
                    <div>
                        <input type="password" name="formSenha" value="">
                        <label for="formSenha">Senha</label>
                    </div>
                    <button class="btn-login">Entrar</button>
                </form>
            </div>
    </section>
</template>
<script>
export default {
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

.log-form div label{
    position: absolute;
    left: 0;
    top: 10px;
    pointer-events: none;
    color: #8bc24a;
    text-transform: uppercase;
    font-size: 14px;
    transition: .5s;
}

.log-form div input{
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 2px solid #8bc24a;
}

.log-form div input:focus ~ label, .log-form div input:valid ~ label{
    top: -12px;
    font-size: 11px;
    font-weight: 700;
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