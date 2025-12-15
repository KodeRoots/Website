import { ref, onMounted, type Ref } from 'vue'
import ColorThief from 'colorthief'

/**
 * Extracts the dominant color from an image using Color Thief
 * @param imageSrc - Image URL
 * @returns Dominant color with alpha 0.25 for subtle background
 */
export function useImageColor(imageSrc: Ref<string>) {
  const backgroundColor = ref<string>('transparent')

  const loadImage = () => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'

    img.onload = () => {
      try {
        const colorThief = new ColorThief()
        const [r, g, b] = colorThief.getColor(img)
        backgroundColor.value = `rgba(${r}, ${g}, ${b}, 0.15)`
      } catch {
        backgroundColor.value = 'transparent'
      }
    }

    img.onerror = () => {
      backgroundColor.value = 'transparent'
    }

    img.src = imageSrc.value
  }

  onMounted(() => {
    loadImage()
  })

  return {
    backgroundColor,
  }
}
