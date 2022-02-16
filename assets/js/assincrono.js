const baseUrl = 'https://thatcopy.pw/catapi/rest/';
const btngat =  document.getElementById('change-cat');
const imgat = document.getElementById('cat')

const pegaGa = async () => {
    try{
        const dados = await fetch(baseUrl);
        const aux=  await dados.json();
        return aux.webpurl;
    }catch(e){
        console.log(e.message);
    }
}
const carregaImg = async () => {
    imgat.src = await pegaGa();
}

btngat.addEventListener('click', carregaImg);

carregaImg();