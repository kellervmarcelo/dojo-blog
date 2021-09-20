<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="mudarNome">Mudar Nome</button>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core'
export default {
  setup() {
    const name = ref('Marcelo')

    const mudarNome = () => {
      name.value = 'Marcos'
    }

    watchEffect(() => {
      console.log(`Mudou - ${name.value}`);
    })

    
    return { name, mudarNome }
  }
}
</script>

<style>

</style>