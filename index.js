const container = document.getElementById("container");
const switchContainer = document.getElementById("switch-container");
const switchBtn = document.getElementById("switch-btn");
const switchIcon = document.getElementById("switch-icon");

let isLight = false;
switchContainer.addEventListener("click", () => {
  isLight = !isLight;

  const theme = isLight ? "light" : "dark";
  switchTheme(theme);

  if (isLight) {
    switchBtn.style.transform = "translateX(90px)";
    switchIcon.innerHTML = `
    <svg fill="#fff" height="60" width="60" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M45.5 23.5c-12.1 0-22 9.9-22 22s9.9 22 22 22 22-9.9 22-22-9.9-22-22-22zm0 36c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14zM45.5 16.2c2.2 0 4-1.8 4-4V4.1c0-2.2-1.8-4-4-4s-4 1.8-4 4v8.1c0 2.3 1.8 4 4 4zM86.9 41.5h-8.1c-2.2 0-4 1.8-4 4s1.8 4 4 4h8.1c2.2 0 4-1.8 4-4s-1.8-4-4-4zM45.5 74.8c-2.2 0-4 1.8-4 4v8.1c0 2.2 1.8 4 4 4s4-1.8 4-4v-8.1c0-2.3-1.8-4-4-4zM16.2 45.5c0-2.2-1.8-4-4-4H4.1c-2.2 0-4 1.8-4 4s1.8 4 4 4h8.1c2.3 0 4-1.8 4-4zM69 26c1 0 2-.4 2.8-1.2l5.8-5.8c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-5.8 5.8c-1.6 1.6-1.6 4.1 0 5.7.9.8 1.9 1.2 2.9 1.2zM71.8 66.2c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7l5.8 5.8c.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2c1.6-1.6 1.6-4.1 0-5.7zM19.2 66.2 13.4 72c-1.6 1.6-1.6 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2l5.8-5.8c1.6-1.6 1.6-4.1 0-5.7-1.5-1.6-4.1-1.6-5.6 0zM19.2 24.8c.7.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2c1.6-1.6 1.6-4.1 0-5.7L19 13.3c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7z"/></svg>
    `;
  } else {
    switchBtn.style.transform = "translateX(0)";
    switchIcon.innerHTML = `
    <svg fill="#fff" height="80" width="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.399 7.646a.308.308 0 0 1 .577 0l.264.735c.031.086.1.154.187.184l.744.26a.301.301 0 0 1 0 .571l-.744.26a.305.305 0 0 0-.187.185l-.264.735a.308.308 0 0 1-.577 0l-.264-.735a.305.305 0 0 0-.187-.184l-.744-.26a.301.301 0 0 1 0-.571l.744-.26a.305.305 0 0 0 .187-.185zM16.307 10.912c.065-.179.321-.179.386 0l.175.49c.021.058.067.103.125.123l.496.174a.2.2 0 0 1 0 .38l-.496.174a.203.203 0 0 0-.125.123l-.175.49a.205.205 0 0 1-.386 0l-.175-.49a.203.203 0 0 0-.125-.123l-.496-.174a.2.2 0 0 1 0-.38l.496-.174a.203.203 0 0 0 .125-.123zM17.77 3.292c.139-.39.696-.39.836 0l.478 1.334a.44.44 0 0 0 .27.266l1.35.473a.436.436 0 0 1 0 .826l-1.35.472a.44.44 0 0 0-.27.267l-.478 1.334a.446.446 0 0 1-.837 0l-.478-1.334a.44.44 0 0 0-.27-.267l-1.35-.472a.436.436 0 0 1 0-.826l1.35-.473a.44.44 0 0 0 .27-.266z"/><path d="M3 13.46C3 17.624 6.474 21 10.76 21c3.3 0 6.117-2 7.24-4.822a7.04 7.04 0 0 1-2.93.633c-3.809 0-6.897-3-6.897-6.703 0-1.548.54-2.973 1.448-4.108C5.875 6.535 3 9.671 3 13.46z"/></svg>
    `;
  }
});

function switchTheme(theme) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  container.classList.remove(nextTheme);
  container.classList.add(theme);

  switchContainer.classList.remove(nextTheme);
  switchContainer.classList.add(theme);

  document.querySelectorAll("#switch-btn").forEach((element) => {
    element.classList.remove(nextTheme);
    element.classList.add(theme);
  });

  document.querySelector(`#theme-bg-content .${nextTheme}`).classList.toggle("play");
  document.querySelector(`#theme-bg-content .${theme}`).classList.toggle("play");
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("#theme-bg-content .dark").classList.toggle("play");
  }, 0);
  setTimeout(() => {
    switchContainer.classList.toggle("play");
  }, 800);
});
