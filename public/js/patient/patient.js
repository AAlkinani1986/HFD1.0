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
