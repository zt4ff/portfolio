"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"

// Simple animated cube component
function AnimatedCube(props) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || "#6366f1"} />
    </mesh>
  )
}

// Simple animated sphere component
function AnimatedSphere(props) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color={props.color || "#ec4899"} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

// Simple animated torus component
function AnimatedTorus(props) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.z += delta * 0.3
    }
  })

  return (
    <mesh {...props} ref={meshRef}>
      <torusGeometry args={[0.6, 0.2, 16, 32]} />
      <meshStandardMaterial color={props.color || "#22c55e"} metalness={0.3} roughness={0.4} />
    </mesh>
  )
}

// Simple floating text component
function FloatingText({ position, text, color = "#ffffff" }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <textGeometry args={[text, { size: 0.3, height: 0.05 }]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

export default function CreativeSection() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Interactive</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Creative Showcase</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my tech stack in 3D. Drag to rotate and zoom to explore.
            </p>
          </div>
        </div>

        <div className="mt-8 h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden border">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />

              <group>
                <AnimatedCube position={[-2, 0, 0]} color="#6366f1" />
                <AnimatedSphere position={[0, 0, 0]} color="#ec4899" />
                <AnimatedTorus position={[2, 0, 0]} color="#22c55e" />

                {/* Simple text labels using meshes */}
                <mesh position={[-2, -1.5, 0]}>
                  <planeGeometry args={[1.5, 0.5]} />
                  <meshBasicMaterial color="#111111" opacity={0.7} transparent />
                </mesh>
                <mesh position={[0, -1.5, 0]}>
                  <planeGeometry args={[1.5, 0.5]} />
                  <meshBasicMaterial color="#111111" opacity={0.7} transparent />
                </mesh>
                <mesh position={[2, -1.5, 0]}>
                  <planeGeometry args={[1.5, 0.5]} />
                  <meshBasicMaterial color="#111111" opacity={0.7} transparent />
                </mesh>
              </group>

              <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={1}
                enableZoom={true}
                enablePan={false}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
              />

              {/* Simple environment */}
              <color attach="background" args={["#000010"]} />
            </Suspense>
          </Canvas>
        </div>

        <div className="flex justify-center mt-4">
          <Button variant="outline" onClick={() => setAutoRotate(!autoRotate)} className="text-sm">
            {autoRotate ? "Pause Rotation" : "Resume Rotation"}
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>This interactive 3D scene demonstrates my frontend development skills with React Three Fiber and WebGL.</p>
          <p className="mt-2">Try dragging to rotate the view and explore the 3D objects!</p>
        </div>
      </div>
    </section>
  )
}
