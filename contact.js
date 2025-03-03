document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Zatrzymanie odświeżania strony
    
    // Wyświetlenie powiadomienia
    let notification = document.getElementById("notification");
    notification.style.display = "block";

    // Ukrycie powiadomienia po 3 sekundach
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);

    // Czyszczenie formularza
    this.reset();
});
