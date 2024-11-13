import React from 'react';
import Movie from './Movie';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Мои любимые фильмы</h1>
      
      <Movie 
        title="Начало"
        director="Кристофер Нолан"
        year="2010"
        studio="Warner Bros. Pictures"
        poster="https://m.media-amazon.com/images/M/MV5BMDgxY2UxOWMtZTA4Zi00ZmMyLWE5OTQtODhhOWNiNTljMWRjXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY213_CR141"
      />
      
      <Movie 
        title="Матрица"
        director="Лана и Лилли Вачовски"
        year="1999"
        studio="Warner Bros."
        poster="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/d3cd8f20dcbcc75db5237963a785c848/1920x1080"
      />
      
      <Movie 
        title="Бойцовский клуб"
        director="Дэвид Финчер"
        year="1999"
        studio="20th Century Fox"
        poster="https://steamuserimages-a.akamaihd.net/ugc/1859424227572928271/96D8D69DCF355AA0A42908989D061B2F1CC68AF5/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"
      />
      
      <Movie 
        title="Форрест Гамп"
        director="Роберт Земекис"
        year="1994"
        studio="Paramount Pictures"
        poster="https://avatars.dzeninfra.ru/get-zen_doc/3432422/pub_5ee79415d2a345208ad13ac0_5ee794bed5cb604099a537fb/scale_1200"
      />
      
      <Movie 
        title="Похождения Красной Шапочки"
        director="Франко Ло Кашио"
        year="1993"
        studio="Le avventure erotix di Cappuccetto Rosso"
        poster="https://huyamba.net/contents/videos_screenshots/7000/7986/640x360/8.jpg"
      />
    </div>
  );
}

export default App;
