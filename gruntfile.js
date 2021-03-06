module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        files: {
          "style.css": "*.less"
        }
      }
    },
    watch: {
      files: ['*.less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);

};
