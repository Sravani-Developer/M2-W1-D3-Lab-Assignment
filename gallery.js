const openListTag=n=>`<li id="photo${n}" tabindex="0">`;
const closeListTag=`</li>`;
const openCaptionTag=`<div class="caption">`;
const closeCaptionTag=`</div>`;
const openDescTag=`<div class="description" role="button" tabindex="0" aria-label="Show info">`;
const closeDescTag=`</div>`;
const closeText="Click This To Close";

const images=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg","images/img9.jpg","images/img10.jpg"];
const captionTexts=["Golden Beach Sunset","City Lights Skyline","Latte Heart Art","Eiffel Sunrise Glow","Majestic Lion Rest","Neon Light Trails","Cozy Coffee Corner","Cherry Blossoms Temple","Butterfly in Bloom","Taco Street Vibes"];
const descTexts=["Sunset over a beach with soft waves.","Skyscrapers at night with glowing lights.","Colorful geometric abstract shapes.","Eiffel Tower at sunrise.","Lion resting on grassland.","Neon light trails on black background.","Cozy coffee shop corner with books and lights.","Japanese cherry blossoms with a temple.","Butterfly sitting on a flower.","Street food truck serving tacos."];
const infoTexts=[
  "A golden-hour shoreline scene where gentle waves meet warm sand—perfect for unwinding.",
  "A bustling metropolitan skyline shimmering with reflections and neon accents.",
  "A cozy latte with heart art, captured in soft café lighting and bokeh.",
  "A pastel sunrise washing over the Eiffel Tower and Parisian rooftops.",
  "A serene, majestic lion resting in tall grass under a soft afternoon glow.",
  "Energetic trails of light streaming through a night city, full of motion.",
  "A quiet reading nook with warm light, coffee aroma, and stacked books.",
  "Blossom-lined paths leading to a tranquil temple in early spring.",
  "A delicate butterfly perched on petals, wings spread to show color.",
  "A friendly taco truck scene bursting with flavor and street-life vibes."
];

const galleryEl=document.getElementById("gallery");
let html="";
for(let i=0;i<images.length;i++){
  const n=i+1;
  const img=`<div class="media"><img src="${images[i]}" alt="${captionTexts[i]}"></div>`;
  const caption=`${openCaptionTag}${captionTexts[i]}${closeCaptionTag}`;
  const desc=`${openDescTag}${descTexts[i]}${closeDescTag}`;
  html+=openListTag(n)+img+caption+desc+closeListTag
}
galleryEl.innerHTML=html;

const infoBox=document.getElementById("infoBox");
const infoTitle=document.getElementById("infoTitle");
const infoText=document.getElementById("infoText");
const closeInfo=document.getElementById("closeInfo");
if(closeInfo){
  closeInfo.textContent=closeText;
  closeInfo.setAttribute("role","button");
  closeInfo.setAttribute("aria-label",closeText);
}

function openInfo(title,text){
  infoTitle.textContent=title;
  infoText.textContent=text;
  infoBox.classList.add("show");
}
function hideInfo(){
  infoBox.classList.remove("show");
}

if(closeInfo){closeInfo.addEventListener("click",e=>{e.preventDefault();hideInfo()})}
if(infoBox){infoBox.addEventListener("click",e=>{if(e.target===infoBox)hideInfo()})}
document.addEventListener("keydown",e=>{if(e.key==="Escape")hideInfo()})

document.querySelectorAll(".description").forEach((el,i)=>{
  el.addEventListener("click",()=>openInfo(captionTexts[i],infoTexts[i]));
  el.addEventListener("keydown",e=>{
    if(e.key==="Enter"||e.key===" "){
      e.preventDefault();
      openInfo(captionTexts[i],infoTexts[i]);
    }
  });
});
