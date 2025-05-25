module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './backend',
      script: './dist/server.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      watch: ['dist']
    },
    {
      name: 'frontend',
      cwd: './frontend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        BROWSER: 'none' // Evita abrir o navegador automaticamente
      },
      watch: ['src']
    }
  ]
}; 