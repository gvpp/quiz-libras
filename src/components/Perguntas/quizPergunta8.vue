<template>
  <div class="text-center w-full">
    <!-- Caixa com Placeholder -->
    <div class="bg-yellow-500 text-white p-6 rounded-lg shadow-lg question-container">
      <div class="bg-gray-300 flex items-center justify-center rounded-lg mb-4 video-container">
        <video class="w-full h-40 rounded-lg mb-4" autoplay loop muted>
          <source src="@/assets/videos/Perguntas/pergunta8_Garfo.mp4" type="video/mp4">
          Seu navegador não suporta vídeos.
        </video>
      </div>
      <h2 class="text-2xl font-bold">Qual o significado desse sinal em Libras?</h2>
    </div>

    <!-- Opções de Resposta -->
    <div class="mt-6 opcoes-container">
      <button
        v-for="(opcao, index) in opcoes" 
        :key="index"
        @click="verificarResposta(index)"
        class="block w-full bg-white text-gray-800 font-semibold p-3 my-2 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition botao-opcao"
      >
        {{ opcao }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opcoes: ["Garfo", "Tridente", "Amigos", "Três"],
      respostaCorreta: 0
    };
  },
  methods: {
    verificarResposta(indice) {
      this.$emit("responder", indice === this.respostaCorreta);
    }
  }
};
</script>
