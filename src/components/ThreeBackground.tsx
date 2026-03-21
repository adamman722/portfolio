import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if WebGL is supported
    const canvas = document.createElement("canvas");
    const webgl = !!(
      window.WebGLRenderingContext && canvas.getContext("webgl")
    );
    if (!webgl) {
      console.warn("WebGL not supported");
      return;
    }

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);

      // Camera
      const width = window.innerWidth;
      const height = window.innerHeight;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      container.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
      scene.add(ambientLight);

      // Main spotlight
      const spotLight = new THREE.SpotLight(0xff1493, 120);
      spotLight.position.set(4, 4, 3);
      spotLight.angle = Math.PI / 5;
      spotLight.penumbra = 0.8;
      spotLight.decay = 2;
      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.far = 15;
      scene.add(spotLight);

      // Secondary spotlight
      const spotLight2 = new THREE.SpotLight(0xff4444, 80);
      spotLight2.position.set(-3, 3, 2);
      spotLight2.angle = Math.PI / 6;
      spotLight2.penumbra = 0.6;
      spotLight2.decay = 2;
      scene.add(spotLight2);

      // Load Lucy model from local assets
      const plyLoader = new PLYLoader();
      let lucyMesh: THREE.Mesh | null = null;
      const objects: THREE.Mesh[] = [];

      plyLoader.load(
        "/Lucy100k.ply",
        (geometry) => {
          geometry.computeVertexNormals();
          geometry.scale(0.0024, 0.0024, 0.0024);
          geometry.center();

          const lucyMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            metalness: 0.5,
            roughness: 0.4,
            emissive: 0x330055,
            emissiveIntensity: 0.2,
          });

          lucyMesh = new THREE.Mesh(geometry, lucyMaterial);
          lucyMesh.castShadow = true;
          lucyMesh.receiveShadow = true;
          lucyMesh.position.y = -0.3;
          lucyMesh.scale.set(2, 2, 2);
          lucyMesh.userData = { rotationSpeed: 0.002 };
          scene.add(lucyMesh);
          objects.push(lucyMesh);
        },
        undefined,
        (error) => {
          console.error("Failed to load Lucy model:", error);
          // Fallback: create geometric shapes if model fails
          createFallbackShapes();
        },
      );

      // Fallback function with geometric shapes
      function createFallbackShapes() {
        const geometries = [
          new THREE.IcosahedronGeometry(1, 4),
          new THREE.OctahedronGeometry(1, 2),
          new THREE.DodecahedronGeometry(0.8, 0),
        ];

        const material = new THREE.MeshStandardMaterial({
          color: 0x1a1a2e,
          metalness: 0.7,
          roughness: 0.3,
          emissive: 0x330055,
          emissiveIntensity: 0.3,
        });

        for (let i = 0; i < 3; i++) {
          const geometry = geometries[i];
          const mesh = new THREE.Mesh(geometry, material);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.position.set(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 3,
          );
          mesh.userData = {
            rotationSpeed: Math.random() * 0.01 + 0.001,
            initialY: mesh.position.y,
          };
          scene.add(mesh);
          objects.push(mesh);
        }
      }

      // Ground plane
      const groundGeometry = new THREE.PlaneGeometry(30, 30);
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a0a0a,
        metalness: 0.3,
      });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.position.z = -6;
      ground.receiveShadow = true;
      scene.add(ground);

      // Animation
      let animationId: number;
      const startTime = Date.now();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const elapsed = (Date.now() - startTime) * 0.0003;

        // Animate floating objects
        objects.forEach((obj, i) => {
          const data = obj.userData;
          if (data.rotationSpeed) {
            obj.rotation.y += data.rotationSpeed;
            if (data.initialY !== undefined) {
              const floatAmount = data.floatAmount || 0.2;
              obj.position.y =
                data.initialY + Math.sin(elapsed + i) * floatAmount;
            }
          }
        });

        // Move spotlights in circular pattern
        spotLight.position.x = Math.cos(elapsed) * 6;
        spotLight.position.z = Math.sin(elapsed) * 6;
        spotLight.position.y = 2 + Math.sin(elapsed * 0.5) * 2;

        spotLight2.position.x = Math.cos(elapsed + Math.PI) * 5;
        spotLight2.position.z = Math.sin(elapsed + Math.PI) * 5;

        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        groundGeometry.dispose();
        groundMaterial.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error("Three.js initialization error:", error);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
};
