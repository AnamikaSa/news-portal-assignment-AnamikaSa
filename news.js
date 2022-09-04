const loadNews = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  fetch(url)
      .then(res => res.json())
      .then(data => displayCatagories(data.data.news_category))
      .catch(error => console.log(error))
}


// for All Categories
const displayCatagories=news=>{
    const newsCata= document.getElementById('news-catagories');
    
    news.forEach(newCatagories =>{
        // console.log(newCatagories);
        const li =document.createElement('li');
        li.innerHTML=`
        <a class=" p-2 rounded text-decoration-none list-group-item list-group-item-action list-group-item-primary" herf="#" style=" cursor:pointer;"
        onclick="forNewsOfAll('${newCatagories.category_id}') , spin(true)">${newCatagories.category_name}</a>
        `;
        newsCata.appendChild(li);
        

    });
}

// for indivual news
const forNewsOfAll = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(url)
      .then(res => res.json())
      .then(data => displayNewsDetails(data.data))
      .catch(error => console.log(error))
}


const displayNewsDetails=CategoryDetails=>{

  // Total items
  const itemLength=document.getElementById('items_length')
  itemLength.value=`${CategoryDetails.length} items found on this category`
  if(CategoryDetails.length===0){
    // CategoryDetails.innerHTML="";
    // return "No data";
    alert("No data Found");
  }


    const newsDe= document.getElementById('news-details');
    newsDe.textContent='';
    CategoryDetails.forEach(newDetails =>{
        // console.log(newDetails.length);
        // if(newDetails.data.length)


        // News added in innerText 
        const div =document.createElement('div');
        div.innerHTML=`
        <div class="row" onclick="loadDetails('${newDetails._id}')">
            <div class=" mb-5 pt-3 pb-3 d-flex shadow">
                <div class="col-md-3 col-5">
                    <img src="${newDetails.thumbnail_url}" class="img-fluid h-100">
                </div>
                <div class="col-md-9 col-7 ps-4">
                    <div class="card-body p-0 d-flex flex-column">
                        <div class="mb-5">
                        <h5 class="card-title">${newDetails.title}</h5>
                        <p class="card-text  mb-3" id="para">${newDetails.details}</p> 
                        </div>
                        <div class="mt-5 d-flex align-items-center justify-content-between justify-content-center">
                            <div class="d-flex align-items-center justify-content-center">
                                <div>
                                    <img  style="height: 70px;" class ="img-fluid mh-100 rounded-circle" src="${newDetails.author.img}">
                                    <p class="text-capitalize">${newDetails.author.name ? newDetails.author.name : 'Unknown'}</p>
                                    <p>10th Jan,2022 </p>
                                </div>    
                            </div>
                            <div class="ps-3 pe-3">
                                <i class="fa-regular fa-eye"></i>
                                <p>${newDetails.total_view ? newDetails.total_view : '0'}</p>
                            </div>
                            <div>
                            <button class="btn btn-primary p-2" data-bs-toggle="modal"
                            data-bs-target="#detailOnModal">Show Details-> </button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        `
        newsDe.appendChild(div);

    });
    spin(false);
}


// diplay korar jonno news gulo
const loadDetails = (_id)=>{
  const url = `https://openapi.programming-hero.com/api/news/${_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
        .catch(error => console.log(error))
}


const displayDetails = n =>{
  n.forEach(newDetails=>{
    const modalTitle = document.getElementById('D');
     modalTitle.innerText = `${newDetails.title}`
  const newsDetailsModals = document.getElementById('news-details_modals');
  // console.log(phone.mainFeatures.sensors[0]);
  newsDetailsModals.innerHTML=`
    <p> ${newDetails.title} </p>
      <p> ${newDetails.details} </p>
  `
})
}

// Spinner
const spin= isLoading =>{
  const spinnerLoad=document.getElementById('spinner');
  if(isLoading){
    spinnerLoad.classList.remove('d-none');
  }
  else{
    spinnerLoad.classList.add('d-none');
  }
}
// forNews();
loadNews();