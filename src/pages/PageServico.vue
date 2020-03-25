<template>
    <section id="Servico">
        <CompNavbar v-if="$route.name != 'Login'" name="Ordem de Serviço" />
    </section>
</template>
<script>
import CompNavbar from '@/components/CompNavbar'
export default {
    components:{
        CompNavbar
    },
}
</script>