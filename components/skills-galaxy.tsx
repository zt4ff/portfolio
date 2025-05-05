"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text,
  Float,
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  GradientTexture,
  Sphere,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import { Vector3, MathUtils } from "three";

// Custom hook for detecting mobile devices
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

// Skill node component
function SkillNode({ skill, idx, total, radius = 4 }) {
  // Calculate position on a sphere
  const phi = Math.acos(-1 + (2 * idx) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  // Convert to Cartesian coordinates
  const x = radius * Math.cos(theta) * Math.sin(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(phi);

  // Random rotation speed
  const rotSpeed = useMemo(() => MathUtils.randFloat(0.5, 1.5), []);

  // Reference to the group
  const groupRef = useRef();

  // Colors based on category
  const getColor = () => {
    const category = skill.category;
    switch (category) {
      case "frontend":
        return "#6366f1";
      case "backend":
        return "#ec4899";
      case "database":
        return "#22c55e";
      case "devops":
        return "#f59e0b";
      case "tools":
        return "#3b82f6";
      case "architecture":
        return "#8b5cf6";
      default:
        return "#ffffff";
    }
  };

  // Animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1 * rotSpeed;
      groupRef.current.rotation.y += delta * 0.15 * rotSpeed;
    }
  });

  return (
    <Float
      position={[x, y, z]}
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={groupRef}>
        <Sphere args={[0.2, 16, 16]}>
          <MeshDistortMaterial
            color={getColor()}
            speed={2}
            distort={0.3}
            radius={1}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
        <Text
          position={[0, 0.4, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

// Core sphere component
function CoreSphere({ radius = 1.5 }) {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1;
      sphereRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[radius, 64, 64]}>
      <meshPhysicalMaterial
        roughness={0.1}
        metalness={0.9}
        color="#000000"
        emissive="#000000"
        clearcoat={1}
        clearcoatRoughness={0.1}
      >
        <GradientTexture
          stops={[0, 0.2, 0.4, 0.6, 1]}
          colors={["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#6366f1"]}
          size={100}
        />
      </meshPhysicalMaterial>
    </Sphere>
  );
}

// Orbital lines
function OrbitalLines() {
  const linesRef = useRef();

  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.rotation.z += delta * 0.05;
      linesRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={linesRef}>
      {[0, 1, 2].map((idx) => (
        <mesh key={idx} rotation={[0, 0, Math.PI / (idx + 1)]}>
          <torusGeometry args={[4, 0.02, 16, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

// Mouse follower light
function MouseLight() {
  const lightRef = useRef();
  const vec = new Vector3();

  useFrame(({ mouse, viewport }) => {
    if (lightRef.current) {
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        3
      );
      lightRef.current.position.lerp(vec, 0.1);
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 3]}
      intensity={1}
      color="#ffffff"
    />
  );
}

// Main scene component
function SkillsScene() {
  // Skills data with categories
  const skills = [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "Tailwind", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "NestJS", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "Redis", category: "database" },
    { name: "AWS", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "CI/CD", category: "devops" },
    { name: "Git", category: "tools" },
    { name: "Jest", category: "tools" },
    { name: "Cypress", category: "tools" },
    { name: "Microservices", category: "architecture" },
    { name: "Serverless", category: "architecture" },
  ];

  // Scene rotation
  const sceneRef = useRef();

  useFrame((state, delta) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 5, 20]} />

      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <MouseLight />

      <group ref={sceneRef}>
        <CoreSphere />
        <OrbitalLines />
        {skills.map((skill, idx) => (
          <SkillNode
            key={skill.name}
            skill={skill}
            idx={idx}
            total={skills.length}
          />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />

      <Environment preset="city" />
    </>
  );
}

// Client component wrapper
function SkillsGalaxyClient() {
  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden border bg-[#050816]">
      <Canvas>
        <Suspense fallback={null}>
          <SkillsScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Main component with client-side check
export default function SkillsGalaxy() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Client-side only code
  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return null on server or when not mounted
  if (!isMounted) {
    return (
      <section className="py-16 md:py-24 hidden md:block">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Interactive
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Skills Galaxy
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore my technical skills in an interactive 3D environment.
              </p>
            </div>
          </div>
          <div className="mt-8 h-[600px] w-full rounded-xl overflow-hidden border bg-[#050816]"></div>
        </div>
      </section>
    );
  }

  // Hide on mobile
  if (isMobile) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 hidden md:block">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Interactive
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills Galaxy
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my technical skills in an interactive 3D environment.
            </p>
          </div>
        </div>

        <SkillsGalaxyClient />

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Drag to rotate the galaxy and explore my technical skills in 3D
            space.
          </p>
          <p className="mt-2">
            Each color represents a different skill category: frontend, backend,
            database, devops, tools, and architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
