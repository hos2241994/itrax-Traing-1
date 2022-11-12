const gallery = [
  { id: 1, img: "../img/gallery/01.jpg.webp" },
  { id: 2, img: "../img/gallery/02.jpg.webp" },
  { id: 3, img: "../img/gallery/03.jpg.webp" },
  { id: 4, img: "../img/gallery/04.jpg.webp" },
  { id: 5, img: "../img/gallery/05.jpg.webp" },
  { id: 6, img: "../img/gallery/06.jpg.webp" },
  { id: 7, img: "../img/gallery/07.jpg.webp" },
  { id: 8, img: "../img/gallery/08.jpg.webp" },
  { id: 9, img: "../img/gallery/09.jpg.webp" },
];

//Draw gallery images
const galleryContainer = document.querySelector(".gallery-items");
galleryContainer.innerHTML = gallery
  .map((item) => {
    return `
   <div id=${item.id} class="gallery-item">
            <div class="gallery-item-overlay">
              <a data-id=${item.id} href="#"
                ><i class="fa-solid fa-up-right-and-down-left-from-center"></i
              ></a>
            </div>
            <img src=${item.img} alt="" />
          </div>`;
  })
  .join("");

//Close OverLay
const closeBtn = document.querySelector(".close-icon");

closeBtn.addEventListener("click", () => {
  overLayContainer.classList.remove("show");
});

//Navigate between gallery images
const nextBtn = document.querySelector(".rightBtn");
const PrevBtn = document.querySelector(".leftBtn");
const targetImg = document.querySelector(".gallery-overlay img");
const imgLink = document.querySelectorAll(".gallery-item-overlay a");
const overLayContainer = document.querySelector(".gallery-overlay");

imgLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    overLayContainer.classList.add("show");
    targetImg.src = gallery[id - 1].img;
    targetImg.setAttribute("data-id", id);
  });
});

//Move to next image
nextBtn.addEventListener("click", () => {
  let id = parseInt(targetImg.dataset.id);
  let currentIndex = id - 1;
  let newIndex = currentIndex + 1;
  if (currentIndex === gallery.length - 1) {
    newIndex = 0;
  }
  targetImg.src = gallery[newIndex].img;
  targetImg.setAttribute("data-id", newIndex + 1);
});

//Move to prev image
PrevBtn.addEventListener("click", () => {
  let id = parseInt(targetImg.dataset.id);
  let currentIndex = id - 1;
  let newIndex = currentIndex - 1;
  if (currentIndex === 0) {
    newIndex = gallery.length - 1;
  }
  targetImg.src = gallery[newIndex].img;
  targetImg.setAttribute("data-id", newIndex + 1);
});
