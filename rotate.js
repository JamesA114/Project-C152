AFRAME.registerComponent('rotate-car', {
    schema: {
      rotateY:{type:"number", default:1},
      clickCounter:{type: "number", default:0}
    },
    init: function () {
        
      },
    tick: function(){
        //this.data.rotateY += 1
        //var pos = this.el.getAttribute("rotation")
        //pos.y = this.data.rotateY
        //this.el.setAttribute("rotation", {x:pos.x, y: pos.y, z: pos.z})

    },
    update: function(){
      window.addEventListener("click",e =>{
        this.data.clickCounter += 1
        if(this.data.clickCounter === 1){
          const rotation = {x:-90, y:20, z: 0}
          this.el.setAttribute("rotation", rotation)
        }
        else if(this.data.clickCounter === 2){
          const rotation = {x:-90, y:100, z:0}
          this.el.setAttribute("rotation", rotation)
        }
        else{
          this.data.clickCounter = 0
          const rotation = {x:-90, y:0, z:0}
          this.el.setAttribute("rotation", rotation)
        }
      })
    }
  });
