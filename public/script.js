document.getElementById('btn-action').addEventListener('click', () => {
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = '¡El JavaScript está funcionando correctamente en el contenedor!';
    statusMessage.style.color = 'green';
    console.log("Validación de frontend exitosa.");
});