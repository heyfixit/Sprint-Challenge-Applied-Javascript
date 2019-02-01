class Carousel {
  constructor(element) {
    this.element = element;
    this.imgList = element.querySelectorAll('img');
    this.leftBtn = element.querySelector('.left-button');
    this.rightBtn = element.querySelector('.right-button');
    this.displayedIndex = 0;

    this.leftBtn.addEventListener('click', () => this.switchIndex(this.displayedIndex - 1));
    this.rightBtn.addEventListener('click', () => this.switchIndex(this.displayedIndex + 1));
    this.imgList[0].style.display = 'block';
  }

  switchIndex(idx) {
    if(idx < 0) {
      this.displayedIndex = this.imgList.length - 1;
    } else if (idx > this.imgList.length - 1) {
      this.displayedIndex = 0;
    } else {
      this.displayedIndex = idx;
    }

    this.imgList.forEach(i => i.style.display = 'none');
    this.imgList[this.displayedIndex].style.display = 'flex';
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/