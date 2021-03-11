
async function getIpsum(qtd){
  const response = await fetch('http://192.168.0.105:3000/api/',
   {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({'num': qtd})}
   );
  return await response.json();
} 
const container = document.querySelector('div.container');
document.querySelector('button').addEventListener('click', event =>{
  getIpsum(25).then(res => {
    console.log(res);
    container.innerText = res.text})
})
