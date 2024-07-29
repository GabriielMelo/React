import React from "react";

import { Counter } from "./components/counter/Counter";
import "./styles/App.css";
class App extends React.Component {
  render() {
    return (
      // tag fragment  <> </> o react não aceita mais de um componente se nao estiverem envolvidos em uma tag, a tag fragment envolve os componentes.
      <>
        <Counter />

        {/* <Navbar />
        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic sit ratione omnis cupiditate odio, adipisci voluptas molestiae dolore? Quod quia magni dolore quibusdam quo laboriosam dignissimos explicabo autem amet."
            thumbnail={article2}
          />

          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa laborum obcaecati accusantium hic rem. Aliquid aspernatur repudiandae cum? Consequuntur dolorem velit harum sint ratione labore modi? Sunt blanditiis eius tempore?"
            thumbnail={article3}
          />

          <Article
            title="Designing Dashboards"
            provider="NASA"
            description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia consequatur recusandae, qui praesentium nam sapiente accusamus temporibus eum non, eius consequuntur nisi hic nesciunt ducimus fugit placeat aliquam laudantium! Ea."
            thumbnail={article1}
          />
        </section> */}
      </>
    );
  }
}
export default App;
// No React devemos importar a imagem antes de utilizar no src da tag
// Para renderizar o conteudo HTML utilizamos o Método RENDER();
// um componente em classe é uma classe que herda a classe Component do React e retorna um HTML dentro do método Render

//Componente funcional é uma função que retorna HTML
