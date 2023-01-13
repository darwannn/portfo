export function scrollPosition(scrollStart) {
    let scrollValue = window.scrollY;
    if(scrollValue >= scrollStart) {
      return  scrollValue-scrollStart;
    }
}