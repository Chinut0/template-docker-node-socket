const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);
    
    //Disconnect event
    socket.on('disconnect', () => {
        console.log('disconected', socket.id)
    });

    //Recive msg y ejecuta el callback (3er argumento del la funcion del cliente)
    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 12345567;

        // Envia una respuesta a todos los clientes - this.io.emit
        //  this.io.emit('enviar-respuesta', { status: 'ok', ...payload })
        
        // Emite el mensaje a todos los clientes menos al que lo emite
        //  socket.broadcast.emit('enviar-respuesta', { status: 'ok', ...payload })
        
        callback(id)
    });
}

module.exports = {
    socketController
}