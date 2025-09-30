let spirit = 50;
const meterFill = document.getElementById("meterFill");
const meterValue = document.getElementById("meterValue");
const givingMeter = document.getElementById("givingMeter");

// Update meter and giving
function changeSpirit(amount) {
  spirit = Math.max(0, Math.min(100, spirit + amount));
  meterFill.style.width = spirit + "%";

  // Color based on spirit
  if (spirit < 30) {
    meterFill.style.background = 'linear-gradient(90deg, #e74c3c, #c0392b)';
  } else if (spirit < 70) {
    meterFill.style.background = 'linear-gradient(90deg, #f1c40f, #f39c12)';
  } else {
    meterFill.style.background = 'linear-gradient(90deg, #27ae60, #2ecc71)';
  }

  meterValue.textContent = "Spirit: " + spirit + "%";

  // Update giving meter text
  if (spirit < 20) {
    givingMeter.textContent = "😴 Low spirit… more rest and patience needed.";
  } else if (spirit < 50) {
    givingMeter.textContent = "🙂 Some joy and laughter… giving is possible!";
  } else if (spirit < 80) {
    givingMeter.textContent = "😃 Generous and joyful! Gifts, hugs, and laughter abound!";
    createFloating('🎁');
  } else {
    givingMeter.textContent = "🎉 Spirit overflowing! Maximum joy, love, and giving!";
    createFloating('🎁');
    createFloating('❤️');
  }
}

// Snowflakes
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = (Math.random() * 24 + 12) + 'px';
  snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
  snowflake.textContent = '❄️';
  document.body.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 10000);
}

// Floating gifts/hearts
function createFloating(symbol) {
  const floating = document.createElement('div');
  floating.className = 'floating';
  floating.style.left = Math.random() * window.innerWidth + 'px';
  floating.textContent = symbol;
  document.body.appendChild(floating);
  setTimeout(() => floating.remove(), 4000);
}

// Generate snowflakes every 300ms
setInterval(createSnowflake, 300);
