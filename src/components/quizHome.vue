<template>
  <div class="flex flex-col min-h-screen bg-yellow-300 p-6"> 
    <!-- Conteúdo Principal -->
    <div class="flex flex-col items-center justify-center flex-grow">  
      <h1 class="text-5xl font-bold text-gray-800 text-center">Quiz de Libras</h1>  
      <p class="text-lg text-gray-700 mt-4 text-center">Teste seus conhecimentos sobre sinais em Libras!</p>
      <button 
        @click="iniciarJogo" 
        class="mt-10 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition transform hover:scale-105"
      >
        Começar Quiz
      </button>
    </div>

    <!-- Footer fixado no final -->
    <footer class="text-gray-700 text-sm mt-auto text-center py-4">
      <p>Desenvolvido por: Gabriel Vinicius e José Matheus</p>
      <p>Fontes dos vídeos: [Referências aqui]</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    iniciarJogo() {
      this.$router.push("/quiz");
    }
  }
};
</script>
