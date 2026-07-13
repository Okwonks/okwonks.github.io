import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

import Box from './Box';

export default function Hero() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseTargetRef = useRef({ x:0, y:0 });
  const timeRef = useRef(0);

  useEffect(() => {
    if(!mountRef.current) return;

    // setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const shapes = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.5, 8),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.9),
    ];

    const material = new THREE
      .MeshBasicMaterial({ color:0x64ffda, wireframe:true, transparent:true, opacity:0.6 });

    const meshes = [], numShapes = 15;
    for(let i = 0; i < numShapes; i++) {
      const geometry = shapes[Math.floor(Math.random() * shapes.length)];
      const mesh = new THREE.Mesh(geometry, material);

      const initialX = (Math.random() - 0.5) * 20;
      const initialY = (Math.random() - 0.5) * 20;
      const initialZ = (Math.random() - 0.5) * 20;

      mesh.position.x = initialX;
      mesh.position.y = initialY;
      mesh.position.z = initialZ;

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      const scale = Math.random() * 0.5 + 0.5;
      mesh.scale.setScalar(scale);

      scene.add(mesh);
      meshes.push({
        mesh,
        initialPosition: { x:initialX, y:initialY, z:initialZ },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.005 + 0.002,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    const particalGeometry = new THREE.BufferGeometry(), particleCount = 200;
    const particleCount3x = particleCount * 3;
    const positions = new Float32Array(particleCount3x);
    for(let idx in positions) {
      positions[idx] = (Math.random() - 0.5) * 50;
    }

    particalGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particalMaterial = new THREE
      .PointsMaterial({ color:0x64ffda, size:0.05, transparent:true, opacity:0.8 });

    const particles = new THREE.Points(particalGeometry, particalMaterial);
    scene.add(particles); 

    camera.position.z = 10;
    sceneRef.current = { scene, camera, renderer, meshes, particles };

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      timeRef.current += 0.016;

      meshes.forEach(el => {
        const { mesh, initialPosition, rotationSpeed, floatSpeed, floatOffset } = el;

        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;

        mesh.position.x = initialPosition.x + Math.cos(timeRef.current * floatSpeed + floatOffset) * 0.005;
        mesh.position.y = initialPosition.y + Math.sin(timeRef.current * floatSpeed + floatOffset) * 0.01;
      });

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      camera.position.x += (mouseTargetRef.current.x - camera.position.x) * 0.05;
      camera.position.y += (mouseTargetRef.current.y - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = event => {
      if(!sceneRef.current) return;

      const mouseX = (event.clientX / window.innerWidth)  * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseTargetRef.current.x = mouseX * 10;
      mouseTargetRef.current.y = mouseY * 8;
    };

    const handleResize = () => {
      if(!sceneRef.current) return;

      sceneRef.current.camera.aspect = window.innerWidth / window.innerHeight;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if(animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if(mountRef.current && renderer.domElement) mountRef.current.removeChild(renderer.domElement);

      shapes.forEach(geo => geo.dispose());
      material.dispose();
      particalGeometry.dispose();
      particalMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <Box className="max-w-6xl mx-auto px-6">
        <Box className="max-w-4xl">
          <h1 className="font-medium md:text-[60px] sm:text-[50px] text-[40px] ">
            ALBERT OKETCH
          </h1>
        </Box>
        <Box className="">
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition:{
                  staggerChildren: 0.25,
                }
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount:0.5 }}
          >
            {['Building scalable systems.', 'Empowering teams.', 'Solving complex problems.']
              .map((text, idx) => (
                <motion.p
                  key={idx}
                  variants={textVariants()}
                  className="relative leading-relaxed sm:text-xl overflow-hidden"
                >
                  <span className="relative z-10">{text}</span>
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none select-none"
                    style={{
                      textShadow: `
                        0 0 6px rgba(255,255,255,0.8),
                        0 0 12px rgba(255,255,255,0.6),
                        0 0 20px rgba(255,255,255,0.4)
                      `,
                      filter: 'brightness(1.2)',
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration:4, ease:'easeInOut', repeat:Infinity, repeatDelay:1.5 }}
                    animate={{opacity: [0, 1, 1, 0]}}
                  >{text}</motion.span>
                </motion.p>
              ))}
          </motion.div>
        </Box>
      </Box>
      <Box ref={mountRef} style={styles.threeCanvas} />
    </section>
  );
}

const textVariants = () => ({
  hidden: { y:50, opacity:0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type:'spring', duration:1.25 },
  },
});

const styles = {
  threeCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.7
  },
};
