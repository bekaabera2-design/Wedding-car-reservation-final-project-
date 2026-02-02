const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const fleetGrid = document.querySelector('.fleet-grid');
const reservationForm = document.getElementById('reservation-form');
const contactForm = document.getElementById('contact-form');
const termsLink = document.getElementById('terms-link');
const termsModal = document.getElementById('terms-modal');
const closeModal = document.querySelector('.close-modal');
const closeConfirmation = document.getElementById('close-confirmation');
const closeContactConfirmation = document.getElementById('close-contact-confirmation');
const confirmationModal = document.getElementById('confirmation-modal');
const contactConfirmationModal = document.getElementById('contact-confirmation');
const prevCarBtn = document.getElementById('prev-car');
const nextCarBtn = document.getElementById('next-car');
const prevTestimonialBtn = document.getElementById('prev-testimonial');
const nextTestimonialBtn = document.getElementById('next-testimonial');
const testimonialDots = document.querySelectorAll('.dot');
const reservationList = document.getElementById('reservation-list');
const estimatedPrice = document.getElementById('estimated-price');
const faqQuestions = document.querySelectorAll('.faq-question');

const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
let currentCarIndex = 0;

const carFleet = [
    {
        id: 1,
        name: 'Rolls Royce Phantom 2023',
        type: 'rolls-royce',
        description: 'The ultimate luxury sedan for a grand entrance with Ethiopian royal treatment',
        features: ['White Glove Service', 'Complementary Champagne', 'Red Carpet', 'GPS Tracking'],
        price: 15000,
        image: 'https://images.ctfassets.net/lmiyf1b7ib63/5rollsroycephanto-image/95f418b02d5e7c232389f9fe7f59fd3e/5rollsroycephanto-image.jpeg',
        locations: ['Addis Ababa', 'Bahir Dar', 'Gondar']
    },
    {
        id: 2,
        name: 'Range Rover Autobiography',
        type: 'range-rover',
        description: 'British luxury SUV with executive comfort for Ethiopian wedding celebrations',
        features: ['Executive Interior', 'Terrain Response', 'Premium Sound', 'GPS Tracking'],
        price: 12000,
        image: 'https://douradocars.com/wp-content/uploads/2024/04/Range-Rover-Autobiography-P530-SWB-for-sale-in-dubai-1-1-scaled.webp',
        locations: ['Addis Ababa', 'Hawassa', 'Gondar']
    },
    {
        id: 3,
        name: 'Toyota Land Cruiser LC300',
        type: 'toyota-landcruiser',
        description: 'Premium SUV for Ethiopian terrain with luxury interior and advanced features',
        features: ['All-Terrain Capability', 'Leather Seats', 'Sunroof', 'GPS Tracking'],
        price: 9500,
        image: 'https://toyota24h.vn/uploads/news/2022-toyota-land-cruiser-LC300-2023-phien-ban-moi.jpg',
        locations: ['Addis Ababa', 'Bahir Dar', 'Mekelle']
    },
    {
        id: 4,
        name: 'Mercedes-Benz S-Class 2023',
        type: 'mercedes-s-class',
        description: 'Modern elegance with cutting-edge technology and Ethiopian luxury standards',
        features: ['Panoramic Roof', 'Massage Seats', 'Ambient Lighting', 'GPS Tracking'],
        price: 8500,
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        locations: ['Addis Ababa', 'Hawassa', 'Mekelle']
    },
    {
        id: 5,
        name: 'BMW 7 Series 2023',
        type: 'bmw-7-series',
        description: 'German engineering meets Ethiopian luxury for your special day',
        features: ['Executive Lounge', 'Premium Sound System', 'Climate Control', 'GPS Tracking'],
        price: 8500,
        image: 'https://i.pinimg.com/originals/34/19/94/341994f75ea97deea0a36483bdee3344.jpg',
        locations: ['Addis Ababa', 'Dire Dawa', 'Jimma']
    },
    {
        id: 6,
        name: 'Vintage Mercedes 300SL',
        type: 'vintage-mercedes',
        description: 'Classic European elegance for a timeless Ethiopian wedding celebration',
        features: ['Vintage Charm', 'Leather Interior', 'Convertible Top', 'GPS Tracking'],
        price: 12000,
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        locations: ['Addis Ababa', 'Gondar', 'Bahir Dar']
    }
];

const fleetData = [
    {
        id: 1,
        name: 'Rolls Royce Phantom',
        type: 'rolls-royce',
        description: 'The ultimate luxury sedan for a grand entrance',
        features: ['White Glove Service', 'Complementary Champagne', 'Red Carpet'],
        price: 850,
        image: 'https://images.unsplash.com/photo-1565700291545-5b71b7dab6e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Mercedes-Benz S-Class',
        type: 'mercedes',
        description: 'Modern elegance with cutting-edge technology',
        features: ['Panoramic Roof', 'Massage Seats', 'Ambient Lighting'],
        price: 650,
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Vintage Bentley',
        type: 'vintage',
        description: 'Classic British elegance for a timeless wedding',
        features: ['Vintage Charm', 'Leather Interior', 'Wood Panel Accents'],
        price: 750,
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        name: 'Tesla Model S',
        type: 'tesla',
        description: 'Eco-friendly luxury for the modern couple',
        features: ['Eco-Friendly', 'Silent Ride', 'High-Tech Interior'],
        price: 600,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        name: 'White Limousine',
        type: 'limo',
        description: 'Spacious and elegant for the wedding party',
        features: ['Spacious Interior', 'Mini Bar', 'LED Lighting'],
        price: 700,
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        name: 'Classic Chevrolet',
        type: 'classic',
        description: 'Retro style for a nostalgic wedding',
        features: ['Classic Design', 'Convertible Option', 'Vintage Appeal'],
        price: 800,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    
    if (document.getElementById('fleet-container')) {
        displayFleet();
        
        const trackerImage = document.querySelector('.tracker-image-container');
        if (trackerImage) {
            trackerImage.addEventListener('click', function() {
                window.location.href = 'tracker.html';
            });
        }
    }
    
    if (fleetGrid) { 
        initFleet(); 
        initCarControls(); 
    }
    
    if (reservationForm) { 
        initReservationForm(); 
        loadReservations(); 
        initPriceCalculator(); 
    }
    
    if (contactForm) { 
        initContactForm(); 
    }
    
    if (testimonialDots && testimonialDots.length > 0) { 
        initTestimonials(); 
    }
    
    if (faqQuestions && faqQuestions.length > 0) { 
        initFAQ(); 
    }
    
    initModals();
    
    if (document.getElementById('ethiopia-map')) {
        initTracker();
    }
});

function initNavigation() {
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
        });
    });
}

function displayFleet() {
    const fleetContainer = document.getElementById('fleet-container');
    if (!fleetContainer) return;

    fleetContainer.innerHTML = '';

    carFleet.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'fleet-item';
        carCard.innerHTML = `
            <div class="fleet-img">
                <img src="${car.image}" alt="${car.name}" loading="lazy">
                <div class="fleet-overlay">
                    <button class="btn-select" data-car-id="${car.id}">
                        <i class="fas fa-heart"></i> Select This Car
                    </button>
                </div>
            </div>
            <div class="fleet-content">
                <h3>${car.name}</h3>
                <div class="fleet-features">
                    ${car.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <p class="fleet-description">${car.description}</p>
                <div class="fleet-price">
                    <span class="price-amount">ETB ${car.price.toLocaleString()}</span>
                    <span class="price-period">per hour</span>
                </div>
                <div class="fleet-security">
                    <i class="fas fa-shield-alt"></i>
                    <span>GPS Tracking Included</span>
                </div>
                <div class="fleet-locations">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Available in: ${car.locations.join(', ')}</span>
                </div>
            </div>
        `;
        fleetContainer.appendChild(carCard);
    });

    document.querySelectorAll('.btn-select').forEach(button => {
        button.addEventListener('click', function() {
            const carId = this.getAttribute('data-car-id');
            const car = carFleet.find(c => c.id == carId);
            if (car) {
                document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
                const carSelect = document.getElementById('car-type');
                if (carSelect) {
                    carSelect.value = car.type;
                    if (typeof updatePrice === 'function') updatePrice();
                }
            }
        });
    });
}

function initFleet() {
    if (!fleetGrid) return;
    
    fleetGrid.innerHTML = '';
    fleetData.forEach((car, index) => {
        const carElement = document.createElement('div');
        carElement.className = 'fleet-item';
        carElement.innerHTML = `
            <div class="fleet-image">
                <img src="${car.image}" alt="${car.name}">
                <div class="fleet-overlay">
                    <span class="fleet-tag">${index === 0 ? 'Most Popular' : 'Available'}</span>
                </div>
            </div>
            <div class="fleet-content">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
                <ul class="fleet-features">
                    ${car.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <div class="fleet-price">$${car.price}/day</div>
                <button class="btn-secondary select-car" data-car="${car.type}">Select This Car</button>
            </div>
        `;
        fleetGrid.appendChild(carElement);
    });

    document.querySelectorAll('.select-car').forEach(button => {
        button.addEventListener('click', function() {
            const carType = this.getAttribute('data-car');
            const carSelect = document.getElementById('car-type');
            if (carSelect) {
                carSelect.value = carType;
                updatePrice();
                document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initCarControls() {
    if (prevCarBtn && nextCarBtn) {
        prevCarBtn.addEventListener('click', showPreviousCar);
        nextCarBtn.addEventListener('click', showNextCar);
    }
}

function showPreviousCar() {
    if (fleetData.length > 0) {
        currentCarIndex = (currentCarIndex - 1 + fleetData.length) % fleetData.length;
        updateCarDisplay();
    }
}

function showNextCar() {
    if (fleetData.length > 0) {
        currentCarIndex = (currentCarIndex + 1) % fleetData.length;
        updateCarDisplay();
    }
}

function updateCarDisplay() {
    console.log('Current car index:', currentCarIndex);
}

function initFAQ() {
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

function initModals() {
    if (termsLink && termsModal) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            termsModal.style.display = 'flex';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            termsModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (termsModal && e.target == termsModal) {
            termsModal.style.display = 'none';
        }
        if (confirmationModal && e.target == confirmationModal) {
            confirmationModal.style.display = 'none';
        }
        if (contactConfirmationModal && e.target == contactConfirmationModal) {
            contactConfirmationModal.style.display = 'none';
        }
    });
    
    if (closeConfirmation) {
        closeConfirmation.addEventListener('click', function() {
            confirmationModal.style.display = 'none';
        });
    }
    
    if (closeContactConfirmation) {
        closeContactConfirmation.addEventListener('click', function() {
            contactConfirmationModal.style.display = 'none';
        });
    }
}

function initTracker() {
    const vehicles = [
        {
            id: 'vehicle-1',
            name: 'Mercedes S-Class',
            license: 'AA-1234',
            status: 'active',
            speed: '45 km/h',
            location: 'Bole, Addis Ababa',
            type: 'active'
        },
        {
            id: 'vehicle-2',
            name: 'Toyota Land Cruiser',
            license: 'AA-5678',
            status: 'parked',
            speed: '0 km/h',
            location: 'Piazza, Addis Ababa',
            type: 'parked'
        },
        {
            id: 'vehicle-3',
            name: 'BMW 7 Series',
            license: 'BD-9012',
            status: 'warning',
            speed: '60 km/h',
            location: 'Bahir Dar City',
            type: 'warning'
        },
        {
            id: 'vehicle-4',
            name: 'Range Rover',
            license: 'HA-3456',
            status: 'alert',
            speed: '80 km/h',
            location: 'Hawassa Lake Area',
            type: 'alert'
        },
        {
            id: 'vehicle-5',
            name: 'Vintage Mercedes',
            license: 'BD-5678',
            status: 'active',
            speed: '40 km/h',
            location: 'Gondar City',
            type: 'active'
        },
        {
            id: 'vehicle-6',
            name: 'Hyundai Sonata',
            license: 'MK-1234',
            status: 'parked',
            speed: '0 km/h',
            location: 'Mekelle City Center',
            type: 'parked'
        }
    ];

    function updateVehicleList() {
        const vehicleList = document.getElementById('vehicle-list');
        if (!vehicleList) return;
        
        vehicleList.innerHTML = '';
        
        vehicles.forEach(vehicle => {
            const vehicleItem = document.createElement('div');
            vehicleItem.className = 'vehicle-item';
            vehicleItem.setAttribute('data-vehicle', vehicle.id);
            
            const statusClass = `status-${vehicle.status}`;
            
            vehicleItem.innerHTML = `
                <div class="vehicle-header">
                    <div class="vehicle-name">${vehicle.name}</div>
                    <div class="vehicle-status ${statusClass}">${vehicle.status.toUpperCase()}</div>
                </div>
                <div class="vehicle-details">
                    License: ${vehicle.license}<br>
                    Speed: ${vehicle.speed}<br>
                    Location: ${vehicle.location}
                </div>
            `;
            
            vehicleList.appendChild(vehicleItem);
            
            vehicleItem.addEventListener('click', function() {
                const vehicleMarker = document.getElementById(vehicle.id);
                if (vehicleMarker) {
                    console.log('Centering on vehicle:', vehicle.name);
                }
            });
        });
    }

    const cities = [
        {
            id: 'addis-ababa',
            name: 'Addis Ababa',
            description: 'Capital city of Ethiopia with 3 active vehicles',
            vehicles: ['Mercedes S-Class (AA-1234)', 'Toyota Land Cruiser (AA-5678)', 'BMW 7 Series (BD-9012)']
        },
        {
            id: 'bahir-dar',
            name: 'Bahir Dar',
            description: 'City on the shores of Lake Tana with 1 active vehicle',
            vehicles: ['BMW 7 Series (BD-9012)']
        },
        {
            id: 'gondar',
            name: 'Gondar',
            description: 'Historical city with 1 active vehicle',
            vehicles: ['Vintage Mercedes (BD-5678)']
        },
        {
            id: 'hawassa',
            name: 'Hawassa',
            description: 'Lakeside city with 1 vehicle under alert',
            vehicles: ['Range Rover (HA-3456) - THEFT ALERT']
        },
        {
            id: 'mekelle',
            name: 'Mekelle',
            description: 'City in Tigray region with 1 parked vehicle',
            vehicles: ['Hyundai Sonata (MK-1234)']
        }
    ];

    function initCityEvents() {
        cities.forEach(city => {
            const cityElement = document.getElementById(city.id);
            if (cityElement) {
                cityElement.addEventListener('click', function() {
                    showCityInfo(city);
                });
            }
        });
        
        const closeCityInfo = document.getElementById('city-info-close');
        if (closeCityInfo) {
            closeCityInfo.addEventListener('click', function() {
                const cityInfo = document.getElementById('city-info');
                cityInfo.classList.remove('show');
            });
        }
    }

    function showCityInfo(city) {
        const cityInfo = document.getElementById('city-info');
        const cityInfoTitle = document.getElementById('city-info-title');
        const cityInfoDetails = document.getElementById('city-info-details');
        
        if (cityInfo && cityInfoTitle && cityInfoDetails) {
            cityInfoTitle.textContent = city.name;
            cityInfoDetails.innerHTML = `
                <p>${city.description}</p>
                <div class="city-vehicles">
                    <strong>Vehicles in this city:</strong><br>
                    ${city.vehicles.map(vehicle => `• ${vehicle}`).join('<br>')}
                </div>
            `;
            cityInfo.classList.add('show');
        }
    }

    function initTrackerControls() {
        const refreshBtn = document.getElementById('refresh-tracking');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', function() {
                const lastUpdate = document.getElementById('last-update');
                if (lastUpdate) {
                    const now = new Date();
                    lastUpdate.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                }
                
                this.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Refreshing...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
                    this.disabled = false;
                    alert('Tracking data refreshed!');
                }, 1500);
            });
        }
        
        const reportTheftBtn = document.getElementById('report-theft');
        if (reportTheftBtn) {
            reportTheftBtn.addEventListener('click', function() {
                const vehicleId = prompt('Enter vehicle license plate to report theft:');
                if (vehicleId) {
                    alert(`Theft reported for vehicle ${vehicleId}. Police have been notified.`);
                }
            });
        }
        
        const zoomInBtn = document.getElementById('zoom-in');
        const zoomOutBtn = document.getElementById('zoom-out');
        const resetViewBtn = document.getElementById('reset-view');
        const fullscreenBtn = document.getElementById('fullscreen');
        
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', function() {
                console.log('Zooming in');
            });
        }
        
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', function() {
                console.log('Zooming out');
            });
        }
        
        if (resetViewBtn) {
            resetViewBtn.addEventListener('click', function() {
                console.log('Resetting view');
            });
        }
        
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function() {
                const map = document.getElementById('ethiopia-map');
                if (!document.fullscreenElement) {
                    if (map.requestFullscreen) {
                        map.requestFullscreen();
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
            });
        }
    }

    function initTheftHistory() {
        const theftHistory = [
            {
                date: '2024-03-15',
                vehicle: 'Range Rover (HA-3456)',
                location: 'Hawassa',
                status: 'Recovered',
                resolution: 'Vehicle recovered within 2 hours using GPS tracking',
                action: 'Case Closed'
            },
            {
                date: '2024-02-28',
                vehicle: 'BMW 7 Series (BD-9012)',
                location: 'Bahir Dar',
                status: 'Prevented',
                resolution: 'Theft prevented by quick response team',
                action: 'Suspect Arrested'
            },
            {
                date: '2024-01-10',
                vehicle: 'Toyota Land Cruiser (AA-5678)',
                location: 'Addis Ababa',
                status: 'Recovered',
                resolution: 'Vehicle recovered from chop shop',
                action: 'Case Closed'
            }
        ];
        
        const historyList = document.getElementById('theft-history-list');
        if (historyList) {
            historyList.innerHTML = '';
            
            theftHistory.forEach(incident => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${incident.date}</td>
                    <td>${incident.vehicle}</td>
                    <td>${incident.location}</td>
                    <td><span class="status-${incident.status.toLowerCase()}">${incident.status}</span></td>
                    <td>${incident.resolution}</td>
                    <td>${incident.action}</td>
                `;
                historyList.appendChild(row);
            });
        }
    }

    updateVehicleList();
    initCityEvents();
    initTrackerControls();
    initTheftHistory();
}

function initReservationForm() {
    if (!reservationForm) return;
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const date = document.getElementById('date');
        const carType = document.getElementById('car-type');
        
        let isValid = true;
        
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            showError(email, 'Valid email is required');
            isValid = false;
        } else {
            clearError(email);
        }
        
        if (!date.value) {
            showError(date, 'Date is required');
            isValid = false;
        } else {
            clearError(date);
        }
        
        if (isValid) {
            if (confirmationModal) {
                confirmationModal.style.display = 'flex';
            }
            
            saveReservation({
                name: name.value,
                email: email.value,
                phone: phone.value,
                date: date.value,
                car: carType.value,
                time: new Date().toISOString()
            });
            
            reservationForm.reset();
            updatePrice();
        }
    });
}

function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name');
        const email = document.getElementById('contact-email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            showError(email, 'Valid email is required');
            isValid = false;
        } else {
            clearError(email);
        }
        
        if (!subject.value) {
            showError(subject, 'Please select a subject');
            isValid = false;
        } else {
            clearError(subject);
        }
        
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else {
            clearError(message);
        }
        
        if (isValid) {
            if (contactConfirmationModal) {
                contactConfirmationModal.style.display = 'flex';
            }
            
            contactForm.reset();
        }
    });
}

function initPriceCalculator() {
    if (estimatedPrice) {
        updatePrice();
        
        const dateInput = document.getElementById('date');
        const carTypeSelect = document.getElementById('car-type');
        
        if (dateInput) dateInput.addEventListener('change', updatePrice);
        if (carTypeSelect) carTypeSelect.addEventListener('change', updatePrice);
    }
}

function updatePrice() {
    if (!estimatedPrice) return;
    
    const carType = document.getElementById('car-type');
    const date = document.getElementById('date');
    
    let basePrice = 15000;
    
    if (carType) {
        const car = carFleet.find(c => c.type === carType.value);
        if (car) {
            basePrice = car.price;
        }
    }
    
    let finalPrice = basePrice;
    if (date && date.value) {
        const selectedDate = new Date(date.value);
        const dayOfWeek = selectedDate.getDay();
        
        if (dayOfWeek === 5 || dayOfWeek === 6) {
            finalPrice = Math.round(basePrice * 1.2);
        }
        
        const month = selectedDate.getMonth();
        if (month >= 5 && month <= 7) {
            finalPrice = Math.round(finalPrice * 1.3);
        }
    }
    
    estimatedPrice.textContent = `ETB ${finalPrice.toLocaleString()}`;
}

function initTestimonials() {
    if (!testimonials.length) return;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentTestimonial = index;
    }
    
    if (nextTestimonialBtn) {
        nextTestimonialBtn.addEventListener('click', function() {
            showTestimonial((currentTestimonial + 1) % testimonials.length);
        });
    }
    
    if (prevTestimonialBtn) {
        prevTestimonialBtn.addEventListener('click', function() {
            showTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
        });
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
        });
    });
    
    setInterval(() => {
        if (testimonials.length > 1) {
            showTestimonial((currentTestimonial + 1) % testimonials.length);
        }
    }, 5000);
    
    showTestimonial(0);
}

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = message;
        input.style.borderColor = '#e74c3c';
    }
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = '';
        input.style.borderColor = '';
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function saveReservation(reservation) {
    let reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

function loadReservations() {
    if (!reservationList) return;
    
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservationList.innerHTML = '';
    
    if (reservations.length === 0) {
        reservationList.innerHTML = '<li>No reservations yet</li>';
        return;
    }
    
    reservations.forEach((res, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${res.name}</strong> - ${res.date}<br>
            <small>${res.car} • ${new Date(res.time).toLocaleDateString()}</small>
        `;
        reservationList.appendChild(li);
    });
}

window.updatePrice = updatePrice;