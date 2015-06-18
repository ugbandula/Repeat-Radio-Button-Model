angular.module('myApp', [])
.controller('MainController', ['$scope', function($scope) {
    $scope.questionList = [
        {
            "question_num": "Q1",
            "answersList": [
                {
                    "is_correct": "0",
                    "answer_text": "Answer 1",
                    "feedback": "Feedback 1"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 2",
                    "feedback": "Feedback 2"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 3",
                    "feedback": "Feedback 3"
                },
                {
                    "is_correct": "1",
                    "answer_text": "Answer 4",
                    "feedback": "Feedback 4"
                }
            ],
            "question_text": "Sample Question"
        },
        {
            "question_num": "Q2",
            "answersList": [
                {
                    "is_correct": "1",
                    "answer_text": "Answer 1",
                    "feedback": "Feedback 1"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 2",
                    "feedback": "Feedback 2"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 3",
                    "feedback": "Feedback 3"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 4",
                    "feedback": "Feedback 4"
                }
            ],
            "question_text": "Sample Question2"
        }
    ];
}]);