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
const logForm = document.getElementById('log-form');
const logTable = document.getElementById('log-table').getElementsByTagName('tbody')[0];

logForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const logData = {
    date: event.target.date.value,
    ph: parseFloat(event.target.ph.value),
    alkalinity: parseInt(event.target.alkalinity.value),
    hardness: parseInt(event.target.hardness.value),
    chlorine: parseFloat(event.target.chlorine.value),
  };

  addLogToTable(logData);
});

function addLogToTable(logData) {
  const newRow = logTable.insertRow();

  newRow.insertCell().innerText = logData.date;
  newRow.insertCell().innerText = logData.ph.toFixed(2);
  newRow.insertCell().innerText = logData.alkalinity;
  newRow.insertCell().innerText = logData.hardness;
  newRow.insertCell().innerText = logData.chlorine.toFixed(1);
}
