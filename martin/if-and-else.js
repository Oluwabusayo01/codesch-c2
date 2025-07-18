function convertTo24HourFormat(timeString) {
  const [time, period] = timeString.split(" ");
  const [hour, minute] = time.split(":");
  let formattedHour = parseInt(hour);

  if (period === "PM") {
    formattedHour += 12;
  }

  return `${formattedHour}:${minute}`;
}

const time = new Date().toLocaleTimeString();
const convertedTime = convertTo24HourFormat(time);

// convertedTime = 8;

if (convertedTime <= "12:00") {
  console.log("Good morning!");
} else if (convertedTime <= "18:00") {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

console.log(`Current time is: ${convertedTime}`);
