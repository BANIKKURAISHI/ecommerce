
const categorylist = async () => {
    
  const categotyButtonList = document.getElementById("categotyButtonList");
  categotyButtonList.innerHTML = "";
  const url = "https://fakestoreapi.com/products/categories";
  const categoriData = await fetch(url);
  const categoryName = await categoriData.json();
  categoryName?.forEach((category) => {
    const createButton = document.createElement("button");
    createButton.textContent = category;
    createButton.className = `btn mr-10 `
    createButton.addEventListener("click", () => {
      categotyDetails(category);
    });
    // createButton.innerHTML=`<button onclick="categotyDetails("${category}")"  class="btn mr-10" >${category}</button>`
    categotyButtonList.append(createButton);
  });
};





// !!!!! Category details
const categotyDetails = async (category) => {
  const categoryUrl = `https://fakestoreapi.com/products/category/${category}`;
  const categoryFetch = await fetch(categoryUrl);
  const categoryData = await categoryFetch.json();
  categoryShow(categoryData);
};
const categoryShow = (categories) => {
  const showingCategory = document.getElementById("showProducts");
  showingCategory.innerHTML = "";

  categories.forEach((cat) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="card bg-base-100  gap-10  shadow-sm space-x-20 md:w-84">
        <figure class="flex h-96  bg-gray-500 w-full items-center justify-center"> 
            <img class="h-60 "  src="${cat.image}" alt="Shoes" />
        </figure>
        <div class="card-body ">
            <div class="flex flex-row justify-between">
                <h1 class=" bg-gray-300 p-1 text-sm rounded-2xl text-blue-400">${cat.category} </h1> 
         <h1 class=" "><i class="fa-solid fa-star text-yellow-400"></i>${cat.rating.rate}(${cat.rating.count})</h1>
      
            </div>
            
            <p class="font-semibold text-xl ">${cat.title.slice(0, 20)}...</p>
            <P class="text-lg font-bold "><i class="fa-solid fa-dollar-sign"></i> <span class="">${cat.price}</span> </P>
            <div class="card-actions justify-between">
                <button onclick="detailsProduct(${cat.id})"   class="flex flex-row p-2 bg-white text-gray-500 btn rounded-lg gap-3 justify-between"><i class="fa-regular fa-eye"></i>Details</button>
                <button onclick="addToCart2(${cat.id})"  class="flex flex-row p-2 btn  bg-blue-500 rounded-lg gap-5 justify-between"><i class="fa-solid fa-cart-shopping mt-1"></i>Add</button>
            </div>
        </div>
    </div>
    `;
    showingCategory.appendChild(newDiv);
  });
};
const addToCart2 = (productId) => {
  count++;
  document.getElementById("cartCount").innerText = count;
  
};

categorylist();   
