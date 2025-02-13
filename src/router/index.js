import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/quizHome.vue';
import QuizGame from '@/components/quizGame.vue';
import Resultado from '@/components/quizResultado.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/quiz', component: QuizGame },
  { path: '/resultado', component: Resultado, props: true } // Passando props
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
