function openPopup(country, details) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupInfo = document.getElementById('popup-info');
    popupTitle.textContent = country + ' Passport';
    popupInfo.textContent = details;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
