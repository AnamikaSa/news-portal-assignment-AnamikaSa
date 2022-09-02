const loadNews = async() => {
    const r= await fetch("https://openapi.programming-hero.com/api/news/categories");
    const d= await r.json();
    // console.log(d);
    displayCatagory(d.data.news_category);
}
const displayCatagory=news=>{
    const newsCata= document.getElementById('news-catagories');
    news.forEach(newCatagories =>{
        // console.log(newCatagories);
        const li =document.createElement('li');
        li.innerHTML=`
        <a href="#" class="hover:bg-sky-300 p-4 rounded">${newCatagories.category_name}</a>
        `;
        newsCata.appendChild(li);

    });
}
loadNews();
