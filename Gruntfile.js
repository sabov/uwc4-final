module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        serverFile: 'app.js',
        shell: {
          nodemon_dev: {
            command: 'nodemon <%= serverFile %>',
            options: {
              stdout: true,
              stderr: true
            }
          },
          nodemon_prod: {
            command: 'nodemon <%= serverFile %>',
            options: {
              stdout: true,
              stderr: true
            }
          }
        },
    });

    grunt.loadNpmTasks('grunt-shell')

    grunt.registerTask('run', ['shell:nodemon_dev']);
};
