import { useEffect } from 'react'
import { useToast } from '@components/ui/use-toast'

export const useHandleUserConnection = () => {
  const { toast } = useToast()

  useEffect(() => {
    const hanldeOnOnline = (ev: Event) => {
      toast({
        title: 'You are online.',
        className: 'bg-green-400',
      })
    }
    const handleOnOffline = (ev: Event) => {
      toast({
        title: 'You are offline. Trying to reconnect...',
        variant: 'destructive',
      })
    }

    window.addEventListener('online', hanldeOnOnline)
    window.addEventListener('offline', handleOnOffline)

    return () => {
      window.removeEventListener('online', hanldeOnOnline)
      window.removeEventListener('offline', handleOnOffline)
    }
  }, [])
}
