document.getElementById('log-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const logData = {
    date: event.target.date.value,
    ph: parseFloat(event.target.ph.value),
    alkalinity: parseInt(event.target.alkalinity.value),
    hardness: parseInt(event.target.hardness.value),
    chlorine: parseFloat(event.target.chlorine.value),
  };

  console.log(logData);
});
