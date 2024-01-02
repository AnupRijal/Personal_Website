document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  const cards = document.querySelectorAll('.card');

  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      const content = this.previousElementSibling;
      content.classList.toggle('show-more');

      if (content.classList.contains('show-more')) {
        this.textContent = 'Read Less';
        cards[index].style.transform = 'scale(1)';
        cards[index].style.boxShadow = 'none';
      } else {
        this.textContent = 'Read More';
      }
    });
    
    cards[index].addEventListener('mouseover', function () {
      if (!toggleButtons[index].classList.contains('show-more')) {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0px 0px 20px 0px rgba(0,0,0,0.75)';
      }
    });

    cards[index].addEventListener('mouseout', function () {
      if (!toggleButtons[index].classList.contains('show-more')) {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
      }
    });

    cards[index].addEventListener('click', function () {
      if (!toggleButtons[index].classList.contains('show-more')) {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
      } else {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0px 0px 20px 0px rgba(0,0,0,0.75)';
      }
    });
  });
});
