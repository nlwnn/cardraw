function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    voiture(80,140);
  }
  
  function voiture(x,y) {
    rect(x+45, y, 150, 70);
    rect(x, y+65, 240, 70);
    ellipse(x+45, y+150, 50, 50);
    ellipse(x+195, y+150, 50, 50);
  }
  
  //x = 80
  //y = 140


// En 25mn j'ai réussi à dessiner la voiture.
// J'ai ensuite bloqué sur la fonction pour la déplacer.