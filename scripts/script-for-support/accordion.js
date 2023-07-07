window.addEventListener("load", () => {
    test = localStorage.getItem("name");
    if(test == 'terms'){
                accordionItemHeaders[2].classList.toggle("active");
                const accordionItemBody = accordionItemHeaders[2].nextElementSibling;
                if(accordionItemHeaders[2].classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                accordionItemBody.style.maxHeight = 0;
                }
            }else  if(test == 'return'){
                accordionItemHeaders[1].classList.toggle("active");
                const accordionItemBody = accordionItemHeaders[1].nextElementSibling;
                if(accordionItemHeaders[1].classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                accordionItemBody.style.maxHeight = 0;
                }
            }else if(test == 'payments'){
                accordionItemHeaders[0].classList.toggle("active");
                const accordionItemBody = accordionItemHeaders[0].nextElementSibling;
                if(accordionItemHeaders[0].classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                accordionItemBody.style.maxHeight = 0;
                }
            }
  });

function activeAccordion(event){
    localStorage.setItem("name", event);
}

// Accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

