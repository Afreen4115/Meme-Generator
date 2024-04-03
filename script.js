const generateBtn=document.querySelector('.meme-generate-btn');
const memeTitle=document.querySelector('.meme-title');
const memeImg=document.querySelector('#meme-img');
const memeAuthor=document.querySelector('.meme-author');
const URL="https://meme-api.com/gimme/wholesomememes";

const updateDetails=(url,title,author)=>{
   memeImg.setAttribute('src',url);
   memeTitle.textContent=title;
   memeAuthor.textContent=`Meme by: ${author}`;
}
const generateMeme=async()=>{
   const response=await fetch(URL);
//    console.log(response);
   const data=await response.json();
   console.log(data);
   updateDetails(data.url,data.title,data.author);
  

}
generateBtn.addEventListener('click',generateMeme);
generateMeme();
