import * as THREE from 'three'
import TestSubject from "./TestSubject"

export default ( canvas, container ) => {
    let width = canvas.width;
    let height = canvas.height;

    const clock = new THREE.Clock();
  
    // scene setup
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#eee");

    const renderer = buildRender(width, height);
    const camera = buildCamera(width, height);
    const light = buildLights(scene);
    
    const sceneSubjects = [];
    sceneSubjects.push(new TestSubject(scene));

    function buildRender(width, height) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    function buildCamera(width, height) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 4;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.z = 40;

        return camera;
    }

    function buildLights(scene) {
        const light = new THREE.SpotLight("#2222ff", 100);
        light.position.y = 40;
        light.position.z = 0;
        light.position.x = -40;

        scene.add(light);

        return light;
    }

    function update() {
        for(let i=0; i<sceneSubjects.length; i++)
        	sceneSubjects[i].update(clock.getElapsedTime());

        renderer.render(scene, camera);
    }

    function onWindowResize() {
        width = canvas.width;
        height = canvas.height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    return {
        update,
        onWindowResize
    }
}