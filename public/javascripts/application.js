(function(d) {
  var target;
  var grid = d.getElementById('card-small-grid');
  var voted = d.getElementById('card-large-voted');
  var cards = d.getElementsByTagName('div');
  var i = cards.length;

  function handle_click() {
    if (this.className === 'card-small') {
      target = this.getAttribute('data-target');
      grid.style.display = 'none';
      voted.style.display = 'block';
    }
    else if (this.id === 'card-large-voted') {
      voted.style.display = 'none';
      d.getElementById(target).style.display = 'block';
      target = null;
    }
    else if (this.className === 'card-large') {
      this.style.display = 'none';
      grid.style.display = '';
    }
  }

  while (i--) {
    cards[i].onclick = handle_click;
  }
})(this.document);