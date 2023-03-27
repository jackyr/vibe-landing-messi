import { useContext } from 'react'
import ThemeContext from '@/common/ThemeContext'

export default function useThemeMode() {
  const context = useContext(ThemeContext)
  if (context) {
    return context
  }
  throw new Error()
}