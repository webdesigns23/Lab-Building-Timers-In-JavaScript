/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let timeRemaining = startTime;
  // Set up a timer using setInterval
  const timerId = setInterval(() => {
     // Log the remaining time
     console.log(timeRemaining);
     //and decrement it
     for(let i =timeRemaining; i >0; i--){
        //timeRemaining *=1000 - interval;
       // Stop the timer when time reaches 0
     if(timeRemaining >= 0){
      clearInterval(timerId);
      };
    };
        
  }, interval); //execute every interval value
   
   // Return the timer ID for validation
  return timerId;
}

//Test Timer
console.log(countdownTimer(5, 1000));

module.exports = { countdownTimer };