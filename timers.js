function timer () {
  var start = document.querySelector('#start')
  var pause = document.querySelector('#pause')
  var reset = document.querySelector('#reset')
  var timerCount = document.querySelector('#timer')

  var seconds = 0
  var timerId = 0

  function updateTimer () {
    timerCount.textContent = 'Time elapsed: ' + seconds
    seconds += 1
  }
  function eventListener () {
    start.addEventListener('click', function () {
      timerCount.textContent = 'Time elapsed: ' + seconds
      timerId = setInterval(updateTimer, 1000)
    })

    pause.addEventListener('click', function () {
      clearInterval(timerId)
    })

    reset.addEventListener('click', function () {
      clearInterval(timerId)
      seconds = 0
      timerCount.textContent = 'Stop Watch'
    })
  }
  return {
    updateTimer: updateTimer,
    eventListener: eventListener
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var overTime=timer()
  overTime.eventListener()
})
