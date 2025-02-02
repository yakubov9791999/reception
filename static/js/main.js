// Ruxsat berilgan lotin va kiril bosh harflar, raqamlar
function PassportInputFilter(e) {
    var ew = e.which

    if (32 <= ew && ew <= 47) {
        e.preventDefault()
    } else if (58 <= ew && ew <= 64) {
        e.preventDefault()
    } else if (91 <= ew && ew <= 126) {
        $.notifyDefaults({
            type: 'danger',
            allow_dismiss: false,
        })
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
                '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
                '</svg> Faqat bosh harflar kiriting!'
        })
        e.preventDefault()
    } else if (1072 <= ew && ew <= 1105) {
        $.notifyDefaults({
            type: 'danger',
            allow_dismiss: false,
        })
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
                '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
                '</svg> Faqat bosh harflar kiriting!'
        })
        e.preventDefault()
    }
}

// Ruxsat berilgan lotin va kiril bosh harflar
function OnlyBigLetter(e) {
    var ew = e.which

    if (32 <= ew && ew <= 64) {
        e.preventDefault()
    } else if (91 <= ew && ew <= 126) {
        $.notifyDefaults({
            type: 'danger',
            allow_dismiss: false,
        })
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
                '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
                '</svg> Faqat bosh harflar kiriting!'
        })
        e.preventDefault()
    } else if (1072 <= ew && ew <= 1105) {
        $.notifyDefaults({
            type: 'danger',
            allow_dismiss: false,
        })
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
                '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
                '</svg> Faqat bosh harflar kiriting!'
        })
        e.preventDefault()
    }
}


// Ruxsat berilgan Lotin va rus bosh harflari va probel

function CustomInputFilter(e) {

    var ew = e.which

    if (33 <= ew && ew <= 64) {
        e.preventDefault()
    } else if (91 <= ew && ew <= 126) {
        $.notifyDefaults({
            type: 'danger',
            allow_dismiss: false,
        })
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
                '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
                '</svg> Faqat bosh harflar kiriting!'
        })
        e.preventDefault()
    } else if (1072 <= ew && ew <= 1105) {
        $.notifyDefaults({
            type: 'danger',
            allow_dismiss: false,
        })
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
                '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
                '</svg> Faqat bosh harflar kiriting!'
        })
        e.preventDefault()
    }
}

// Ruxsat berilgan katta va kichik lotin va kril harflar, probel

function NameInputFilter(e) {
    var ew = e.which;

    if (33 <= ew && ew <= 38)
        return false;
    if (40 <= ew && ew <= 64)
        return false;
    if (91 <= ew && ew <= 96)
        return false;
    if (123 <= ew && ew <= 126)
        return false;
    if (186 <= ew && ew <= 222)
        return false;
    return true;
}

// Inputdagi yozishlar sonini cheklaydi

function InputMaxLength() {
    var $this = $(this);
    var maxlength = $this.attr('max').length;
    var value = $this.val();
    if (value && value.length >= maxlength) {
        $this.val(value.substr(0, maxlength));
    }
}

// Enterni false qiladi

function PressEnterFalse(e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
}


function parseDate(value) {
    var date = value.split("-");
    var y = parseInt(date[0], 10),
        m = parseInt(date[1], 10),
        d = parseInt(date[2], 10);
    if (y != NaN && m != NaN && d != NaN) {
        return y
    }
    // return `${d}.${m}.${y}`

    // return new Date(y, m - 1, d);
}

// get csrftoken from cookie
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


$('#id').on('click', function () {

    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#id')[0];

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 1000
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save("To'lov.pdf");
        }, margins);


})

// suratni javascript orqali joyida ochib ko'rish'

// $('#accountStatementPhoto').on('change', function (event) {
//                 var files = event.target.files; //FileList object
//                 for (var i = 0; i < files.length; i++) {
//                     var file = files[i];
//
//                     //Only pics
//                     if (!file.type.match('image'))
//                         continue;
//                     var picReader = new FileReader();
//                     picReader.addEventListener("load", function (event) {
//                         var picFile = event.target;
//                         //  var div = document.createElement("div");
//                         $('#accountStatementPhotoPreview label').hide()
//                         $('#accountStatementThumbnail').show()
//                         $('#accountStatementRemove').show()
//                         $('#accountStatementThumbnail').attr('src', picFile.result)
//                         $('#accountStatementPhotoError').hide()
//                         // result.innerHTML = "<img style='width: 150px; height: auto' id='thumbnail' src='" + picFile.result + "'" +
//                         //   "title='Image'/><span  id='remove'>O'chirish</span>";
//                         //  result.insertBefore(div, null);
//                         $("#accountStatementRemove").click(function () {
//                             $('#accountStatementPhotoPreview label').show()
//                             $('#accountStatementThumbnail').hide()
//                             $('#accountStatementRemove').hide()
//                             $('#accountStatementPhotoError').show()
//                         });
//                     });
//                     //Read the image
//                     picReader.readAsDataURL(file);
//                 }
//             })


// var accountStatementPhoto = $('#accountStatementPhoto')[0].files[0];
//
//
// fd.append('accountStatementPhoto', accountStatementPhoto);


// html template

// < div
// className = "col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 mt-2" >
//     < div
// id = "accountStatementPhotoPreview" >
//     < label
// className = "not_copy"
// htmlFor = "accountStatementPhoto" > Xisob
// ma
// 'lumotnoma
// suratini
// yuklang < /label>
//
// <input type="file" name="photo" hidden
//        id="accountStatementPhoto" accept=".jpg, .jpeg, .png, .gif"/>
//
// <img style='width: 120px; height: auto;display: none' id='accountStatementThumbnail'
//      src="" title='Image'/>
// <span style="display: none" id='accountStatementRemove'>O'chirish</span>
// </div>
// <p id="accountStatementPhotoError"
// style="font-size: smaller; margin-top: 0; padding-top: 0; margin-bottom: 0; display: none; float: left"
// className="form-text text-danger">Xisob ma'lumotnoma surati yuklanmagan</p>
// </div>


var dateReg = /^(0?[1-9]|[12][0-9]|3[01])[./-](0?[1-9]|1[012])[./-]\d{4}$/

// $(function () {
//     $(".datepicker").datepicker({
//         dateFormat: "dd.mm.yy",
//         // minDate: '-150M',
//         // maxDate: '+5M',
//         defaultDate: '01.01.1990',
//         // value: "7/11/2011",
//         showButtonPanel: true,
//         numberOfMonths: 1,
//         // showOn: '',
//         // startDate: "-130M",
//         //endDate: "+30d",
//         //currentText: 'Today',
//         autoclose: true,
//         changeMonth: true,
//         changeYear: true,
//
//
//         //yakshanbalarni chiqarish
//         // beforeShowDay: function (date) {
//         //     var day = date.getDay();
//         //     return [(day !== 0), ''];
//         // },
//
//         onClose: function () {
//             if ($(this).val().match(dateReg)) {
//                 $(this).css("border-bottom", "2px solid green")
//             } else {
//                 $(this).css("border-bottom", "2px solid red")
//             }
//         }
//     })
//     $(".datepicker").datepicker('setDate', new Date());
// })
//
// $('.datepicker_icon').on('click', function () {
//     $(this).siblings('.datepicker').datepicker('show')
// })

// $('.datepicker').on('keypress', function (e) {
//     return false
// })

// $(document).on('keypress', '#body_type, #body_number, #chassis_number, #engine_number, #made_year,#additionality, #color, #cert_seriya, #cert_number', function (e) {
//     if (e.target.value !== '') {
//         $(e.target).css("border-bottom", "2px solid green")
//     } else {
//         $(e.target).css("border-bottom", "2px solid red")
//     }
// })

//div render to pdf

// $('#payment_render_pdf').on('click', function () {
//     var pdf = new jsPDF('p', 'pt', 'letter');
//     source = $('#render_div')[0];
//     specialElementHandlers = {
//         '#bypassme': function (element, renderer) {
//             return true
//         }
//     };
//     margins = {
//         top: 80,
//         bottom: 60,
//         left: 40,
//         width: 1000
//     };
//     pdf.fromHTML(
//         source, // HTML string or DOM elem ref.
//         margins.left, // x coord
//         margins.top, { // y coord
//             'width': margins.width, // max width of content on PDF
//             'elementHandlers': specialElementHandlers
//         },
//         function (dispose) {
//             pdf.save("To'lov.pdf");
//         }, margins);
// })


// $(window).bind('hashchange', function () {
//     if (window.location.hash === '#step-3') {
//         if ($('#step-3').data('transition') === false) {
//             window.location.hash = '#step-1'
//         }
//     } else if (window.location.hash === '#step-2') {
//         if ($('#step-2').data('transition') === false) {
//             window.location.hash = '#step-1'
//         }
//     }
// })

// Jquery validation metod

// jQuery.validator.addMethod("noSpace", function (value, element) {
//     return value == '' || value.trim().length != 0;
// }, "Iltimos, bo'sh joy qoldirmang!");
// jQuery.validator.addMethod("customEmail", function (value, element) {
//     return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
// }, "Iltimos, to'g'ri elektron pochta manzilini kiriting!");
// $.validator.addMethod("alphanumeric", function (value, element) {
//     return this.optional(element) || /^\w+$/i.test(value);
// }, "Faqat harf va raqam kiriting!");


// $("#save_car_form").validate()
//
// $("#chassis_number").rules("add", {
//     required: true,
//     messages: {
//         required: "Shassi raqami kiritilmagan!",
//     })

function tokenInvalid() {
    $.ajax({
        type: "POST",
        url: "/api/v1/user/auth/jwt/refresh/",
        data: {
            'refresh': localStorage.getItem('refresh')
        },
        success: function (res) {
            localStorage.setItem('access', res.access)
            location.reload()
        },
        error: function (err) {
            error_toast('Xatolik! Token yaroqsiz!')

            setTimeout(function () {
                window.location.href = '/user/custom-logout/'
            }, 3000)
        }
    })
}

function errorFunction() {

    $.notifyDefaults({
        type: 'danger',
        allow_dismiss: false,
        z_index: '9999'
    })
    $.notify({
        icon: 'glyphicon glyphicon-star',
        message: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>\n' +
            '  <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>\n' +
            '</svg> Xatolik yuz berdi! Sahifani yangilab qayta urinib ko\'ring'
    })
}


function process_confirm_replace_number(success_url, cancel_url, applicationId, response) {
    let input = document.createElement("input")
    if (response !== '') {
        input.value = `${response}`
    }
    input.placeholder = 'Masalan: 80979HBA'
    input.type = 'text'
    input.className = 'swal-content__input'
    swal({
        title: "Berilayotgan DRBni kiriting!",

        closeOnClickOutside: false,
        className: "",
        buttons: [
            'Bekor qilish',
            'Saqlash'
        ],
        dangerMode: false,
        content: input,

    }).then(function (given_number_val) {
        if (given_number_val) {
            if (input.value !== '') {
                swal({
                    title: "Berilayotgan qayd etish guvohnomasini kiriting!",
                    closeOnClickOutside: false,
                    className: "",
                    buttons: [
                        'Bekor qilish',
                        'Saqlash'
                    ],
                    dangerMode: false,
                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "Masalan: AAC112345785",
                            type: "text",
                        },
                    },
                }).then(function (technical_passport_val) {
                    if (technical_passport_val) {
                        if (technical_passport_val !== '') {
                            swal({
                                title: "Qayd etish guvohnomasini topshirish kunini kiriting!",
                                closeOnClickOutside: false,
                                className: "",
                                buttons: [
                                    'Bekor qilish',
                                    'Saqlash'
                                ],
                                dangerMode: false,
                                content: {
                                    element: "input",
                                    attributes: {
                                        // placeholder: "Masalan: AAC112345785",
                                        type: "date",
                                    },
                                },
                            }).then(function (given_date) {
                                if (given_date) {
                                    swal({
                                        title: "Qayd etish guvohnomasini topshirish vaqtini kiriting!",
                                        // text: "Siz haqiqatdan ham guruhini o'chirmoqchimisiz ?",
                                        // icon: "warning",
                                        closeOnClickOutside: false,
                                        className: "",
                                        buttons: [
                                            'Bekor qilish',
                                            'Saqlash'
                                        ],
                                        dangerMode: false,
                                        content: {
                                            element: "input",
                                            attributes: {
                                                placeholder: "Masalan: 15:30",
                                                type: "text",
                                            },
                                        },
                                    }).then(function (given_time) {
                                        if (given_time) {
                                            $.ajax({
                                                type: "POST",
                                                url: success_url,
                                                data: {
                                                    'application': applicationId,
                                                    'given_number': input.value,
                                                    'technical_passport': technical_passport_val,
                                                    'process': 'confirm',
                                                    'given_date': given_date,
                                                    'given_time': given_time
                                                },
                                                statusCode: {
                                                    200: function (res) {
                                                        console.log('res', res)
                                                        $.notifyDefaults({
                                                            type: 'success',
                                                            allow_dismiss: false,
                                                            animate: {
                                                                enter: 'animated fadeInRight',
                                                                exit: 'animated fadeOutRight',
                                                            },
                                                            z_index: '9999'
                                                        });
                                                        $.notify({
                                                            icon: 'glyphicon glyphicon-star',
                                                            message: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                                                                '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n' +
                                                                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\n' +
                                                                '</svg> &nbsp${applicationId}-raqamli ariza muvaffaqiyatli tasdiqlandi!`
                                                        });
                                                    },
                                                    404: function (err) {
                                                        console.log(err)
                                                        errorFunction()
                                                    }
                                                },
                                            })
                                        } else {
                                            window.location.href = cancel_url
                                        }
                                    })
                                } else {
                                    window.location.href = cancel_url
                                }
                            })
                        } else {
                            window.location.href = cancel_url
                        }
                    } else {
                        window.location.href = cancel_url
                    }
                })
            } else {
                window.location.href = cancel_url
            }
        } else {
            window.location.href = cancel_url
        }
    })
}


function process_confirm_not_replace_number(success_url, cancel_url, applicationId) {

    swal({
        title: "Berilayotgan qayd etish guvohnomasini kiriting!",
        closeOnClickOutside: false,
        className: "",
        buttons: [
            'Bekor qilish',
            'Saqlash'
        ],
        dangerMode: false,
        content: {
            element: "input",
            attributes: {
                placeholder: "Masalan: AAC112345785",
                type: "text",
            },
        },
    }).then(function (technical_passport_val) {
        if (technical_passport_val) {
            if (technical_passport_val !== '') {
                swal({
                    title: "Qayd etish guvohnomasini topshirish sanasini kiriting!",
                    closeOnClickOutside: false,
                    className: "",
                    buttons: [
                        'Bekor qilish',
                        'Saqlash'
                    ],
                    dangerMode: false,
                    content: {
                        element: "input",
                        attributes: {
                            // placeholder: "Masalan: AAC112345785",
                            type: "date",
                        },
                    },
                }).then(function (given_date) {
                    if (given_date) {
                        swal({
                            title: "Qayd etish guvohnomasini topshirish vaqtini kiriting!",
                            // text: "Siz haqiqatdan ham guruhini o'chirmoqchimisiz ?",
                            // icon: "warning",
                            closeOnClickOutside: false,
                            className: "",
                            buttons: [
                                'Bekor qilish',
                                'Saqlash'
                            ],
                            dangerMode: false,
                            content: {
                                element: "input",
                                attributes: {
                                    placeholder: "Masalan: 15:30",
                                    type: "text",
                                },
                            },
                        }).then(function (given_time) {
                            if (given_time) {
                                $.ajax({
                                    type: "POST",
                                    url: success_url,
                                    data: {
                                        'application': applicationId,
                                        'technical_passport': technical_passport_val,
                                        'process': 'confirm',
                                        'given_date': given_date,
                                        'given_time': given_time
                                    },
                                    statusCode: {
                                        200: function (res) {
                                            console.log('res', res)
                                            $.notifyDefaults({
                                                type: 'success',
                                                allow_dismiss: false,
                                                animate: {
                                                    enter: 'animated fadeInRight',
                                                    exit: 'animated fadeOutRight',
                                                },
                                                z_index: '9999'
                                            });
                                            $.notify({
                                                icon: 'glyphicon glyphicon-star',
                                                message: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                                                                '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n' +
                                                                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\n' +
                                                                '</svg> &nbsp${applicationId}-raqamli ariza muvaffaqiyatli tasdiqlandi!`
                                            });
                                        },
                                        404: function (err) {
                                            errorFunction()
                                        }
                                    },
                                })
                            } else {
                                window.location.href = cancel_url
                            }
                        })
                    } else {
                        window.location.href = cancel_url
                    }
                })
            } else {
                window.location.href = cancel_url
            }
        } else {
            window.location.href = cancel_url
        }
    })

}

function process_confirm(success_url, cancel_url, applicationId) {

    swal({
        title: "Qayd etish guvohnomasini topshirish sanasini kiriting!",
        closeOnClickOutside: false,
        className: "",
        buttons: [
            'Bekor qilish',
            'Saqlash'
        ],
        dangerMode: false,
        content: {
            element: "input",
            attributes: {
                // placeholder: "Masalan: AAC112345785",
                type: "date",
            },
        },
    }).then(function (given_date) {
        if (given_date) {
            swal({
                title: "Qayd etish guvohnomasini topshirish vaqtini kiriting!",
                // text: "Siz haqiqatdan ham guruhini o'chirmoqchimisiz ?",
                // icon: "warning",
                closeOnClickOutside: false,
                className: "",
                buttons: [
                    'Bekor qilish',
                    'Saqlash'
                ],
                dangerMode: false,
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Masalan: 15:30",
                        type: "text",
                    },
                },
            }).then(function (given_time) {
                if (given_time) {
                    $.ajax({
                        type: "POST",
                        url: success_url,
                        data: {
                            'application': applicationId,
                            'process': 'confirm',
                            'given_date': given_date,
                            'given_time': given_time
                        },
                        statusCode: {
                            200: function (res) {
                                console.log('res', res)
                                $.notifyDefaults({
                                    type: 'success',
                                    allow_dismiss: false,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight',
                                    },
                                    z_index: '9999'
                                });
                                $.notify({
                                    icon: 'glyphicon glyphicon-star',
                                    message: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                                                                '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n' +
                                                                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\n' +
                                                                '</svg> &nbsp${applicationId}-raqamli ariza muvaffaqiyatli tasdiqlandi!`
                                });
                            },
                            404: function (err) {
                                errorFunction()
                            }
                        },
                    })
                } else {
                    window.location.href = cancel_url
                }
            })
        } else {
            window.location.href = cancel_url
        }
    })


}

function process_cancel(success_url, cancel_url, applicationId) {

    swal({
        title: "Rad etish sababini kiriting",

        closeOnClickOutside: false,
        className: "",
        buttons: [
            'Bekor qilish',
            'Saqlash'
        ],
        dangerMode: false,

        content: {
            element: "input",
            attributes: {
                placeholder: "Masalan: Kiritilgan ma'lumotlarda xato va kamchiliklar mavjud",
                type: "text",
            },

        },
    }).then(function (process_sms) {
        if (process_sms) {
            $.ajax({
                type: "POST",
                url: success_url,
                data: {
                    'application': applicationId,
                    'process': 'cancel',
                    'process_sms': process_sms
                },
                statusCode: {
                    200: function (res) {
                        $.notifyDefaults({
                            type: 'danger',
                            allow_dismiss: false,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight',
                            },
                            z_index: '9999'
                        });
                        $.notify({
                            icon: 'glyphicon glyphicon-star',
                            message: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                                '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n' +
                                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\n' +
                                '</svg> &nbsp${applicationId}-raqamli ariza rad etildi!`
                        });

                        refresh_with_time(400)
                    },
                    404: function (err) {
                        errorFunction()


                    }
                },
            })
        } else {
            window.location.href = cancel_url
        }
    })
}


function process(success_url, cancel_url, applicationId) {
    /*
    swal({
        title: "Jarayon sababini kiriting",

        closeOnClickOutside: false,
        className: "",
        buttons: [
            'Bekor qilish',
            'Saqlash'
        ],
        dangerMode: false,
        content: {
            element: "input",
            attributes: {
                placeholder: "Masalan: To'lov amalga oshirilishi kutilmoqda",
                type: "text",
            },
        },
    }).then(function (process_sms) {
        if (process_sms) {
            */
    $.ajax({
        type: "POST",
        url: success_url,
        data: {
            'application': applicationId,
            'process': 'process',
            // 'process_sms': process_sms
        },
        statusCode: {
            200: function (res) {
                $.notifyDefaults({
                    type: 'warning',
                    allow_dismiss: false,
                    animate: {
                        enter: 'animated fadeInRight',
                        exit: 'animated fadeOutRight',
                    },
                    z_index: '9999'
                });
                $.notify({
                    icon: 'glyphicon glyphicon-star',
                    message: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                                '<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n' +
                                '<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>\n' +
                                '</svg> &nbsp${applicationId}-raqamli ariza jarayon holatida!`
                });

                refresh_with_time(400)
            },
            404: function (err) {
                errorFunction()

            }
        },
    })
    /*
} else {
    window.location.href = cancel_url
}
})
     */
}

function html_to_pdf(element, filename) {
    html2pdf(element, {
        margin: 1,
        filename: filename + ' #' + new Date().getTime(),
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: 'A4', orientation: 'p'}
    })
}


function success_toast(success_url) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#8ff8ac',
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        // willClose: (close) => {
        //    window.location.href = success_url
        // }
    })
    Toast.fire({
        icon: 'success',
        title: 'Muvaffaqiyatli saqlandi!'
    })
}

function edit_toast() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        background: '#8ff8ac',
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        // willClose: (close) => {
        //    window.location.href = success_url
        // }
    })
    Toast.fire({
        icon: 'success',
        title: 'Muvaffaqiyatli tahrirlandi!'
    })
}

function error_toast(text = null) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        background: '#ffa2a2',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    if (text === null) {
        Toast.fire({
            icon: 'error',
            title: 'Xatolik! Sahifani yangilab qayta urinib ko\'ring!'
        })
    } else {
        Toast.fire({
            icon: 'error',
            title: text
        })
    }

}

function addColor(url = null, select_id = null) {
    const {value: formValues} = Swal.fire({
        allowOutsideClick: false,
        showCancelButton: true,
        showLoaderOnConfirm: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonText: 'Saqlash',
        cancelButtonText: 'Bekor qilish',
        title: 'T/v rangini qo\'shish',
        html:
            '<label style="float: left; margin-bottom: 0" class="label_required" for="add_color">Rang</label>' +
            '<input style="margin-top: 4px" id="add_color" class="form-control" placeholder="Masalan: Gaz(oq)">',

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('add_color').value,

            ]
        },

    }).then(function (confirm) {

        if (confirm.isConfirmed) {
            var color = confirm.value[0]
            if (color !== '') {

                $.ajax({
                    type: 'POST',
                    url: url,
                    data: {
                        color: color,
                    },
                    statusCode: {
                        200: function (response) {
                            success_toast()
                            $(`#${select_id}`).empty().append(response)
                            let new_val = $(`#${select_id} option`).filter(function () {
                                return $(this).html() === color;
                            }).val()
                            $(`#${select_id}`).val(new_val).change();
                        },
                        400: function (error) {
                            error_toast()
                        },
                        409: function () {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                background: '#f5d696',
                                showConfirmButton: false,
                                timer: 5000,
                                timerProgressBar: false,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'warning',
                                title: `${color} ranglar ro'yhatida mavjud!`
                            })
                        }
                    },
                })

            }


        } else {
            error_toast()
        }


    })

}


function addCarModel(url = null) {
    const {value: formValues} = Swal.fire({
        allowOutsideClick: false,
        showCancelButton: true,
        showLoaderOnConfirm: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonText: 'Saqlash',
        cancelButtonText: 'Bekor qilish',
        title: 'T/v modeli qo\'shish',
        html:
            '<label style="float: left; margin-bottom: 0" class="label_required" for="title">Nomi</label>' +
            '<input style="margin-top: 4px" id="car_title" class="form-control" placeholder="Masalan: Gentra"><br>' +
            '<label style="margin-bottom: 0; width: 100%; text-align: left; display: block !important;" class="label_required"  for="is_local">Ishlab chiqaruvchi</label>' +
            '<div class="form-check" style="float: left">' +
            '<input class="form-check-input" type="radio" name="is_local" id="is_local1" value="true" checked>' +
            '<label class="form-check-label" for="is_local1">Mahalliy</label>' +
            '</div>' +
            '<div class="form-check mb-2" style="float: left; margin-left: 10px">' +
            '<input class="form-check-input" type="radio" name="is_local" id="is_local2" value="false" >' +
            '<label class="form-check-label" for="is_local2">Chet el</label>' +
            '</div>' +
            '<label style="margin-bottom: 0; width: 100%; text-align: left; float: left" class="label_required"  for="is_truck">T/v turi</label>' +
            '<div class="form-check" style="float: left">' +
            '<input class="form-check-input" type="radio" name="is_truck" id="is_truck1" value="true" checked>' +
            '<label class="form-check-label" for="is_truck1">Yuk</label>' +
            '</div>' +
            '<div class="form-check" style="float: left; margin-left: 10px">' +
            '<input class="form-check-input" type="radio" name="is_truck" id="is_truck2" value="false" >' +
            '<label class="form-check-label" for="is_truck2">Yengil</label>' +
            '</div>',

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('car_title').value,
                $('input[name=is_local]:checked').val(),
                $('input[name=is_truck]:checked').val(),
            ]
        },

    }).then(function (confirm) {

        if (confirm.isConfirmed) {
            var title = confirm.value[0],
                is_local = confirm.value[1],
                is_truck = confirm.value[2]

            if (title !== '') {
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: {
                        title: title,
                        is_local: is_local,
                        is_truck: is_truck
                    },
                    statusCode: {
                        200: function (response) {
                            success_toast()
                            $('#car').empty().append(response)
                            let new_val = $('#car option').filter(function () {
                                return $(this).html() === title;
                            }).val()

                            $("#car").val(new_val).change();
                        },
                        400: function () {
                            error_toast()
                        },
                        409: function () {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                background: '#f5d696',
                                showConfirmButton: false,
                                timer: 5000,
                                timerProgressBar: false,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })
                            Toast.fire({
                                icon: 'warning',
                                title: `${title} modellar ro'yhatida mavjud!`
                            })
                        }
                    },
                })
            } else {
                error_toast()
            }


        } else {
            error_toast()
        }
    });
}

function htmlDecode(str) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent;
}

function addAmount() {
    Swal.fire({
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        showLoaderOnConfirm: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },

        title: 'To\'lov turini tanlang!',
        html:
            '<a href="?payment_type=payme" ><img src="../../static/online/payme.png" style="border: 1px solid black; padding: 5px; border-radius: 5px" alt="payme" height="80" width="190"></a>' +
            '<a href="?payment_type=click"  ><img src="../../static/online/clickuz.png" style="margin-left: 20px;border: 1px solid black; padding: 5px; border-radius: 5px" alt="click" height="80" width="190"></a>',

        focusConfirm: false,
    })
}

function formatMoney(str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function generate_fake_data() {
    // var $fuel_type_selectize = $('#fuel_type').selectize();
    // $fuel_type_selectize[0].selectize.setValue("1");
    $('#car').select2("val", $("#car option:last").val());
    $('#made_year').val('2021-07-26')

    $('#color').val($("#color option:last").val())
    $('#color').trigger('change')

    $('#person').val($("#person option:last").val())
    $('#person').trigger('change')

    function makeStr(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    function makeNum(length) {
        var result = '';
        var numbers = '1234567890';
        var numbersLength = numbers.length;
        for (var i = 0; i < length; i++) {
            result += numbers.charAt(Math.floor(Math.random() *
                numbersLength));
        }
        return result;
    }

    $('#engine_number').val(makeStr(15))
    $('input[name="seriya"]').val(makeStr(15))
    $('#body_number').val(makeStr(15))
    $('#full_weight').val(makeNum(5))
    $('#empty_weight').val(makeNum(5))
    $('#engine_power').val(makeNum(3))
    $('#old_technical_passport').val(makeStr(8))
    $('#old_number').val(makeStr(8))
}

// function add_payment(create_url, success_url, e) {
//
//     e.preventDefault()
//     const {value: formValues} = Swal.fire({
//         allowOutsideClick: false,
//         showCancelButton: true,
//         showLoaderOnConfirm: true,
//         showClass: {
//             popup: 'animate__animated animate__fadeInDown'
//         },
//         hideClass: {
//             popup: 'animate__animated animate__fadeOutUp'
//         },
//         confirmButtonText: 'Keyingi',
//         cancelButtonText: 'Bekor qilish',
//         reverseButtons: true,
//         title: 'To\'lov summasini kiriting!',
//         html:
//             '<label style="float: left; margin-bottom: 0" class="label_required" for="amount">Summa</label>' +
//             '<input style="margin-top: 4px" id="amount" class="form-control" type="number" placeholder="Masalan: 100000">',
//
//         focusConfirm: false,
//         preConfirm: (value) => {
//             if (value) {
//                 if ($('#amount').val() == '') {
//                     Swal.showValidationMessage(
//                         'Summa kiritilmagan!'
//                     )
//                 } else if ($('#amount').val() < 5000) {
//                     Swal.showValidationMessage(
//                         'Summa kamida 5000 so\'m bo\'lishi kerak!'
//                     )
//                 } else {
//                     swal.resetValidationMessage();
//                     return [
//                         $('#amount').val()
//                     ]
//                 }
//             }
//
//             $('#amount').on('keyup', function () {
//                 if ($('#amount').val() == '') {
//                     Swal.showValidationMessage(
//                         'Summa kiritilmagan!'
//                     )
//                 } else if ($('#amount').val() < 5000) {
//                     Swal.showValidationMessage(
//                         'Summa kamida 5000 so\'m bo\'lishi kerak!'
//                     )
//                 } else {
//                     swal.resetValidationMessage();
//
//                 }
//             })
//         },
//
//     }).then(function (confirm) {
//
//         if (confirm.isConfirmed) {
//             var amount = confirm.value[0]
//
//             window.location.href = create_url + "?amount=12345".replace(/12345/, amount.toString());
//
//         } else {
//             window.location.href = success_url
//         }
//
//     })
// }


function get_regions(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: url,
            success: function (res) {
                console.log(res)
                var regions = {}

                for (const x of res) {
                    regions[x.id] = x.title
                }
                resolve(regions)
            },
            error: function (err) {
                reject(err)
                if (err.status === 401) {
                    tokenInvalid()
                }
            }
        })
    })
}

function get_sections(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: url,
            success: function (res) {
                console.log(res)
                var sections = {}

                for (const x of res) {
                    sections[x.id] = x.title
                }
                resolve(sections)
            },
            error: function (err) {
                console.log(err)
                reject(error)
            }
        })
    })
}

function htmlConvertToPlain(html) {

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || "";
}


function Counter(options) {
    var timer;
    var instance = this;
    var seconds = options.seconds || 10;
    var onUpdateStatus = options.onUpdateStatus || function () {
    };
    var onCounterEnd = options.onCounterEnd || function () {
    };
    var onCounterStart = options.onCounterStart || function () {
    };

    function decrementCounter() {
        onUpdateStatus(seconds);
        if (seconds === 0) {
            stopCounter();
            onCounterEnd();
            return;
        }
        seconds--;
    }

    function startCounter() {
        onCounterStart(seconds);
        clearInterval(timer);
        timer = 0;
        decrementCounter();
        timer = setInterval(decrementCounter, 1000);
    }


    function stopCounter() {
        clearInterval(timer);
    }

    return {
        start: function (sec) {
            seconds = sec
            startCounter();
        },
        stop: function () {
            stopCounter();
        },
        reset: function (sec) {
            seconds = sec
        },
    }
}


function getAjaxData(ajaxurl) {
    return $.ajax({
        url: ajaxurl,
        type: 'GET',
        statusCode: {
            401: function () {
                tokenInvalid()
            }
        }
    });
}

function postAjaxData(ajaxurl) {
    return $.ajax({
        url: ajaxurl,
        type: 'POST',
        statusCode: {
            401: function () {
                tokenInvalid()
            }
        }
    });
}

// function addUser() {
//     getAjaxData('/en/user/get-regions-list/').then(function (res) {
//         console.log(res)
//     })
// }


jQuery(function ($) {
    var _oldShow = $.fn.show;
    $.fn.show = function (speed, oldCallback) {
        return $(this).each(function () {
            var obj = $(this),
                newCallback = function () {
                    if ($.isFunction(oldCallback)) {
                        oldCallback.apply(obj);
                    }
                    obj.trigger('afterShow');
                };

            // you can trigger a before show if you want
            obj.trigger('beforeShow');

            // now use the old function to show the element passing the new callback
            _oldShow.apply(obj, [speed, newCallback]);
        });
    }
});
jQuery(function ($) {
    var _oldhide = $.fn.hide;
    $.fn.hide = function (speed, callback) {
        $(this).trigger('beforeHide');
        return _oldhide.apply(this, arguments);
    }
})

function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    return $(
        '<div style="' + $(state.element).data('style') + '"> ' + state.text + '</div>'
    );
}

function isDict(dict) {
    return typeof dict === "object" && !Array.isArray(dict);
}

function swal_error(err = null) {
    console.log(err)
    try {
        if (isDict(err)) {
            if (isDict(err.responseJSON)) {
                var errorKey
                var errorText
                var keys = Object.keys(err.responseJSON);
                keys.forEach(function (key) {
                    errorText = err.responseJSON[key];
                    errorKey = key;
                });
                Swal.fire(
                    'Xatolik!',
                    `${errorKey} ${errorText}`,
                    `error`,
                )
            } else {
                Swal.fire(
                    'Xatolik!',
                    `${err.responseJSON}`,
                    `error`,
                )
            }
        } else if (err) {
            Swal.fire(
                'Xatolik!',
                `${err}`,
                `error`,
            )
        } else {
            Swal.fire(
                'Xatolik!',
                'Sahifani yangilab qayta urinib ko\'ring',
                `error`,
            ).then(function () {
                location.reload()
            })
        }
    } catch {
        Swal.fire(
            'Xatolik!',
            'Sahifani yangilab qayta urinib ko\'ring',
            `error`,
        ).then(function () {
            location.reload()
        })
    }


}


function sendAuthorizationToken() {
    var access = localStorage.getItem('access'),
        csrftoken = getCookie('csrftoken')

    $.ajaxSetup({
        // contentType: "application/json; charset=utf-8",
        // dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken)
            xhr.setRequestHeader('Authorization', `Bearer ${access}`)
        },
        error: function (response) {

            if (response.status === 401) {
                tokenInvalid()
            } else if (response.status === 403) {
                swal_error("Kechirasiz! Ruxsat berilmagan!")
            }
        }
    })
}


function refresh_with_time(delay) {
    setTimeout(function () {
        location.reload()
    }, delay)
}

// $("#mySelect2").select2({
//       placeholder: "My Select 2",
//       multiple: false,
//       minimumInputLength: 1,
//       ajax: {
//           url: "/elements/all",
//           dataType: 'json',
//           quietMillis: 250,
//           data: function(term, page) {
//               return {
//                   q: term,
//               };
//           },
//           results: function(data, page) {
//               return {results: data};
//           },
//           cache: true
//       },
//       formatResult: function(element){
//           return element.text + ' (' + element.id + ')';
//       },
//       formatSelection: function(element){
//           return element.text + ' (' + element.id + ')';
//       },
//       escapeMarkup: function(m) {
//           return m;
//       }
// });

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

function column_asc_desc() {
    $(this).on("order.dt", () => {
        if ($(this).settings().order().length === 1) {
            let order = $(this).settings().order()[0],
                th = $(this).children("th:eq(" + order[0] + ")");
            if (th.attr("data-sort-next") === "false") {
                $(this).order([]).draw();
                th.removeAttr("data-sort-next");
            } else {
                th.attr("data-sort-next", order[1] !== "desc");
            }
            $(this).children("th").each((k, v) => {
                if (k !== order[0]) {
                    $(this).children("th:eq(" + k + ")").removeAttr("data-sort-next")
                }
            });
        }
    });
}

async function setAxiosHeader() {
    // axios.defaults.baseURL = baseURL + '/api/v1';

    if (localStorage.getItem('access')
        && typeof localStorage.getItem('access') !== "undefined"
        && localStorage.getItem('access') !== "undefined") {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access');
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    } else {
        refreshToken()
    }

    axios.interceptors.response.use((response) => response, (error) => {
        if (error.response.status === 401) {
            refreshToken()
        } else if (error.response.status === 403) {
            swal_error("Sizga ruxsat berilmagan!")
        } else if (error.response.status === 500) {
            swal_error("Server xatoligi! Sahifani yangilab qayta urinib ko'ring!")
        }
        throw error;
    });

}

// async function getCurrentUser() {
//     await axios.get('/api/v1/user/auth/users/me')
//         .then(res => {
//             localStorage.setItem('userId', res.data.id)
//             localStorage.setItem('userUsername', res.data.username)
//         })
//         .catch(err => {
//             // swal_error(err)
//             localStorage.removeItem('access')
//             refreshToken()
//         })
// }

async function refreshToken() {
    await axios.post('/api/v1/user/auth/jwt/refresh/', {
        'refresh': localStorage.getItem('refresh')
    })
        .then(function (res) {
            localStorage.setItem('access', res.data.access)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access;
            location.reload()
        })
        .catch(function (error) {
            localStorage.removeItem('refresh')

            error_toast('Xatolik! Token yaroqsiz!')

            setTimeout(function () {
                window.location.href = '/user/custom-logout/'
            }, 3000)
        });
}