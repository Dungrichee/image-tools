module.exports = {
    apps: [
        {
            script: 'npm start',
        },
    ],

    deploy: {
        production: {
            key: 'img-aws-key.pem',
            user: 'ubuntu',
            host: '13.40.127.40',
            ref: 'origin/main',
            repo: 'https://github.com/Dungrichee/image-tools.git',
            path: '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy':
                'source ~/.nvm/nvm.sh && yarn && yarn run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            ssh_options: 'ForwardAgent=yes',
        },
    },
};
