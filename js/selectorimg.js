function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
        reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var div = document.createElement('div');
        div.innerHTML = ['<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"><img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), ' "/></div>'].join('');
        document.getElementById('list').insertBefore(div, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
