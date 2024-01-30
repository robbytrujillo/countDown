const countdownDate = new Date("Feb 14, 2024 00:00:00").getTime();

const now = new Date().getTime();

const distance = countdownDate - now;

const days = distance / (1000 * 60 * 60 * 24);

document.write(days);
