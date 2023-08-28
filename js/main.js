/*
Primero hay que vincular este archivo js con el index.html para que tenga funcionalidad
*/

/*
Le voy a asignar a cada motivo de consulta una breve descrición
*/
let ansiedad = document.getElementById('ansiedad')
ansiedad.addEventListener('mouseover', funcionAnsiedad)

function funcionAnsiedad() {
    document.getElementById('ansiedad').innerHTML = '<p style="justify-content: center; padding: 50px">Preocupación y miedo intensos, excesivos y continuos ante situaciones cotidianas. Es posible que se produzca taquicardia, respiración agitada, sudoración y sensación de cansancio.</p>'
}

let miedo = document.getElementById('miedo')
miedo.addEventListener('mouseover', funcionMiedo)

function funcionMiedo() {
    document.getElementById('miedo').innerHTML = '<p style="justify-content: center; padding: 50px">Sensación desagradable provocada por la percepción de peligro, real o imaginario.</p>'
}

let angustia = document.getElementById('angustia')
angustia.addEventListener('mouseover', funcionAngustia)

function funcionAngustia() {
    document.getElementById('angustia').innerHTML = '<p style="justify-content: center; padding: 50px">Respuesta de estrés negativo, que a menudo involucra afecto negativo y reactividad fisiológica: un tipo de estrés que resulta de sentirse abrumado por demandas, pérdidas o amenazas percibidas.</p>'
}

let depresion = document.getElementById('depresion')
depresion.addEventListener('mouseover', funcionDepresion)

function funcionDepresion() {
    document.getElementById('depresion').innerHTML = '<p style="justify-content: center; padding: 50px">Caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento.</p>'
}

let duelo = document.getElementById('duelo')
duelo.addEventListener('mouseover', funcionDuelo)

function funcionDuelo() {
    document.getElementById('duelo').innerHTML = '<p style="justify-content: center; padding: 50px">El duelo es el proceso de adaptación emocional que sigue a cualquier pérdida (pérdida de un empleo, pérdida de un ser querido, pérdida de una relación, etc.).</p>'
}

let alim = document.getElementById('alim')
alim.addEventListener('mouseover', funcionTralim)

function funcionTralim() {
    document.getElementById('alim').innerHTML = '<p style="justify-content: center; padding: 50px">Engloban enfermedades crónicas y progresivas que, se manifiestan a través de la conducta alimentaria, pero consisten en una gama compleja de síntomas entre ellos una alteración o distorsión de la auto-imagen corporal</p>'
}

let rel = document.getElementById('rel')
rel.addEventListener('mouseover', funcionRel)

function funcionRel() {
    document.getElementById('rel').innerHTML = '<p style="justify-content: center; padding: 50px">Comprenden desde la timidez, la falta de habilidades y competencias para encontrar amigos, para mantener buenas relaciones, la ansiedad social o la propia tendencia al aislamiento debido al miedo al rechazo.</p>'
}

let obsesiones = document.getElementById('obsesiones')
obsesiones.addEventListener('mouseover', funcionObse)

function funcionObse() {
    document.getElementById('obsesiones').innerHTML = '<p style="justify-content: center; padding: 50px">Pensamientos, impulsos o imágenes mentales que se repiten y causan ansiedad.</p>'
}

let somatiz = document.getElementById('somatiz')
somatiz.addEventListener('mouseover', funcionSom)

function funcionSom() {
    document.getElementById('somatiz').innerHTML = '<p style="justify-content: center; padding: 50px">Es un diagnóstico psiquiátrico aplicado a pacientes quienes se quejan crónica y persistentemente de varios síntomas físicos que no tienen un origen físico identificable.</p>'
}

let inh = document.getElementById('inh')
inh.addEventListener('mouseover', funcionInh)

function funcionInh() {
    document.getElementById('inh').innerHTML = '<p style="justify-content: center; padding: 50px">Vergüenza, miedo o freno que impide a una persona actuar de acuerdo con sus sentimientos, deseos o capacidades.</p>'
}

let enojo = document.getElementById('enojo')
enojo.addEventListener('mouseover', funcionEnojo)

function funcionEnojo() {
    document.getElementById('enojo').innerHTML = '<p style="justify-content: center; padding: 50px">Sentimiento de irritación o molestia más o menos violenta, que surge ante un estímulo o una situación interna o externa. Este tipo de sensación puede estar focalizado en un referente o estímulo determinado, o expresado de manera general e inespecífica</p>'
}

let crisis = document.getElementById('crisis')
crisis.addEventListener('mouseover', funcionCrisis)

function funcionCrisis() {
    document.getElementById('crisis').innerHTML = '<p style="justify-content: center; padding: 50px">Son acontecimientos que suceden y hacen que nuestra vida cambie de repente. Se caracteriza por la incapacidad de la persona para abordar situaciones particulares utilizando métodos acostumbrados para la solución de problemas.</p>'
}

// Vamos a enviar los datos, y prevenir un error para que no se envien los datos si el usuario no completa el formulario
let formulario = document.getElementById('form')
formulario.addEventListener('submit', enviarFormulario)
function enviarFormulario(e) {
    e.preventDefault()
    console.log('Formulario enviado')
}

/*
Voy a crear una alerta con sweet alert. Primero voy a vincular esta librería a travésde CDN en mi index.html
Luego voy a seleccionar una alerta de la documentación oficial y voy a pegarla aquí y configurarla a mi gusto
 */

const btn = document.getElementById('myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Gracias por tu mensaje! ',
        text: 'Te responderemos a la brevedad',
        imageUrl: '../assets/img/ico-corazon.png',
        imageWidth: 300,
        //imageHeight: ,
        width: 500,
        padding: '3em',
        imageAlt: 'Custom image',
})
})
