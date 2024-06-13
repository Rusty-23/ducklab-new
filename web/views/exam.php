<div id="app" class="px-4 mt-5 pt-5">
    Loading . . .
</div>

<script id="template" type="text/x-handlebars-template">
    <div class="questions px-4">
        <h1>Exam</h1>
        <form id="form" method="post">
        {{#each questions}}
            <div class="question">
                <p>{{question}}</p>
                <div>
                <input type="radio" name="__answer__{{id}}" value="1" required>{{choice_1}}<br>
                <input type="radio" name="__answer__{{id}}" value="2" required>{{choice_2}}<br>
                <input type="radio" name="__answer__{{id}}" value="3" required>{{choice_3}}<br>
                <input type="radio" name="__answer__{{id}}" value="4" required>{{choice_4}}<br>
                </div>
            </div>
        {{/each}}
        <button type="submit">Submit</button>
        </form>
    </div>
</script>