module.exports=function(grunt){
    grunt.initConfig({
        htmlhint:{
            options:{
                htmlhint:'./htmlhintrc'
            },
            src:['*.html']
        },
        csslint:{
            options:{
                csslint:'./.csslintrc'
            },
            src:['*.css']
        },
        eslint:{
            options:{
                eslintrc:'./.eslintrc.json'
            },
            target:['*.js']
        }
    });

    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default',['htmlhint','csslint','eslint']);

}