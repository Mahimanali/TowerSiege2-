class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png");
      this.Visibility = 255;
    }
    display(){
      if(this.body.speed <5){
        var pos= this.body.position;
        //rectMode(CENTER);
     // rect(pos.x,pos.y,this.width, this.height);
      push()
      translate(pos.x , pos.y)
      rotate(this.body.angle)
      imageMode(CENTER);
      image (this.image,0,0,this.width,this.height);
      pop()
      }
      else{
        World.remove(world,this.body)
        push()
          this.Visibility= this.Visibility-5;
          tint(255,this.Visibility)
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
          pop()
      }
    


















      
    }
    
}