import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

const ThreeDUfo = ({ setHovered, isMobile }) => {
  const mountRef = useRef(null);
  const ufoRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    isDragging.current = true;
    previousMousePosition.current = {
      x: event.clientX,
      y: event.clientY
    };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleDragMove = (event) => {
    if (ufoRef.current && isDragging.current) {
      const deltaX = event.clientX - previousMousePosition.current.x;
      const deltaY = event.clientY - previousMousePosition.current.y;

      // Update the UFO rotation based on dragging movement
      ufoRef.current.rotation.y += deltaX * 0.01;
      ufoRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    }
  };

  const flyIn = () => {
    if (ufoRef.current) {
      setIsAnimating(true);
      gsap.killTweensOf(ufoRef.current.position);
      gsap.to(ufoRef.current.position, { 
        x: 0, 
        y: 5, 
        z: 0, 
        duration: 2, 
        ease: 'power2.out',
        onComplete: () => {
          setIsAnimating(false);
          float();
        }
      });
    }
  };

  const flyOut = () => {
    if (ufoRef.current) {
      setIsAnimating(true);
      gsap.killTweensOf(ufoRef.current.position);
      gsap.to(ufoRef.current.position, {
        x: isMobile ? window.innerWidth / 1.05 : window.innerWidth / 1.1,
        y: isMobile ? window.innerHeight / 2.5 : window.innerHeight / 1.8,
        z: -20,
        duration: 2,
        ease: 'power2.in',
        onComplete: () => setIsAnimating(false)
      });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollThreshold = isMobile ? window.innerHeight * 0.1 : 50;

    if (scrollTop > scrollThreshold) {
      flyOut();
    } else if (scrollTop < 10) {
      flyIn();
    }
  };

  const float = () => {
    if (ufoRef.current) {
      gsap.to(ufoRef.current.position, {
        y: '+=0.5',
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
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

        ufo.position.set(isMobile ? window.innerWidth / 2 : window.innerWidth / 1.5, window.innerHeight / 2, -10);
        ufo.scale.set(isMobile ? 1 : 2, isMobile ? 1 : 2, isMobile ? 1 : 2);
        scene.add(ufo);

        setTimeout(flyIn, 1200);
        window.addEventListener('mousemove', handleDragMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

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

    const circleGeometry = new THREE.CircleGeometry(isMobile ? 6 : 4, 32); // Increase shadow size for mobile
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
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  return (
    <div
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      ref={mountRef}
      style={{
        'margin-top': isMobile ? '-50px' : 0,
        width: '100%',
        height: isMobile ? '600px' : '400px', 
      }}
    />
  );
};

export default ThreeDUfo;
