module.exports = function(grunt) {

    grunt.initConfig({
        ftp_push: {
            root: {
                options: {
                    authKey: '',
                    host: 'ftp.jaumesala.com',
                    username: 'jaumeftp',
                    password: 'Xonw202_',
                    dest: '/httpdocs/',
                    port: 21
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: [
                        ['index.html','styles.css']
                    ]
                }]
            }
        },
        watch: {
            files: ['index.html','styles.css'],
            tasks: ['ftp_push']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['index.html','styles.css']
                },
                options: {
                    proxy: 'http://www.jaumesala.com',
                    watchTask: true,
                    reloadDelay: 4000
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-ftp-push');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
};
