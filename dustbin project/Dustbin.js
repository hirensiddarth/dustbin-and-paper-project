class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
			this.body=Bodies.rectangle(x, y, w, h , options);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
            
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			
			fill("red")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}