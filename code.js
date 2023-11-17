const urls=[
    'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=1025a1be75d84fef0d03a055c9b1763e',
    'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=true&language=en-US&page=1&sort_by=popularity.desc&api_key=1025a1be75d84fef0d03a055c9b1763e',
    'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=Documentary&api_key=1025a1be75d84fef0d03a055c9b1763e',
    'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=Animation&api_key=1025a1be75d84fef0d03a055c9b1763e'

];

window.addEventListener('DOMContentLoaded', ()=>{
    const peticiones = urls.map(url =>fetch(url)); 
    Promise.all(peticiones).then(value=>{
        return Promise.all(value.map(vs=>vs.json()));
     }).then(catalogo=>{
        const [catalogo1,catalogo2,catalogo3,catalogo4] = catalogo;  
        //Seccion 1
        const peliculas = document.getElementById('pelicula');
        catalogo1.results.forEach(pelicula => {
            const article = document.createElement('article');
            article.classList.add('pelicula');
            const img = document.createElement('img');
            img.src ='https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
            article.append(img);
            peliculas.append(article);
        });
        
        //Seccion 2
        const series = document.getElementById('serie');
        catalogo2.results.forEach(serie => {
            const article = document.createElement('article');
            article.classList.add('serie');
            const img = document.createElement('img');
            img.src ='https://image.tmdb.org/t/p/original/'+serie.poster_path;
            article.append(img);
            series.append(article);
        });
    
        //Seccion 3
        const documentales = document.getElementById('documental');
        catalogo3.results.forEach(documental => {
            const article = document.createElement('article');
            article.classList.add('documental');
            const img = document.createElement('img');
            img.src ='https://image.tmdb.org/t/p/original/'+documental.poster_path;
            article.append(img);
            documentales.append(article);
        });
    
          
        //Seccion 4
        const animes = document.getElementById('anime');
        catalogo4.results.forEach(anime => {
            const article = document.createElement('article');
            article.classList.add('anime');
            const img = document.createElement('img');
            img.src ='https://image.tmdb.org/t/p/original/'+anime.poster_path;
            article.append(img);
            animes.append(article);
        });
    

    }); 
 });
    

