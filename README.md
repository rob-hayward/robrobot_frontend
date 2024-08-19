To switch between production and development mode:

On frontend, change servername in nginx.config,
    server_name robrobot-loadbalancer-980562543.eu-west-2.elb.amazonaws.com; # for production
    server_name localhost; # for development
    proxy_pass http://robrobot-loadbalancer-980562543.eu-west-2.elb.amazonaws.com; # for production
    proxy_pass http://localhost:8080; # for development

On frontend, change API_URL in .env,
    REACT_APP_NODE_ENV=development # for development
    REACT_APP_NODE_ENV=production # for production

On frontend, change email endpoint in contact.js,
    const emailEndpoint = 'http://localhost:8080/email'; # for development
    const endpoint = 'https://robhayward.io/api/send-email/'; # for production

On backend, change Debug in production.py,
    DEBUG = False # for production
    DEBUG = True # for development

On backend, change Debug in settings.py,
    DEBUG = os.getenv('DEBUG', 'False').lower() == 'true' # for production
    DEBUG = True # for development