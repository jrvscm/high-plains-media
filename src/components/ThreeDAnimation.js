import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

const ThreeDUfo = () => {
  const mountRef = useRef(null);
  const ufoRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseMove = (event) => {
    if (ufoRef.current && !isAnimating) { // Only react to mouse if not animating
      const mouseX = (event.clientX / window.innerWidth - 0.5) * 0.6;
      const mouseY = (event.clientY / window.innerHeight - 0.5) * 0.6;

      gsap.to(ufoRef.current.position, {
        x: mouseX,
        y: mouseY + 5, 
        duration: 0.2,
        ease: 'power1.out'
      });
    }
  };

  const flyIn = () => {
    if (ufoRef.current) {
      setIsAnimating(true); // Start animation
      gsap.to(ufoRef.current.position, { 
        x: 0, 
        y: 5, 
        z: 0, 
        duration: 2, 
        ease: 'power2.out',
        onComplete: () => setIsAnimating(false) // End animation
      });
    }
  };

  const flyOut = () => {
    if (ufoRef.current) {
      setIsAnimating(true); // Start animation
      gsap.to(ufoRef.current.position, {
        x: window.innerWidth / 1.5,
        y: window.innerHeight / 2,
        z: -20,
        duration: 2,
        ease: 'power2.in',
        onComplete: () => setIsAnimating(false) // End animation
      });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= pageHeight - 10) {
      flyOut();
    } else if (scrollTop < 10) {
      flyIn();
    }
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      '/images/UFO.glb',
      (gltf) => {
        const ufo = gltf.scene;
        ufoRef.current = ufo;
        
        ufo.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        ufo.position.set(window.innerWidth / 1.5, window.innerHeight / 2, -10);
        ufo.scale.set(2, 2, 2);
        scene.add(ufo);

        // Delay the initial flyIn by 1200ms
        setTimeout(flyIn, 1200);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        const animate = () => {
          requestAnimationFrame(animate);
          ufo.rotation.y += 0.02; 
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model', error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 15, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const circleGeometry = new THREE.CircleGeometry(4, 32);
    const circleMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.rotation.x = -Math.PI / 2;
    circle.position.set(0, -2, 0);
    circle.receiveShadow = true;
    scene.add(circle);

    camera.position.set(0, 4, 12);

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '400px', 
      }}
    />
  );
};

export default ThreeDUfo;
