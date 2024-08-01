import axios from "axios";
import React, { useEffect, useState } from "react";
import { Article } from "./components/article/Article";
import { Navbar } from "./components/navbar/Navbar";
import "./styles/App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      const newsData = response.data;
      console.log(newsData);
      setNews(newsData.results);
    }
    loadNews();
  }, []);
  return (
    // tag fragment  <> </> o react não aceita mais de um componente se nao estiverem envolvidos em uma tag, a tag fragment envolve os componentes.
    <>
      <Navbar />

      <section id="articles">
        {news.map((article) => {
          return (
            <Article
              key={article.id}
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
              url={article.url}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
// No React devemos importar a imagem antes de utilizar no src da tag
// Para renderizar o conteudo HTML utilizamos o Método RENDER();
// um componente em classe é uma classe que herda a classe Component do React e retorna um HTML dentro do método Render

//Componente funcional é uma função que retorna HTML
