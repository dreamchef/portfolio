function populateMusic() {

    var musicCard, fileName, filePath;
    for (var i=0; i < data.photos.photo.length; i++) {
        fileName = 
        filePath = 
        '<div class="card" style="width: 15rem; margin: 1rem;">' +
            '<div class="card-body">' +
                '<p class="card-text text-center">' + fileName + '</p>' +
                '<audio controls preload="metadata" style=" width:100%;">' +
                    '<source src="' + filePath + '" type="audio/mpeg">' +
                    'Your browser does not support the audio element.' +
                '</audio><br />' +
            '</div>' +
        '</div>';
        musicCard = new DOMParser().parseFromString(musicCard, "text/html");
        document.getElementById("musicDiv").appendChild(musicCard.firstChild);
    }

}

$(document).ready(makeApiCall());