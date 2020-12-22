class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<8){
         this.body.visible = true;
        }
        else{
          World.remove(world,this.body);
          push ();
          this.Visibility = this.Visibility - 5
          tint(255,this.Visibility);
         // image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop ();

        //  this.body.visible = true
        }
       }
     }