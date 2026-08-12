/*import { useState } from 'react'*/
import Header from "./components/Header";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
