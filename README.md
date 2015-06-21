# Repeat-Radio-Button-Model
This elaborates how to handle radio buttons with a pre-selected inputs in a repeating environment.

# Example
        <div ng-repeat="question in questionList track by $index">
            <div>
                <h4>{{question.question_text}}</h4>
            </div>
            <div ng-repeat="answer in question.answersList track by $index">
                <input type="radio" name="{{$parent.$index}}" ng-value="1" ng-model="answer.is_correct">
                <input type="text" class="desc-text" value="{{answer.answer_text}}" ng-model="answer.answer_text">
                <input type="text" class="desc-text" value="{{answer.feedback}}" ng-model="answer.feedback">
            </div>
            <hr>
        </div>
        
        
