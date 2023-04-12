let successModal = document.querySelector('.success-modal')
let modal = document.querySelector('.modal')
let modalBtn = document.querySelector('.modal-btn')




$('#modal-form').on('submit', function (event) {
    event.stopPropagation()
    event.preventDefault()

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')

    $('.submit', form).val('Отправка...')
    $('input, textarea', form).attr('disabled', '')

    data.append('Имя', $('[name="name"]', form).val())
    data.append('Телефон', $('[name="phone"]', form).val())
    data.append('Курс', $('[name="select"]', form).val())
    data.append('Комментарий', $('[name="comment"]', form).val())
  

    files.each(function (key, file) {
        let cont = file.files
        if (cont) {
            $.each(cont, function (key, value) {
                data.append(key, value)
            })
        }
    })

    $.ajax({
        url: 'telegram.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function () {
            let myXhr = $.ajaxSettings.xhr()

            if (myXhr.upload) {
                myXhr.upload.addEventListener(
                    'progress',
                    function (e) {
                        if (e.lengthComputable) {
                            let percentage = (e.loaded / e.total) * 100
                            percentage = percentage.toFixed(0)
                            $('.submit', form).html(percentage + '%')
                        }
                    },
                    false
                )
            }

            return myXhr
        },
        error: function (jqXHR, textStatus) {
        },
        complete: function () {
            modal.classList.remove('open')
            successModal.classList.add('open')
            form.reset()
            
        },
    })

    return false
})
