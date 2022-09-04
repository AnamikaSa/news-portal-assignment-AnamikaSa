const loadNews = async() => {
    const r= await fetch(`https://openapi.programming-hero.com/api/news/categories`);
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
        <a onclick=forNews() href="#" class="hover:bg-sky-300 p-2 rounded">${newCatagories.category_name}</a>
        `;
        newsCata.appendChild(li);
        

    });
}

const forNews =async()=>{
    const r= await fetch(`https://openapi.programming-hero.com/api/news/category/04`);
    const d= await r.json();
    console.log(d);
    displayNewsDetails(d.data);
}
const displayNewsDetails=Details=>{
    const newsDe= document.getElementById('news-details');
    newsDe.textContent='';
    Details.forEach(newDetails =>{
        // console.log(newDetails.length);
        // if(newDetails.data.length)
        const div =document.createElement('div');
        div.innerHTML=`
        <div class="  mt-14 lg:max-w-full lg:flex">
        <div class=" lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <image src="${newDetails.image_url}" class="h-64"></image>
        </div>
        <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">${newDetails.title}</div>
            <p id="para" class="text-gray-700 text-base">${newDetails.details}</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full" src="${newDetails.author.img}" >
            <div class="text-sm mt-2">
              <p class="text-gray-900 leading-none pl-3">${newDetails.author.name}</p>
              <p class="pl-3">10th Jan, 2022</p>
            </div>
            
            <div class="mx-auto flex">
            <div class="flex ml-20">
            <i class="fa-solid fa-eye mt-3"></i>
            <p class="mt-2 ml-2">${newDetails.total_view}</p>
            </div>
            <div>
            <button type="button" onclick="loadDetails('${newDetails.details}')" href="#" class="bg-sky-400 text-gray-900 p-3 rounded ml-72" data-bs-toggle="modal" data-bs-target="#D">Show Details</button>
            </div>
            </div>
          </div>
        </div>
      </div>
        `;
        newsDe.appendChild(div);

    });
}

const loadDetails = async ()=>{
  const url =`https://openapi.programming-hero.com/api/news/category/04`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
}

const displayDetails = n =>{
  const modalTitle = document.getElementById('D');
  modalTitle.innerText = newDetails.title;
  n.forEach(newDetails=>{
  const newsDetailsModals = document.getElementById('news-details_modals');
  // console.log(phone.mainFeatures.sensors[0]);
  newsDetailsModals.innerHTML=`
      <p> ${newDetails.details} </p>
  `
});
}
forNews();
loadNews();