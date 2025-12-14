/**
 * Gera URL do placeholder com dimensões e tema especificados
 */
export function placeholderUrl(
  width: number = 400, 
  height: number = 300, 
  text?: string, 
  backgroundColor: string = '0EA5E9', 
  textColor: string = 'FFFFFF'
): string {
  const textParam = text ? `&text=${encodeURIComponent(text)}` : ''
  return `https://placehold.co/${width}x${height}/${backgroundColor}/${textColor}?font=source-sans-pro${textParam}`
}

/**
 * Placeholder específico para apps
 */
export function appPlaceholder(title: string) {
  return placeholderUrl(400, 300, title, '0EA5E9', 'FFFFFF')
}

/**
 * Placeholder específico para widgets
 */
export function widgetPlaceholder(title: string) {
  return placeholderUrl(300, 200, title, '10B981', 'FFFFFF')
}

/**
 * Placeholder específico para scripts
 */
export function scriptPlaceholder(title: string) {
  return placeholderUrl(300, 200, title, '8B5CF6', 'FFFFFF')
}