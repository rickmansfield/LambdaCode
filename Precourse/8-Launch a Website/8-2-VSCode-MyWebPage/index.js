function changeColors() {
    var image = document.getElementById('lambda');
    if (image.src.match("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1815011/lambda-green.png")) {
      image.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1815011/lambda-red.png";
    } else {
      image.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1815011/lambda-green.png";
    }
  }