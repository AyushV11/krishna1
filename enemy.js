class Enemy{
    constructor(x,y){
this.body = createSprite(x,y)
this.image=loadImage("cart.png")
this.body.addImage(this.image)
this.body.scale=0.5
    }
}