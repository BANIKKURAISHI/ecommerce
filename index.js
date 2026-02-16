const url = "https://fakestoreapi.com/products";

let count = 0

const allProdocutsLoad = async () => {
  const allProducts = await fetch(url);
  const res = await allProducts.json();
  allProductsShow(res);

 
};

const removeWhy = () => {
  document.getElementById("why").classList.add("hidden");
  document.getElementById("banner").classList.add("hidden");
  document.getElementById("trending").classList.add("hidden");
  document.getElementById("categoryButtonHidden").classList.remove("hidden");
};
//!!!!!! show details
const showDetails = async (id) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const show = await data.json();
  showDetailsButton(show);
};
const showDetailsButton = (products) => {
  console.log(products);
  const modalDetails = document.getElementById("modalDetails");
  modalDetails.innerHTML = `<div>
    <h1 class="font-semibold text-2xl  mb-4">${products.title}</h1>
    <h1 class="text-xl font-sm p-1">${products.description}</h1>
    <div class="flex flex-row justify-between mt-3 space-y-2">
     <P class="text-lg font-bold "><i class="fa-solid fa-dollar-sign"></i> <span class="">${products.price}</span> </P>
    <h1 class=" "><i class="fa-solid fa-star text-yellow-400"></i>${products.rating.rate}(${products.rating.count})</h1>
    </div>
    <div class="flex flex-row justify-between mt-2 space-y-2">
    <button class="btn bg-blue-400 p-3 rounded-lg mt-2">Buy Now</button>
    <button class="btn bg-blue-400 p-3 rounded-lg mt-2">Add to Cart</button>
      </div>
    </div>`;
  console.log(modalDetails);
  document.getElementById("myModal").showModal();
};

const cartCountButton = (productCount) => {
  count++;
  document.getElementById("cartCount").innerText = count;

};

const allProductsShow = (allProducts) => {
  // console.log(allProducts)

  removeWhy();

  const showProducts = document.getElementById("showProducts");
  showProducts.innerHTML = " ";
  allProducts.map((allProduct) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
    
    <div class="card bg-base-100  gap-10 h-[400] shadow-sm space-x-20 md:w-84">
        <figure class="flex h-96  bg-gray-500 w-full items-center justify-center"> 
            <img class="h-60 "  src="${allProduct.image}" alt="Shoes" />
        </figure>
        <div class="card-body ">
            <div class="flex flex-row justify-between">
                <h1 class=" bg-gray-300 p-1 text-sm rounded-2xl text-blue-400">${allProduct.category} </h1> 
         <h1 class=" "><i class="fa-solid fa-star text-yellow-400"></i>${allProduct.rating.rate}(${allProduct.rating.count})</h1>
      
            </div>
            
            <p class="font-semibold text-xl ">${allProduct.title.slice(0, 20)}...</p>
            <P class="text-lg font-bold "><i class="fa-solid fa-dollar-sign"></i> <span class="">${allProduct.price}</span> </P>
            <div class="card-actions justify-between">
                <button onclick="showDetails(${allProduct.id})" class="flex flex-row p-2 bg-white text-gray-500 btn rounded-lg gap-3 justify-between"><i class="fa-regular fa-eye"></i>Details</button>
                <button onclick="cartCountButton(${allProduct.id})"  id="add-to-cart" class="flex flex-row  p-2 btn  bg-blue-500 rounded-lg gap-5 justify-between"><i class="fa-solid fa-cart-shopping mt-1"></i>Add</button>
            </div>
        </div>
    </div>
    `;
    showProducts.appendChild(newDiv);
  });
};
