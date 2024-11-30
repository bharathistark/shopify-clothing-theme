document.getElementById('terms-checkbox')?.addEventListener('change', function () {
  const checkoutButton = document.getElementById('checkout-button');
  if (checkoutButton) {
    checkoutButton.disabled = !this.checked;
  }
});