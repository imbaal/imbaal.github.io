//sidebar
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

//

document.getElementById("fjproduk").addEventListener("click", ketharga);
function ketharga() {
  let totalfooter = "produk harga";
  document.getElementById("fjproduk").innerHTML = totalfooter;
}

////

document.getElementById("apiorang").addEventListener("click", getdata);
document.getElementById("nextorang").addEventListener("click", getdata);

function getdata() {
  document.getElementById("preloader").style.visibility = "visible";
  document.getElementById("tokoawal").style.visibility = "hidden";
  let content = "";
  content += '<div class="row row-cols-1 row-cols-md-2 g-4">';
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      
      for (let i = 0; i < json.length; i++) {
        content += `<div class="col">
<div class="card" style= " text-align :center; height:500px ">
<div class="card-body">
<img src="${json[i].image}"  alt="..." style="height: 200px;width: 200px; ">
  <h6 class="card-title">${json[i].title}</h6>
  <p class="card-text" style="  max-height: 100px;
  overflow-y: auto; ">${json[i].description}</p>
  <p class ="card-text">${json[i].price}</p>

</div>
<div class="d-flex  mx-auto  " >
<a onclick ="test()">
<i class='bx bx-minus icon'></i></a>
A
<a onclick ="test()">
<i class='bx bx-plus icon'></i></a>
</div>
</div>
</div>`;
      }
      
      document.getElementById("output").innerHTML = content;
      document.getElementById("preloader").style.visibility = "hidden";
      console.log(json);
    });

  // document.getElementById("gambarorang").src = `${orang[0].picture.large}`;
}

// cari berdasarkan kategori
function getcategory() {
  document.getElementById("tokoawal").style.visibility = "hidden";
  let isicategori = "";
  fetch("https://fakestoreapi.com//products/categories")
    .then((res) => res.json())
    .then((json) => {
      isicategori = `<div class="row" >`;
      for (let i = 0; i < json.length; i++) {
        isicategori += `
        <div class="col-sm-6">
        <div class="card" style ="margin-top:30px;" >
          <div class="card-body">
          
          <a onclick = "searchbycategory()" >
            <input hidden="true" type="text" value="${json[i]}">
            <h5 class="card-title">${json[i]}</h5>
            </a>
          </div>
        </div>
      </div>`;
      }
      isicategori += "</div>";

      document.getElementById("output").innerHTML = isicategori;
    });
}

// fungsi mencari berasarkan kategori

function searchbycategory() {
  console.log(jeniskategori);
  let content = '<div class="row row-cols-1 row-cols-md-2 g-4">';
  fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then((res) => res.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        content += `<div class="col">
<div class="card" style= "text-align :center; height:500px ">
<img src="${json[i].image}" class="card-img-top" alt="..." style="height: 200px;width: 200px;">
<div class="card-body">
  <h5 class="card-title">${json[i].title}</h5>
  <p class="card-text">${json[i].description}</p>
  <p class ="card-text">${json[i].price}</p>

</div>

</div>
</div>`;
      }
      document.getElementById("output").innerHTML = content;

      console.log(json);
    });
}


function test(){
  console.log('mantap')
}