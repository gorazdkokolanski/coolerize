document.addEventListener("DOMContentLoaded", () => {
    const h1           = document.querySelector("h1");
    const mainPara     = document.querySelector(".box-paragraph");
    const phoneticPara = document.querySelector(".tnr-paragraph");
    const cta          = document.querySelector(".cta");
    const choices      = document.querySelector(".choices");
  
    const sequence = [
      { el: h1,           text: "COOLERIZE",                                                                       speed: 50 },
      { el: mainPara,     text: "(verb): To level up humans, ideas, and businesses - upgrading them to peak coolness.", speed: 10  },
      { el: phoneticPara, text: "cool·er·ize /ˈkooləˌrīz/",                                                           speed: 10  },
    ];
  
    // clear initial content and ensure CTA is hidden
    sequence.forEach(item => item.el.textContent = "");
    cta.classList.remove("visible");
  
    function typeSequence(idx) {
      // if we’ve run out of things to type, show the button
      if (idx >= sequence.length) {
        cta.classList.add("visible");
        setTimeout(() => {
            cta.classList.add("animated")
                choices.classList.add("visible");
                choices.classList.remove("invisible");
        }, 1000);
        return;
      }
  
      const { el, text, speed } = sequence[idx];
      let i = 0;
  
      function typeChar() {
        if (i < text.length) {
          el.textContent += text[i++];
          setTimeout(typeChar, speed);
        } else {
          // slight pause, then move on to next element
          setTimeout(() => typeSequence(idx + 1), 300);
        }
      }
  
      typeChar();
    }
  
    // start after your 1.8s intro delay
    setTimeout(() => typeSequence(0), 1800);
  });
  