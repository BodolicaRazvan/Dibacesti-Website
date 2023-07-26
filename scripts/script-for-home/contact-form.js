const submitFromContact = document.querySelector('#submit-form');
submitFromContact.addEventListener('click', (e) =>{
    document.querySelector('#input-textarea-contact').value= '';
    document.querySelector('#input-email-contact').value= '';
    document.querySelector('#input-nume-contact').value= '';
});