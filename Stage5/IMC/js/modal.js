//construindo um objeto para receber, variáveis e funções do modal.

export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },

   close() {
        Modal.wrapper.classList.remove('open')
   }
}

Modal.btnClose.addEventListener('click', function(){
    Modal.close()
})

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if (event.key == "Escape" || event.key == "x") {
        Modal.close()
    }
    
}