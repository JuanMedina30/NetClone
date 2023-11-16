const urls=[
    'https://api.themoviedb.org/3/1025a1be75d84fef0d03a055c9b1763e/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDI1YTFiZTc1ZDg0ZmVmMGQwM2EwNTVjOWIxNzYzZSIsInN1YiI6IjY1NTU0ZTRkZDRmZTA0MDEzOTgxZThhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ok0zZJ-amau5IpvHvijJNCnMAAVqFVYKl8lwgEz2El8/rated/movies'
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
    

