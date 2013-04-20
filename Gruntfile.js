module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serverFile: 'app.js',
        shell: {
          nodemon_dev: {
            command: 'node <%= serverFile %>',
            options: {
              stdout: true,
              stderr: true
            }
          },
          nodemon_prod: {
            command: 'node <%= serverFile %> prod',
            options: {
              stdout: true,
              stderr: true
            }
          }
        },
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: [
                'public/js/lib/jquery-1.8.2.js',
                'public/js/lib/*.js',
                'public/js/app/i18n.js',
                'public/js/app/app.js'
              ],
              dest: 'public/js/built.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell')
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('dev', ['shell:nodemon_dev']);
    grunt.registerTask('prod', ['concat', 'shell:nodemon_prod']);
};
