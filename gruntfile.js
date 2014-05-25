module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/**/*.js', 'src/*.js', '!src/libraries/**/*.js'],
                dest: 'dist/assets/app.min.js'
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'dist/assets/app.min.css': ['src/assets/**/*.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['libraries/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['views/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['assets/img/**'], dest: 'dist/'},
                ]
            }
        },
        watch: {
            files: ['src/**/*.js', 'src/*.js'],
            tasks: ['uglify']
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'copy', 'watch']);

};