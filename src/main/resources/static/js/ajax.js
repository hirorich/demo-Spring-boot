(function () {
    $('#ajax-button').click(function () {
        let url= 'http://localhost:8080/form';
        let formData = $('form').serialize();
        $.ajax({
            url: url,
            type:'POST',
            dataType: 'json',
            data : formData,
            timeout:100,
        }).done(function(data) {
            alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
            alert("error");
        })
    });
}());
