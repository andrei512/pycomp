//= require ace/ace

var defaultCode = $( "#defaultCode" ).data('code')

var editor = ace.edit("editor");

editor.setTheme("ace/theme/monokai");
document.getElementById('editor').style.fontSize='12px';
editor.getSession().setMode("ace/mode/python");
editor.setShowPrintMargin(false);
editor.getSession().setValue(defaultCode);


// ace.require("ace/ext/language_tools");
editor.setOptions({
    enableBasicAutocompletion: true
});

// editor.commands.on("afterExec", function(e){
//      if (e.command.name == "insertstring"&&/^[\w.]$/.test(e.args)) {
//          editor.execCommand("startAutocomplete")
//      }
// })


