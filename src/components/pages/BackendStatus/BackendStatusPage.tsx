import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { backendStatusContent } from '@/data/backendStatus'
import { fetchDbHealth, fetchServerHealth } from '@/lib/api/health'

export default function BackendStatusPage() {
  const handleCheckServer = async () => {
    try {
      const data = await fetchServerHealth()
      toast.success(backendStatusContent.toasts.serverUp.title, {
        description: backendStatusContent.toasts.serverUp.formatDescription(
          data.uptime
        ),
      })
    } catch {
      toast.error(backendStatusContent.toasts.unreachable.title, {
        description: backendStatusContent.toasts.unreachable.description,
      })
    }
  }

  const handleCheckDb = async () => {
    try {
      const data = await fetchDbHealth()
      toast.success(backendStatusContent.toasts.dbUp.title, {
        description: backendStatusContent.toasts.dbUp.formatDescription(
          data.latencyMs ?? 0
        ),
      })
    } catch {
      toast.error(backendStatusContent.toasts.unreachable.title, {
        description: backendStatusContent.toasts.unreachable.description,
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {backendStatusContent.title}
        </h1>
        <p className="text-base text-muted-foreground">
          {backendStatusContent.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={handleCheckServer}>
          {backendStatusContent.buttons.checkServer}
        </Button>
        <Button variant="outline" onClick={handleCheckDb}>
          {backendStatusContent.buttons.checkDb}
        </Button>
      </div>
    </main>
  )
}
