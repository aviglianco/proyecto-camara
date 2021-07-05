//import { carreras } from './data.js';

class CarreraRender extends HTMLElement{

    constructor(){
        super()
        this.root = this. attachShadow({mode: 'open'})
    }


    connectedCallback (){
        const titulo = this.getAttribute('titulo')
        const universidad = this.getAttribute('uni')
        const duracion =  this.getAttribute('duracion')
        const descripcion = this.getAttribute('descripcion')

        this.root.innerHTML += `
            <div class="card container-sm">
            <div class="card-body">
            <h2>Titulo:  ${titulo}</h2>
            <p>Universidad: ${universidad}</p>
            <p>Duracion: ${duracion}</p>
            <p>Descripcion: ${descripcion}</p>
            </div>
            </div>`
}
}



function filter(){
    const filtroUser = document.querySelector('#filtroDato').value
    console.log(filtroUser);
    //console.log(carreras.filter(carrera => carrera.duracion == filtroUser))
    
    
    const carrerasFiltro = carreras.filter(carrera => carrera.duracion == filtroUser)
    console.log(carrerasFiltro)

    const containerCarreras = document.querySelector('.carreras')
    containerCarreras.innerHTML = ''
    
    carrerasFiltro.forEach(carrera => {
        containerCarreras.innerHTML += `
        <carrera-item 
        titulo = '${carrera.titulo}'
        uni = '${carrera.universidad}'
        duracion = '${carrera.duracion}'
        descripcion = '${carrera.descripcion}'></carrera-item>
        `
    });

}

