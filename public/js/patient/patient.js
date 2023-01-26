document.addEventListener('DOMContentLoaded', function () {
  let Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  var elements = document.querySelectorAll('.datepicker')
  var instance = M.Datepicker.init(elements, Months)

  console.log(instance.toString())
})
const uploadFile = document.getElementById('patient_img')
const image = document.querySelector('img')
var uploadImage = ''
uploadFile.addEventListener('change', () => {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    uploadImage = reader.result
    image.setAttribute('src', uploadImage)
  })
  reader.readAsDataURL(uploadFile.files[0])
})
