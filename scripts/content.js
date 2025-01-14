let posts = document.querySelectorAll(".update-components-text");
let main = document.querySelector(".scaffold-finite-scroll__content");
let config = { childList: true, characterData: true, subtree: true };

const checkForRestrictedWords = (text, post) => {
  if (!text) {
    return;
  }

  if (text.innerText.includes(" AI ")) {
    console.log("post includes restricted word");
    console.log(text.innerText);
    post.classList.add("hide");
  }
};

const callback = (mutationList, observer) => {
  mutationList.forEach((mutation) => {
    if (mutation.target.classList.contains("feed-shared-update-v2")) {
      let container = mutation.target;
      let update = container.querySelector(".update-components-text");
      console.log("update", update);
      checkForRestrictedWords(update, container);
    }
  });
};

const observer = new MutationObserver(callback);

observer.observe(main, config);
