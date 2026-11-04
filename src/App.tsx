import BackendStatusPage from '@/components/pages/BackendStatus/BackendStatusPage'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <>
      <BackendStatusPage />
      <Toaster richColors position="bottom-right" />
    </>
  )
}
