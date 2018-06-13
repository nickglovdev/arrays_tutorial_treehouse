var playList = [
  "I did it my way",
  "Respect",
  "imagine",
  "Born to Run",
  'Loui Loui',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList (list) {
  var listHTML = '<ol>';
  for(var i = 0; i < list.length; i++) {
    listHTML += "<li>" + list[i] + "</li>";
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList)
