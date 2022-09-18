export const AlertError = {
    popupError: document.querySelector('.alert-error'),
    open() {
        AlertError.popupError.classList.add('open')
    },
    close(){
        AlertError.popupError.classList.remove('open')
    }
}