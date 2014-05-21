//= require ace/ace

var defaultCode = $( "#editor" ).text()

var editor = ace.edit("editor");

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/python");
editor.getSession().setValue(defaultCode);
document.getElementById('editor').style.fontSize='12px';
editor.setShowPrintMargin(false);


