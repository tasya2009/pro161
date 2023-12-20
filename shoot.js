AFRAME.registerComponent('bullets',
{
    init: function(){
        this.shootBullet();
    },
    
    shootBullet: function(){
        window.addEventListener("keydown",(e)=>{
            var bullet = document.createElement("a-entity");
            bullet.setAttribute("geometry", {primitive:"sphere", radius:0.1});

            bullet.setAttribute("material", "color","black");
            var cam = document.querySelector("#camera");
            var pos = cam.getAttribute("position");
            bullet.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z});
            var scene = document.querySelector("#scene");
            var camera = document.querySelector('#camera').object3D;
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
            bullet.setAttribute("velocity", direction.multiplyScalar(-15));
            scene.appendChild(bullet);
        })
    }
})
