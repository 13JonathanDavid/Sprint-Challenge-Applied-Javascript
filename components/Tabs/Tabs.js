
function filterTopics(tagname) {
  let cards = document.querySelectorAll('.card');
  
  cards.forEach((e) => (e.dataset.tab === tagname || tagname ==='all') ? e.classList.remove('card--close') : e.classList.add('card--close'));
};

document.querySelectorAll('.tab').forEach( (e) => (
  e.addEventListener("click", () => filterTopics(e.dataset.tab))
));
filterTopics('javascript');