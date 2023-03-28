import { useState, useRef, useEffect } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export default function useCountdown(startTimeStamp: number) {
  const countdownIntervalRef = useRef<number>()
  const [countdownDuration, setCountdownDuration] = useState<duration.Duration>()
  const [countdownListItems, setCountdownListItems] = useState<{ label: string, value: number }[]>([])

  useEffect(() => {
    if (startTimeStamp) {
      const calc = () => {
        const diff = dayjs.duration(dayjs(startTimeStamp).diff(dayjs()))
        setCountdownDuration(diff)
        setCountdownListItems([
          { label: 'Days', value: Math.floor(diff.asDays()) },
          { label: 'Hrs', value: diff.hours() },
          { label: 'Mins', value: diff.minutes() },
          { label: 'Secs', value: diff.seconds() },
        ])
      }
      calc()
      window.clearInterval(countdownIntervalRef.current)
      countdownIntervalRef.current = window.setInterval(calc, 1000)
    }
  }, [startTimeStamp])

  return {
    countdownDuration,
    countdownListItems,
  }
}