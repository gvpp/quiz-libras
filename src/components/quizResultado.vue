<template>
    <div class="flex items-center justify-between min-h-screen bg-yellow-300 p-10">
        
        <div class="w-1/3 flex flex-col items-center text-center">
            <h2 class="text-4xl font-bold">Quiz Finalizado!</h2>
            <p class="text-2xl mt-4">Você acertou {{ pontuacao }} de {{ totalPerguntas }} perguntas.</p>

            <div class="mt-6 flex flex-col space-y-4">
                <button @click="jogarNovamente"
                    class="w-48 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                    Jogar Novamente
                </button>
                <button @click="voltarInicio"
                    class="w-48 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Voltar para o Início
                </button>
            </div>
        </div>

        <div class="w-2/3 flex flex-col justify-center items-center text-center">
            <p class="text-2xl font-semibold mb-4 max-w-2xl leading-relaxed">
                Muitas vezes, a gente pode achar que os sinais em Libras se parecem com as coisas ou ações que
                representam, mas isso não é verdade. Ao contrário do que alguns podem pensar, os sinais em Libras não
                são "imagens" ou "desenhos" das palavras que representam. A Libras, como qualquer outra língua, tem uma
                estrutura própria, com gramática e regras que vão além de simples gestos.
            </p>
            <img src="../assets/Mask for the deaf-amico.svg" alt="Troféu" class="w-64 h-64">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pontuacao: this.$route.query.pontuacao || 0,
            totalPerguntas: this.$route.query.total || 0,
        };
    },
    methods: {
        jogarNovamente() {
            this.$router.push("/quiz");
        },
        voltarInicio() {
            this.$router.push("/");
        }
    }
};
</script>