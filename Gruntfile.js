module.exports = function(grunt){

  //configuration
  grunt.initConfig({
    // pass in options to plugins, references to files etc
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'pug/index.pug'
        }
      }
    },
  })

  //load plugins
  // grunt.loadNpmTasks('')
  grunt.loadNpmTasks('grunt-contrib-pug');

  // Register tasks
  // grunt.registerTask('run', function(){
  //   console.log('I am running');
  // });

  // grunt.registerTask('sleep', function(){
  //   console.log('I am sleeping');
  // });

  // grunt.registerTask('all', ['sleep', 'run']);
  grunt.registerTask('default', ['pug']);

};