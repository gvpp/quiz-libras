const modules = import.meta.glob("../components/Perguntas/quizPergunta*.vue", { eager: true });

const components = {};

for (const path in modules) {
  const name = path.match(/Pergunta\d+/)[0]; 
  components[name] = modules[path].default;
}

export default components;