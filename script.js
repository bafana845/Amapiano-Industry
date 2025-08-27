const eventDate = new Date("2025-08-29T15:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const timeleft = eventDate - now;

    if (timeleft > 0) {
        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdown.innerHTML = "The event has started!";
    }
}, 1000);