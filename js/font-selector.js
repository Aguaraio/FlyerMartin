function updateh1family() {
  var selector = document.getElementById('selecth1FontFamily');
  var family = selector.options[selector.selectedIndex].value;
  var h1 = document.getElementById('drag1')
  h1.style.fontFamily = family;
}
