  const text2 = document.getElementById("circularText");
  const str = text2.textContent;
  text2.innerHTML = "";

  for (let i = 0; i < str.length; i++) {
    const span = document.createElement("span");
    span.innerText = str[i];
    span.style.transform = `rotate(${i * 9}deg) translate(130px) rotate(-${i * 9}deg)`;
    text2.appendChild(span);
  }
