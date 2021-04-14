var app = angular.module('myApp',[]);


app.directive('quizfpoly', function(quizFactory){
    return{
        restrict : 'AE',
        scope :{},
        templateUrl:'template-quiz copy CSDL.html',
        link: function(scope, elem, attrs){
            scope.start = function(){
                scope.id = 1;
                scope.quizOver= false; //chua hoan thanh
                scope.inProgess = true;
                scope.getQuestion();

            };
            scope.reset =function(){
                scope.inProgess = false;
                scope.score = 0 ;
            };
            //goi 
            scope.getQuestion = function(){
                var quiz = quizFactory.getQuestion(scope.id);
                if(quiz){
                 scope.question = quiz.Text;
                scope.options = quiz.Answers;
                scope.answer = quiz.AnswerId;
                //thong bao cau hoi dung sai
                scope.answerMode = true;
                }else{
                    scope.quizOver = true;
                }
                
               
            }
            //kieemr tra 
            scope.checkAnswer = function(){
               // alert('answer');
               if(!$('input[name = answer]:checked').length) return;
                   var ans = $('input[name = answer]:checked').val();
               if(ans == scope.answer){
               // alert('dung');
               scope.score++;  
               scope.scorrectAns = true;
               }else{
               // alert('sai');
                scope.scorrectAns = false;
               }
                 //thong bao cau hoi dung sai
               scope.answerMode = false;
            };
            //nexx
            scope.nextQuestion = function(){
                scope.id++;
                scope.getQuestion();
            }
            scope.reset();
        }
    }
});
//addfile
app.factory('quizFactory', function($http){
    $http.get('../db/Quizs/DBBS.js').then(function(res){
        questions = res.data;
       // alert(questions.length);
    });
    //10cauhoi
    return{
        getQuestion:function(id){
            var randomItem = questions[Math.floor(Math.random()* questions.length)];
            var count = questions.length;
            if(count>10){
                count = 10;
            }
            
            if(id< count){
                return randomItem;

            }else{
                return false;
            }
           
        }
    }
});

