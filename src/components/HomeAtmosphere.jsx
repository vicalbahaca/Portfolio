import { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

/* eslint-disable @next/next/no-img-element */

gsap.registerPlugin(ScrollTrigger, useGSAP)

const FLOWER_COUNT = 320
const FLOWER_LAYER_COUNT = 8
const BUBBLE_COUNT = 140
const BUBBLE_LAYER_COUNT = 5

const flowerFilters = [
  'brightness(1.14) saturate(1.6) hue-rotate(44deg)',
  'brightness(1.08) saturate(1.7) hue-rotate(108deg)',
  'brightness(1.1) saturate(1.65) hue-rotate(224deg)',
  'brightness(1.15) saturate(1.55) hue-rotate(344deg)',
  'brightness(1.11) saturate(1.62) hue-rotate(298deg)',
  'brightness(1.08) saturate(1.7) hue-rotate(136deg)',
  'brightness(1.12) saturate(1.58) hue-rotate(12deg)',
]

function seeded(seed) {
  const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123
  return value - Math.floor(value)
}

function createFlowerLayers() {
  const layers = Array.from({ length: FLOWER_LAYER_COUNT }, (_, index) => ({
    id: `flower-layer-${index}`,
    parallaxY: 34 + index * 14,
    parallaxX: (index - FLOWER_LAYER_COUNT / 2) * 4,
    scrub: 0.16 + index * 0.08,
    items: [],
  }))

  for (let index = 0; index < FLOWER_COUNT; index += 1) {
    const layerIndex = index % FLOWER_LAYER_COUNT
    const r1 = seeded(index + 1)
    const r2 = seeded(index + 27)
    const r3 = seeded(index + 101)
    const r4 = seeded(index + 203)
    const r5 = seeded(index + 311)
    const r6 = seeded(index + 401)
    const baseSize = 52 + r3 * 176
    const sizeMultiplier = 1 + r6

    layers[layerIndex].items.push({
      id: `flower-${index}`,
      top: `${-8 + r1 * 116}%`,
      left: `${-10 + r2 * 122}%`,
      size: `${baseSize * sizeMultiplier}px`,
      opacity: 0.14 + r4 * 0.24,
      blur: `${0.4 + r5 * 2.8}px`,
      filter: flowerFilters[index % flowerFilters.length],
      driftX: (r2 > 0.5 ? 1 : -1) * (8 + r4 * 18),
      driftY: (r3 > 0.5 ? 1 : -1) * (6 + r5 * 14),
      rotation: (r1 > 0.5 ? 1 : -1) * 360,
      driftDuration: 18 + r2 * 18,
      spinDuration: 90 + r5 * 80,
      scale: 0.94 + r1 * 0.1,
    })
  }

  return layers
}

function createBubbleLayers() {
  const layers = Array.from({ length: BUBBLE_LAYER_COUNT }, (_, index) => ({
    id: `bubble-layer-${index}`,
    parallaxY: 22 + index * 14,
    parallaxX: (index % 2 === 0 ? 1 : -1) * (8 + index * 2),
    floatY: 12 + index * 6,
    duration: 22 + index * 4,
    scrub: 0.12 + index * 0.08,
    items: [],
  }))

  for (let index = 0; index < BUBBLE_COUNT; index += 1) {
    const layerIndex = index % BUBBLE_LAYER_COUNT
    const r1 = seeded(index + 7)
    const r2 = seeded(index + 71)
    const r3 = seeded(index + 151)
    const r4 = seeded(index + 271)

    layers[layerIndex].items.push({
      id: `bubble-${index}`,
      top: `${-4 + r1 * 110}%`,
      left: `${-4 + r2 * 108}%`,
      size: `${7 + r3 * 24}px`,
      opacity: 0.08 + r4 * 0.16,
      scale: 0.86 + r2 * 0.18,
    })
  }

  return layers
}

function flowerWrapStyle(flower) {
  return {
    top: flower.top,
    left: flower.left,
    width: flower.size,
    height: flower.size,
  }
}

function flowerStyle(flower) {
  return {
    '--flower-opacity': flower.opacity,
    '--flower-blur': flower.blur,
    '--flower-filter': flower.filter,
  }
}

function bubbleWrapStyle(bubble) {
  return {
    top: bubble.top,
    left: bubble.left,
    width: bubble.size,
    height: bubble.size,
  }
}

function bubbleStyle(bubble) {
  return {
    '--bubble-opacity': bubble.opacity,
    '--bubble-scale': bubble.scale,
  }
}

export default function HomeAtmosphere() {
  const rootRef = useRef(null)
  const burstRef = useRef(null)

  const flowerLayers = useMemo(() => createFlowerLayers(), [])
  const bubbleLayers = useMemo(() => createBubbleLayers(), [])

  useGSAP(
    (_, contextSafe) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      const shell = rootRef.current?.closest('.page-shell--home')
      if (!shell) {
        return
      }

      const flowerLayerNodes = gsap.utils.toArray('.home-atmosphere__layer--flowers')
      const bubbleLayerNodes = gsap.utils.toArray('.home-atmosphere__layer--bubbles')
      const flowerDriftNodes = gsap.utils.toArray('.home-atmosphere__flower-drift')
      const flowerNodes = gsap.utils.toArray('.home-atmosphere__flower')

      flowerLayerNodes.forEach((layer, index) => {
        const config = flowerLayers[index]

        gsap.to(layer, {
          y: config.parallaxY,
          x: config.parallaxX,
          ease: 'none',
          scrollTrigger: {
            trigger: shell,
            start: 'top top',
            end: 'bottom bottom',
            scrub: config.scrub,
          },
        })
      })

      bubbleLayerNodes.forEach((layer, index) => {
        const config = bubbleLayers[index]

        gsap.to(layer, {
          y: config.floatY * -1,
          x: config.parallaxX,
          duration: config.duration,
          repeat: -1,
          yoyo: true,
          ease: 'none',
        })

        gsap.to(layer, {
          y: `-=${config.parallaxY}`,
          ease: 'none',
          scrollTrigger: {
            trigger: shell,
            start: 'top top',
            end: 'bottom bottom',
            scrub: config.scrub,
          },
        })
      })

      flowerDriftNodes.forEach((node) => {
        const driftX = Number(node.dataset.driftX || 0)
        const driftY = Number(node.dataset.driftY || 0)
        const duration = Number(node.dataset.driftDuration || 24)
        const scale = Number(node.dataset.scale || 1)

        gsap.fromTo(
          node,
          {
            x: driftX * -1,
            y: driftY,
            scale: scale * 0.98,
          },
          {
            x: driftX,
            y: driftY * -1,
            scale,
            duration,
            repeat: -1,
            yoyo: true,
            ease: 'none',
          }
        )
      })

      flowerNodes.forEach((node) => {
        const rotation = Number(node.dataset.rotation || 360)
        const duration = Number(node.dataset.spinDuration || 42)

        gsap.to(node, {
          rotation,
          duration,
          repeat: -1,
          ease: 'none',
        })
      })

      let lastSpawnAt = 0
      const clampStrength = gsap.utils.clamp(0, 1)
      const mapBurstCount = gsap.utils.mapRange(0, 1, 3, 34)
      const mapBurstInterval = gsap.utils.mapRange(0, 1, 220, 28)

      const spawnBubble = contextSafe((strength = 1) => {
        if (!burstRef.current) return

        const density = Math.max(0.2, strength)
        const count = Math.round(mapBurstCount(Math.pow(density, 0.7)))

        for (let index = 0; index < count; index += 1) {
          const bubble = document.createElement('span')
          bubble.className = 'home-atmosphere__bubble home-atmosphere__bubble--spawned'

          const size = 9 + Math.random() * (20 + density * 18)
          const x = window.scrollX + window.innerWidth * (0.02 + Math.random() * 0.96)
          const y = window.scrollY + window.innerHeight * (0.9 + Math.random() * 0.14)
          const driftX = -24 + Math.random() * 48
          const rise = 110 + Math.random() * (150 + density * 180)
          const opacity = 0.16 + Math.random() * (0.16 + density * 0.16)

          bubble.style.width = `${size}px`
          bubble.style.height = `${size}px`
          bubble.style.left = `${x}px`
          bubble.style.top = `${y}px`
          bubble.style.setProperty('--bubble-opacity', `${opacity}`)

          burstRef.current.appendChild(bubble)

          gsap.fromTo(
            bubble,
            {
              x: 0,
              y: 0,
              scale: 0.25,
              opacity: 0,
            },
            {
              x: driftX,
              y: rise * -1,
              scale: 1.04,
              opacity,
              duration: 1.8 + Math.random() * (1.8 + density * 1.2),
              ease: 'none',
              onComplete: () => bubble.remove(),
            }
          )
        }
      })

      ScrollTrigger.create({
        trigger: shell,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const now = performance.now()
          const velocity = Math.abs(self.getVelocity())
          const strength = clampStrength((velocity - 15) / 850)
          const burstInterval = mapBurstInterval(strength)

          if (self.direction !== 1 || now - lastSpawnAt < burstInterval) {
            return
          }

          lastSpawnAt = now
          spawnBubble(strength)

          if (strength > 0.62) {
            spawnBubble(Math.min(1, strength * 0.82))
          }

          if (strength > 0.88) {
            spawnBubble(0.92)
          }
        },
      })
    },
    { scope: rootRef, dependencies: [flowerLayers, bubbleLayers] }
  )

  return (
    <div ref={rootRef} className="home-atmosphere" aria-hidden="true">
      <div className="home-atmosphere__wash" />

      <div className="home-atmosphere__field">
        {flowerLayers.map((layer) => (
          <div key={layer.id} className="home-atmosphere__layer home-atmosphere__layer--flowers">
            {layer.items.map((flower) => (
              <span
                key={flower.id}
                className="home-atmosphere__flower-wrap"
                style={flowerWrapStyle(flower)}
              >
                <span
                  className="home-atmosphere__flower-drift"
                  data-drift-x={flower.driftX}
                  data-drift-y={flower.driftY}
                  data-drift-duration={flower.driftDuration}
                  data-scale={flower.scale}
                >
                  <img
                    className="home-atmosphere__flower"
                    src="/flor.svg"
                    alt=""
                    style={flowerStyle(flower)}
                    data-rotation={flower.rotation}
                    data-spin-duration={flower.spinDuration}
                  />
                </span>
              </span>
            ))}
          </div>
        ))}

        {bubbleLayers.map((layer) => (
          <div key={layer.id} className="home-atmosphere__layer home-atmosphere__layer--bubbles">
            {layer.items.map((bubble) => (
              <span
                key={bubble.id}
                className="home-atmosphere__bubble-wrap"
                style={bubbleWrapStyle(bubble)}
              >
                <span className="home-atmosphere__bubble" style={bubbleStyle(bubble)} />
              </span>
            ))}
          </div>
        ))}
      </div>

      <div ref={burstRef} className="home-atmosphere__burst" />
    </div>
  )
}
