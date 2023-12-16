document.getElementById('myButton').addEventListener('click', fun);

function fun(){
let r=document.getElementById('input').value;
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+r)
.then(response => response.json())
.then(data =>{
    console.log(data);
    let w=document.getElementById('meaning');
    let p=document.getElementById('partsofspeech');
    let c=document.getElementById('meaning2');
   let q=data[0].meanings[0].definitions[0].definition;
   w.innerHTML=q;
   p.innerHTML=data[0].meanings[0].partOfSpeech;
   c.innerHTML=data[0].meanings[0].definitions[1].definition
   

   
    
})
}
