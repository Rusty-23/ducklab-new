
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { MapControls } from 'three/addons/controls/MapControls.js';

const scene = new THREE.Scene();
const zoom = 50;
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 1000

const camera = new THREE.PerspectiveCamera(zoom, aspect, near, far);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer.setClearColor(0x000000, 0);

const homeImg = document.querySelector('.home-img');
homeImg.appendChild(renderer.domElement);

const widthSegments = 2

const cubeConfigs = [

    {
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        size: {
            width: 7,
            height: 7,
            depth: 7
        },
        textures: [
            './assets/img/duck.png',
            './assets/img/duck.png',
            './assets/img/duck.png',
            './assets/img/duck.png',
            './assets/img/duck.png',
            './assets/img/duck.png',
        ]
    }
]


function generateCubes(qty) {

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#01924B"),
        transparent: true,
        opacity: 0.1,
    });

    const cubes = []
    for (let i = 0; i < qty; i++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = (Math.random() - 0.5) * 20;
        cube.position.y = (Math.random() - 0.5) * 20;
        cube.position.z = (Math.random() - 0.5) * 20;
        scene.add(cube);

        cubes.push(cube)
    }

    return cubes
}

const backgroundCubes = generateCubes(40)
const backgroundCubes2 = generateCubes(30)

const mainCubes = cubeConfigs.map(({
    position,
    size,
    textures
}) => {
    const geometry = new THREE.BoxGeometry(size.width, size.height, size.depth, widthSegments);
    // const material = new THREE.MeshBasicMaterial({ color: new THREE.Color("#01924B") });


    const materials = textures.map((texture) => {
        const textureMap = new THREE.TextureLoader().load(texture);
        return new THREE.MeshBasicMaterial({ map: textureMap });
    });

    const cube = new THREE.Mesh(geometry, materials);

    // cube.position.x = position.x
    // cube.position.y = position.y
    // cube.position.z = position.z

    scene.add(cube);
    return cube
})



// const controls = new OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

controls.minDistance = 15;
controls.maxDistance = 20;
camera.position.set(-20, -10, -5);
controls.update();

let angle = 0;
function animate() {
    requestAnimationFrame(animate);
    controls.update();

    mainCubes.forEach((cube) => {
        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    })

    const radius = 10
    backgroundCubes.forEach((cube, i) => {
        
        const scale = Math.abs(Math.sin(Date.now() * 0.001));
        cube.scale.set(scale, scale, scale);

        // angle += 0.01;

        // const path = (Math.random * 10) / 2
        // cube.position.x = radius * Math.cos(angle + i * (5 * Math.PI / backgroundCubes.length));
        // cube.position.y = radius * Math.sin(angle + i * (5 * Math.PI / backgroundCubes.length));
        // // cube.rotation.x += 0.01;
        // // cube.rotation.y += 0.01;
    })
    backgroundCubes2.forEach((cube, i) => {
        
        const scale = Math.abs(Math.cos(Date.now() * 0.001));
        cube.scale.set(scale, scale, scale);

        // angle += 0.01;

        // const path = (Math.random * 15) / 2
        // cube.position.x = radius * Math.cos(angle + i * (10 * Math.PI / backgroundCubes.length));
        // cube.position.y = radius * Math.sin(angle + i * (10 * Math.PI / backgroundCubes.length));
        // // cube.rotation.x += 0.01;
        // // cube.rotation.y += 0.01;
    })

    renderer.render(scene, camera);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
}
// function onWindowResize() {
//     const minWidth = 5; // minimum size of the box
//     const maxWidth = 7; // maximum size of the box
//     const aspect = window.innerWidth / window.innerHeight;

//     // limit the width of the box based on the window size
//     const width = THREE.MathUtils.clamp(window.innerWidth / 2, minWidth, maxWidth);
//     const height = width / aspect;

//     camera.aspect = aspect;
//     camera.updateProjectionMatrix();
//     renderer.setSize(width, height);
// }



window.addEventListener('resize', onWindowResize, false);

animate();
