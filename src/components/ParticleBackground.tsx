import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color(0x28A78A); // Teal
    const color2 = new THREE.Color(0x3DBAAC); // Lighter teal
    const color3 = new THREE.Color(0x1E8B7A); // Darker teal

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      // Random color between our teal shades
      const mixedColor = Math.random() < 0.5 
        ? color1.clone().lerp(color2, Math.random())
        : color2.clone().lerp(color3, Math.random());
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      // Size
      sizes[i] = Math.random() * 1.5 + 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.8,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create grid lines
    const gridSize = 50;
    const gridDivisions = 20;
    const gridColor = new THREE.Color(0x28A78A);
    
    // Horizontal grid
    const gridGeometry = new THREE.PlaneGeometry(gridSize, gridSize, gridDivisions, gridDivisions);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: gridColor,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = Math.PI / 2;
    grid.position.y = -15;
    scene.add(grid);

    // Vertical grid
    const verticalGrid = new THREE.Mesh(gridGeometry, gridMaterial.clone());
    verticalGrid.position.z = -30;
    scene.add(verticalGrid);

    camera.position.z = 30;

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;

      // Rotate particles slowly
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      // Subtle camera movement based on mouse
      camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
      camera.position.y += (targetY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Animate grid
      grid.position.y = -15 + Math.sin(Date.now() * 0.0005) * 2;
      verticalGrid.position.z = -30 + Math.sin(Date.now() * 0.0003) * 3;

      // Animate individual particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.002;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
