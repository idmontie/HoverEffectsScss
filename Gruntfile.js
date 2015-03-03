module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
      // Metadata
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= props.license %> */\n',
      // SCSS Lint
      // =========
      scsslint: {
          allFiles: [
              'src/*.scss',
              'src/*/*.scss'
          ],
          options: {
            config: 'src/.scss-lint.yml'
        }
      },
      // SASS Compile
      // ============
      sass: {
          options: {
              style: 'expanded',
              sourcemap: 'auto'
          },
          dist: {
              files: {
                  'build/hover-effects.css' : 'src/hover-effects.scss'
              }
          }
      },
      // CSS Minify
      // ==========
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'build/',
            src: ['*.css', '!*.min.css'],
            dest: 'build/',
            ext: '.min.css'
          }]
        }
      }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
      'scsslint',
      'sass:dist',
      'cssmin',
    ]);
};