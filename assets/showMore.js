document.addEventListener('DOMContentLoaded', function() {
  const showMoreButton = document.querySelector('[data-show-more]');

  if (showMoreButton) {
    showMoreButton.addEventListener('click', function() {
      const hiddenNewsElements = document.querySelectorAll('[data-news-hidden]');

      hiddenNewsElements.forEach(function(element) {
        element.removeAttribute('data-news-hidden');
      });

      showMoreButton.remove();
    });
  }
});
