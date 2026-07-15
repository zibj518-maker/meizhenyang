import { useEffect, useRef } from 'react';

function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let cleanupScene = () => {};

    import('three').then((THREE) => {
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.z = 5.4;
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
      renderer.setSize(mount.clientWidth, mount.clientHeight, false);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      const geometry = new THREE.IcosahedronGeometry(1.45, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0xd9f95b,
        transparent: true,
        opacity: 0.58,
        wireframe: true,
      });
      group.add(new THREE.Mesh(geometry, material));

      const glowGeometry = new THREE.SphereGeometry(1.05, 24, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x7c8f36,
        transparent: true,
        opacity: 0.1,
      });
      group.add(new THREE.Mesh(glowGeometry, glowMaterial));
      scene.add(group);

      const pointsGeometry = new THREE.BufferGeometry();
      const points = new Float32Array(140 * 3);
      for (let i = 0; i < points.length; i += 3) {
        points[i] = (Math.random() - 0.5) * 7;
        points[i + 1] = (Math.random() - 0.5) * 4.6;
        points[i + 2] = (Math.random() - 0.5) * 2.5;
      }
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
      const pointsMaterial = new THREE.PointsMaterial({
        color: 0xf2f0e9,
        size: 0.014,
        transparent: true,
        opacity: 0.45,
      });
      const stars = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(stars);

      const onResize = () => {
        const width = mount.clientWidth;
        const height = mount.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(mount);

      let frameId = 0;
      let isInView = true;
      let pageVisible = !document.hidden;
      const startTime = performance.now();
      const stop = () => {
        if (frameId) cancelAnimationFrame(frameId);
        frameId = 0;
      };
      const animate = () => {
        if (disposed || !isInView || !pageVisible) {
          frameId = 0;
          return;
        }
        const time = (performance.now() - startTime) / 1000;
        group.rotation.x = time * 0.08;
        group.rotation.y = time * 0.16;
        group.position.y = Math.sin(time * 0.7) * 0.08;
        stars.rotation.y = time * 0.012;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      const start = () => {
        if (!frameId && isInView && pageVisible) frameId = requestAnimationFrame(animate);
      };
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) start();
        else stop();
      }, { threshold: 0 });
      visibilityObserver.observe(mount);
      const onVisibilityChange = () => {
        pageVisible = !document.hidden;
        if (pageVisible) start();
        else stop();
      };
      document.addEventListener('visibilitychange', onVisibilityChange);
      start();

      cleanupScene = () => {
        stop();
        visibilityObserver.disconnect();
        document.removeEventListener('visibilitychange', onVisibilityChange);
        resizeObserver.disconnect();
        geometry.dispose();
        material.dispose();
        glowGeometry.dispose();
        glowMaterial.dispose();
        pointsGeometry.dispose();
        pointsMaterial.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      };
    });

    return () => {
      disposed = true;
      cleanupScene();
    };
  }, []);

  return <div ref={mountRef} className="three-scene" aria-hidden="true" />;
}

export default ThreeScene;
