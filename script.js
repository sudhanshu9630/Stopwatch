window.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let timer = 0;
    let interval;
  
    // Format time in HH:MM:SS format
    function formatTime(time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
      let seconds = Math.floor(time % 60);
      
  
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  
    // Add leading zero to single-digit numbers
    function padZero(num) {
      return num.toString().padStart(2, '0');
    }
  
    // Update the timer display
    function updateTimerDisplay() {
      const timerDisplay = document.querySelector('.timer');
      timerDisplay.textContent = formatTime(timer);
    }
  
    // Start the timer
    function startTimer() {
      clearInterval(interval);
      interval = setInterval(function() {
        timer++;
        updateTimerDisplay();
      }, 1000);
    }
  
    // Stop the timer
    function stopTimer() {
      clearInterval(interval);
    }
  
    // Reset the timer
    function resetTimer() {
      stopTimer();
      timer = 0;
      updateTimerDisplay();
    }
  
    // Button event listeners
    const startBtn = document.querySelector('#startBtn');
    const stopBtn = document.querySelector('#stopBtn');
    const resetBtn = document.querySelector('#resetBtn');
  
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
  });
  