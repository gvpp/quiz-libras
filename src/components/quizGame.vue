  <template>
    
    <div class="flex flex-col items-center justify-center min-h-screen bg-yellow-300 p-5">
      
      <!-- Número da pergunta -->
      <h2 class="text-2xl font-bold text-black mb-4">
        Pergunta {{ perguntaAtual + 1 }} de {{ perguntas.length }}
      </h2>
      
      <component :is="perguntas[perguntaAtual]" @responder="verificarResposta" />
  
      <!-- Resultado Final -->
      <div v-if="mostrarResultado" class="mt-6 text-center">
        <h2 class="text-2xl font-bold">Quiz Finalizado!</h2>
        <p class="text-lg">Você acertou {{ pontuacao }} de {{ perguntas.length }} perguntas.</p>
        <button @click="reiniciarQuiz" class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
          Jogar Novamente
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Inicio from "@/components/quizHome.vue"
  import perguntas from "@/components/perguntasLoader.js";

  export default {
    components: perguntas,Inicio,
    data() {
      return {
        perguntaAtual: 0,
        pontuacao: 0,
        mostrarResultado: false,
        perguntas: Array.from({ length: 12 }, (_, i) => `Pergunta${i + 1}`)
      };
    },
    methods: {
      verificarResposta(correta) {
        if (correta) this.pontuacao++;

        if (this.perguntaAtual < this.perguntas.length - 1) {
          this.perguntaAtual++;
        } else {
        // Redirecionar para a tela de resultado ao finalizar
          this.$router.push({
            path: "/resultado",
            query: { pontuacao: this.pontuacao, total: this.perguntas.length }
          });
        }
      }
  }
  }
  </script>
  