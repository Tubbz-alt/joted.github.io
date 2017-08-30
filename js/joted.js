var $ = function(id) { return document.getElementById(id); }

window.onbeforeunload = (function () {
  localStorage.setItem('_joted', $('editor').value);
});

window.onload = function() {
  $('editor').style.display='block';
  $('editor').value = localStorage.getItem('_joted');
  $('editor').focus();
  
  $('saveButton').onclick = function() {
    var newLine = String.fromCharCode(13, 10);
    var content = $('editor').value;
    content = content.replace(new RegExp('\\n', 'g'), newLine);
    var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'joted.txt');
  }
  
  $('aboutButton').onclick = function() {
    var editMode=$('editor').style.display==='block';
    if (editMode) {
      $('editor').style.display='none';
      $('about').style.display='block';
    }
    else {
      $('editor').style.display='block';
      $('about').style.display='none';
    }
  }

  $('closeButton').onclick = function() {
    $('editor').style.display='block';
    $('about').style.display='none';
  }

}
