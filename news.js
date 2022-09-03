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
        <a onclick=forNews() href="#" class="hover:bg-sky-300 p-4 rounded">${newCatagories.category_name}</a>
        `;
        newsCata.appendChild(li);

    });
}

const forNews =async()=>{
    const r= await fetch(" https://openapi.programming-hero.com/api/news/category/01");
    const d= await r.json();
    console.log(d);
    displayNewsDetails(d.data);
}
const displayNewsDetails=Details=>{
    const newsDe= document.getElementById('news-details');
    Details.forEach(newDetails =>{
        // console.log(newCatagories);
        const div =document.createElement('div');
        div.innerHTML=`
        <div class="ml-5 w-80 d-flex>
        <div class="h-48 w-full  rounded overflow-hidden" >
        <image src="${newDetails.image_url}">
        </div>
           <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
            <div class="text-gray-900 font-bold text-xl mb-2">${newDetails.title}</div>
            <p class="text-gray-700 text-base">${newDetails.details}</p>
          </div>
          <div>
            <img class="ml-5 w-10 h-10 rounded-full" src="${newDetails.author.img}">
            <div class="ml-5 text-sm">
              <p class="text-gray-900 leading-none">${newDetails.author.name}</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
            </div>
        </div>
        `;
        newsDe.appendChild(div);

    });
}
forNews();
loadNews();
