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

function initMap() {
    var location = { lat: 52.2298, lng: 21.0122 }; // Warszawa
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Warszawa"
    });
}
