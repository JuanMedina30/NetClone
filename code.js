const urls=[
    'https://api.themoviedb.org/3/movie/550?api_key=1025a1be75d84fef0d03a055c9b1763e',
    'https://api.themoviedb.org/3/discover/tv?api_key=1025a1be75d84fef0d03a055c9b1763e',
    '',
    ''
];

window.addEventListener('DOMContentLoaded', ()=>{
    const peticiones = urls.map(url =>fetch(url)); 
    Promise.all(peticiones).then(values=>{
        return Promise.all(values.map(value=>value.json()));
     }).then(catalogos=>{
        const [catalogo1,catalogo2,catalogo3,catalogo4] = catalogos;  
        //Seccion 1
        const peliculas=document.getElementById('peliculas');
        catalogo1.results.forEach(peliculas => {
            const article = document.creteElement('article');
            article.classList.add('peliculas');
            const img = document.createElement('img');
            img.src = peliculas.poster_path;

        });
        

    }); 
    });
    

