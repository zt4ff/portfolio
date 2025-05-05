"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Animated cube component
function Cube({ position, size = 1, color = "#6366f1", speed = 1 }) {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5 * speed
    mesh.current.rotation.y += delta * 0.7 * speed
  })

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// Animated sphere component
function Sphere({ position, size = 0.75, color = "#ec4899", speed = 1 }) {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * speed
    mesh.current.rotation.z += delta * 0.5 * speed
  })

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
    </mesh>
  )
}

// Animated torus component
function Torus({ position, size = 0.5, color = "#22c55e", speed = 1 }) {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5 * speed
    mesh.current.rotation.y += delta * 0.2 * speed
    mesh.current.rotation.z += delta * 0.3 * speed
  })

  return (
    <mesh position={position} ref={mesh}>
      <torusGeometry args={[size, size / 3, 16, 32]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </mesh>
  )
}

// Main scene component
function Scene({ autoRotate }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (autoRotate) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <group ref={groupRef}>
        <Cube position={[-2, 0, 0]} color="#6366f1" />
        <Sphere position={[0, 1.5, 0]} color="#ec4899" />
        <Torus position={[2, -0.5, 0]} color="#22c55e" />
        <Cube position={[-1.5, -1.5, 1]} size={0.7} color="#f59e0b" speed={1.5} />
        <Sphere position={[1.5, 0.5, -1]} size={0.5} color="#3b82f6" speed={0.8} />
      </group>

      <OrbitControls enableZoom={true} enablePan={false} />
    </>
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
              Interactive 3D visualization showcasing my frontend development skills.
            </p>
          </div>
        </div>

        <div className="mt-8 h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden border bg-gradient-to-b from-black to-slate-900">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <Suspense fallback={null}>
              <Scene autoRotate={autoRotate} />
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
