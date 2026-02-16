const topProductsShow = async () => {
  const url = "https://fakestoreapi.com/products";
  const allProducts = await fetch(url);
  const res = await allProducts.json();

  const showProducts = document.getElementById("tendingProducts");
  showProducts.innerHTML = "";
  const showTopThree = res
    .filter((product) => product.rating.rate >= 4.7)
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  showTopThree.forEach((topProducts) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <div class="card bg-base-100  gap-10 shadow-sm space-x-20 md:w-84">
        <figure class="flex h-96  bg-gray-500 w-full items-center justify-center"> 
            <img class="h-60 "  src="${topProducts.image}" alt="Shoes" />
        </figure>
        <div class="card-body ">
            <div class="flex flex-row justify-between">
                <h1 class=" bg-gray-300 p-1 text-sm rounded-2xl text-blue-400">${topProducts.category} </h1> 
         <h1 class=" "><i class="fa-solid fa-star text-yellow-400"></i>${topProducts.rating.rate}(${topProducts.rating.count})</h1>
      
            </div>
            
            <p class="font-semibold text-xl ">${topProducts.title.slice(0, 20)}...</p>
            <P class="text-lg font-bold "><i class="fa-solid fa-dollar-sign"></i> <span class="">${topProducts.price}</span> </P>
            <div class="card-actions justify-between">
                <button onclick="detailsProduct(${topProducts.id})"   class="flex flex-row p-2 bg-white text-gray-500 btn rounded-lg gap-3 justify-between"><i class="fa-regular fa-eye"></i>Details</button>
                <button onclick="addToCart(${topProducts.id})" class="flex flex-row p-2 btn  bg-blue-500 rounded-lg gap-5 justify-between"><i class="fa-solid fa-cart-shopping mt-1"></i>Add</button>
            </div>
        </div>
    </div>
    `;
    showProducts.append(newDiv);
  });
};



const detailsProduct = async (id) => {
  console.log(id);
  const showData = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await showData.json();
  topDetailsProduct(data);
};

const topDetailsProduct = (product) => {
  const showTopDetails = document.getElementById("modalDetails");
  showTopDetails.innerHTML = `<div>
    <h1 class="font-semibold text-2xl  mb-4">${product.title}</h1>
     <h1 class="text-xl font-sm p-1">${product.description}</h1>
      <div class="flex flex-row justify-between mt-3 space-y-2">
     <P class="text-lg font-bold "><i class="fa-solid fa-dollar-sign"></i> <span class="">${product.price}</span> </P>
    <h1 class=" "><i class="fa-solid fa-star text-yellow-400"></i>${product.rating.rate}(${product.rating.count})</h1>
    </div>
    <div class="flex flex-row justify-between mt-2 space-y-2">
    <button class="btn bg-blue-400 p-3 rounded-lg mt-2">Buy Now</button>
    <button class="btn bg-blue-400 p-3 rounded-lg mt-2">Add to Cart</button>
      </div>
    </div>`;
  document.getElementById("myModal").showModal();
};
topProductsShow();

const addToCart = (productId) => {
  count++;
  document.getElementById("cartCount").innerText = count;
  
};
