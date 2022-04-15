//Selectores html
const txtMessage = document.getElementById('txtMessage')
const btnEnviar = document.getElementById('btnEnviar')



const socket = io();

socket.on('connect', () => {
    // console.log('connectado', socket.id);
    document.getElementById('lblOnline').style.display = '';
    document.getElementById('lblOffline').style.display = 'none';
})

socket.on("disconnect", () => {
    // console.log('desconectado', socket.id); // undefined
    document.getElementById('lblOnline').style.display = 'none';
    document.getElementById('lblOffline').style.display = '';
});

btnEnviar.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        msg: txtMessage.value,
        id: '1'
    };
    if (message) {
        socket.emit('enviar-mensaje', payload, (id) => {
            console.log('desde sv: ' + id);
        })
    }
})

socket.on("enviar-respuesta", respuesta => {
    console.log(respuesta); // undefined
});