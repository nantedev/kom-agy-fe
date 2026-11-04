export const backendStatusContent = {
  title: 'Kommit',
  subtitle: 'État du backend',
  buttons: {
    checkServer: 'Check serveur',
    checkDb: 'Check BDD',
  },
  toasts: {
    serverUp: {
      title: 'Serveur opérationnel',
      formatDescription: (uptimeSeconds: number) =>
        `Uptime : ${Math.round(uptimeSeconds)} s`,
    },
    dbUp: {
      title: 'Base de données opérationnelle',
      formatDescription: (latencyMs: number) => `Latence : ${latencyMs} ms`,
    },
    unreachable: {
      title: 'Backend injoignable',
      description:
        "Le serveur ne répond pas. Vérifie qu'il tourne sur le port 3000.",
    },
  },
} as const
