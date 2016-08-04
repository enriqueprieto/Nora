module.exports = function( grunt ) {

  grunt.initConfig({

    //Uglify
    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'js/nora.1.0.min.js' : [ 'assets/_js/*' ]
        }
      }
    }, 

    //Less
    less: {
      development: {
        options: {
          paths: ["assets/_css"]
        },

        files: {
          "css/nora.1.0.css": "assets/_css/*"
        }
      }
    }, 

    //Watch
    watch : {
      dist : {
        files : [
          'assets/_js/*',
          'assets/_css/*'
        ],

        tasks : [ 'uglify', 'less', 'cssmin' ]
      }
    }, 

    //Css Min
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['nora.1.0.css'],
          dest: 'css',
          ext: '1.0.min.css'
        }]
      }
    }

  });

  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'less', 'cssmin' ] );

  grunt.registerTask( 'w', [ 'watch' ] );
};