const axios=require ('axios')
const url = 'https://apisimpsons.fly.dev/api/personajes'


async function peticion(){
    const { data } = await axios.get(url)
    data.docs.forEach(element => {
        console.log(element.Nombre);
    });
}
peticion()