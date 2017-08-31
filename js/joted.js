var $ = (function(id) { 
  return document.getElementById(id); 
});

window.onload = (function() {
  $('editorText').style.display='block';
  $('editorText').value = localStorage.getItem('_joted');
  $('editorText').focus();
  
  $('saveButton').onclick = function() {
    var newLine = String.fromCharCode(13, 10);
    var content = $('editorText').value;
    content = content.replace(new RegExp('\\n', 'g'), newLine);
    var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'joted.txt');
  }
  
  $('aboutButton').onclick = function() {
    var editMode=$('editorText').style.display==='block';
    if (editMode) {
      $('editorText').style.display='none';
      $('aboutPanel').style.display='block';
    }
    else {
      $('editorText').style.display='block';
      $('aboutPanel').style.display='none';
    }
  }

  $('closeButton').onclick = function() {
    $('editorText').style.display='block';
    $('aboutPanel').style.display='none';
  }
});

window.onbeforeunload = (function () {
  localStorage.setItem('_joted', $('editorText').value);
});

