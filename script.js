let settingsData = {};

fetch('settings.json')
  .then(response => response.json())
  .then(data => {
    settingsData = data;
  });

function generateSettings() {
  const game = document.getElementById("game").value;
  const brand = document.getElementById("brand").value;
  const modelInput = document.getElementById("model").value.trim();
  const settingType = document.getElementById("settingType").value;

  const modelKey = modelInput || brand;

  const modelData = settingsData[modelKey];

  if (!modelData || !modelData[game] || !modelData[game][settingType]) {
    document.getElementById("output").textContent =
      "تنظیماتی برای این مدل یا بازی پیدا نشد.";
    return;
  }

  const settings = modelData[game][settingType];
  document.getElementById("output").textContent = settings.join("\n");
}

function copyCode() {
  const code = document.getElementById("output").textContent;
  navigator.clipboard.writeText(code);
  alert("کد کپی شد!");
}