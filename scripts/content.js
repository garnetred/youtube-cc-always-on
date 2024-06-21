let button = document.querySelector('[aria-pressed=false]');
let body = document.querySelector("body");
let config = { childList: true };

 let counter = 0;

const callback = (mutationList, observer) => {
  mutationList.forEach((mutation) => {
    console.log(button)
    if (button.classList.contains('ytp-subtitles-button') && counter === 0) {
      counter++
      button.click()
      console.log('in button click', counter)
      observer.disconnect();
    } else {
      observer.disconnect()
    }
  });
};

const observer = new MutationObserver(callback);

observer.observe(body, config);
