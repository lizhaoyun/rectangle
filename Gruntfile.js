
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
        },
        mocha:{
            test:{
                src:['test/index.html'],
            },
            options:{
                run:true,
                reporter:'Spec'
            }
        }
    });

    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default',['htmlhint','csslint']);
    // grunt.registerTask('unitTest', ['mocha']);
};