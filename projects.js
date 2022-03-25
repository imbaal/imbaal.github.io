const scriptURL = 'https://script.google.com/macros/s/AKfycbz1FAaz1YN1KEzf4paDxIV4tG4AhTq5kLMCp29xZUpwWEv62T5DASacZxDU7P4pgud1/exec'
    const form = document.forms['submit-to-google-sheet'];
    const btnkirim = document.querySelector('.btn-kirim');
    const btnlod = document.querySelector('.btn-load');
    const maalert = document.querySelector('.alert')

  
    form.addEventListener('submit', e => {
      e.preventDefault();
      btnlod.classList.toggle('d-none')
      btnkirim.classList.toggle('d-none')
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log('Success!', response);
          btnlod.classList.toggle('d-none')
      btnkirim.classList.toggle('d-none')
      maalert.classList.toggle('d-none')
      document
      form.reset()
          
        })
        .catch(error => console.error('Error!', error.message))
    })