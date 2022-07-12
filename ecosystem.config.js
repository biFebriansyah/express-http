module.exports = {
   apps: [
      {
         name: 'test-datasource',
         script: '/home/ec2-user/test-app/bin/www',
         cwd: '/home/ec2-user/test-app',
         watch: false,
         max_memory_restart: '80M',
         autorestart: true
      }
   ]
}
