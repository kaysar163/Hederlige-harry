document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the email input field
  var emailInput = document.getElementById('email');
  emailInput.addEventListener('input', handleEmailInput);

  // Array med 10 bilar
  var cars = [
    { id: 1, type: 'Nissan GT-R', year: 2022, price: 100000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F13.png' },
    { id: 2, type: 'Ford Egde', year: 2023, price: 150000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F12.png' },
    { id: 3, type: 'Kia Forte', year: 2019, price: 300000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F11.png' },
    { id: 4, type: 'TOYOTA', year: 2010, price: 300800, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F3.png' },
    { id: 5, type: 'HONDA', year: 2018, price: 306000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F9.png' },
    { id: 6, type: 'YAMAHA', year: 2013, price: 390000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F8.png' },
    { id: 7, type: 'MITSUBISHI', year: 2018, price: 300060, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F7.png' },
    { id: 8, type: 'JEEP', year: 2013, price: 300300, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F6.png' },
    { id: 9, type: 'SUBARU', year: 2018, price: 304000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F5.png' },
    //{ id: 10, type: 'MERCEDES-BENS', year: 2016, price: 302000, imageUrl: 'https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F4.png' },
   
  ];

  // Visa bilar på webbsidan
  displayCars(cars);
});

function displayCars(cars) {
  var productGallery = document.querySelector('.productgallery');

  // Loopa igenom bilar och skapa HTML för varje bil
  cars.forEach(function (car) {
    var productCard = document.createElement('div');
    productCard.classList.add('productcard');

    var img = document.createElement('img');
    img.src = car.imageUrl;

    var information = document.createElement('div');
    information.classList.add('information');

    var name = document.createElement('div');
    name.classList.add('name');
    name.textContent = car.type;

    var description = document.createElement('div');
    description.classList.add('description');
    description.textContent = car.year;

    var ctaButton = document.createElement('a');
    ctaButton.classList.add('ctabutton');
    ctaButton.href = '#';
    ctaButton.textContent = car.price + ' kr';

    information.appendChild(name);
    information.appendChild(description);
    information.appendChild(ctaButton);

    productCard.appendChild(img);
    productCard.appendChild(information);

    productGallery.appendChild(productCard);
  });
}

function handleEmailInput() {
  // Get the email input value
  var emailValue = document.getElementById('email').value.toLowerCase();

  // Get the swedishpostalcode field
  var swedishPostalCodeField = document.getElementById('swedishpostalcode');

  // Check if the email contains ".se"
  if (emailValue.includes('.se')) {
    // If yes, show the swedishpostalcode field
    swedishPostalCodeField.style.display = 'block';
  } else {
    // If no, hide the swedishpostalcode field
    swedishPostalCodeField.style.display = 'none';
  }
}