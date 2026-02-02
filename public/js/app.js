//Footer Section
const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // remove active
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // add active
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });



//DELETE LISTING ALERT
  function confirmDelete() {
    return confirm("Are you sure you want to delete this listing?");
  }



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();




//FORM PASSWORD SHOW & HIDE ICON
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');

if (passwordInput && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const icon = toggleBtn.querySelector("i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.replace("bi-eye-slash", "bi-eye");
    }
  });
}



//MAP ICON DESIGN
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


//Initialize the Map
document.addEventListener("DOMContentLoaded", function () {
  const mapDiv = document.querySelector(".map");
  if (!mapDiv) return;

  //Create map
  const map = L.map(mapDiv).setView([20.5937, 78.9629], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const bounds = L.latLngBounds();

  //ALL LISTINGS MAP
  if (mapDiv.dataset.listings) {
    const listings = JSON.parse(mapDiv.dataset.listings);

    listings.forEach(listing => {
      if (!listing.geometry) return;

      const [lng, lat] = listing.geometry.coordinates;

      L.marker([lat, lng], { icon: redIcon })
        .addTo(map)
        .bindPopup(`
            <div style="min-width:180px">
            <h6 class="mb-1">${listing.title}</h6>
            <p class="mb-0 text-muted">${listing.location}</p>
            </div>
          `);

      bounds.extend([lat, lng]);
    });
  }

  //SINGLE LISTING MAP
  else if (mapDiv.dataset.coordinates) {
    const [lng, lat] = JSON.parse(mapDiv.dataset.coordinates);

    L.marker([lat, lng], { icon: redIcon })
      .addTo(map)
      .bindPopup(mapDiv.dataset.title || "Listing Location")
      .openPopup();
    
    bounds.extend([lat, lng]);
  }

  //Auto zoom
  if (bounds.isValid()) {
    map.fitBounds(bounds, { padding: [50, 50] });
  }
});



//REDIRECT CATEGORIES FILTER
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".category-item");

  if (!icons.length) return;

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const category = icon.dataset.category;
      if (!category) return;

      // Redirect to backend filter route
      window.location.href = `/listings?category=${category}`;
    });
  });
});



//TAX TOGGLE BUTTON 
document.addEventListener("DOMContentLoaded", () => {
  const taxToggleBtn = document.querySelector('.tax-toggle-btn');
  const taxToggleLabel = document.querySelector('.tax-toggle-label');
  if(!taxToggleBtn) return;

  taxToggleBtn.addEventListener("click", () => {
    const taxBox = document.querySelectorAll('.tax');

    taxBox.forEach((tax) => {
      if(tax.style.display !== 'inline'){
        tax.style.display = 'inline';
        taxToggleLabel.innerText = 'GST details hidden';
      } else {
        tax.style.display = 'none';
        taxToggleLabel.innerText = 'GST details shown';
      }
    })
  })
});



//LOADER MECHANISM
const forms = document.querySelectorAll('form');
const loader = document.querySelector('#loader');

  forms.forEach(form => {
    form.addEventListener('submit', () => {
      if(!form.checkValidity()){
        return;
      }
      loader.classList.remove("hidden");
    });
  })
