const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export interface ServerHealthResponse {
  status: string
  uptime: number
  timestamp: string
}

export interface DbHealthResponse {
  status: 'ok' | 'error'
  latencyMs?: number
  error?: string
}

export const fetchServerHealth = async (): Promise<ServerHealthResponse> => {
  const response = await fetch(`${API_BASE_URL}/health`)
  if (!response.ok) {
    throw new Error('Server health check failed')
  }
  return response.json() as Promise<ServerHealthResponse>
}

export const fetchDbHealth = async (): Promise<DbHealthResponse> => {
  const response = await fetch(`${API_BASE_URL}/db-health`)
  const data = (await response.json()) as DbHealthResponse
  if (!response.ok || data.status !== 'ok') {
    throw new Error(data.error ?? 'Database health check failed')
  }
  return data
}
