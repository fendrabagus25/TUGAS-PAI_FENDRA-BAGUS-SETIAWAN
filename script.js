document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.inactive').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Mohon Maaf, Menu pada website Fendra Bagus Setiawan tidak aktif");
        });
    });
});
