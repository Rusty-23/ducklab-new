<div id="app" class="px-4 mt-5 pt-5">
    Loading . . .
</div>

<script id="template" type="text/x-handlebars-template">
    <div class="questions px-4">
        <h1>Exam</h1>
        <form id="form" method="post">
        {{#each questions}}
            <div class="question mb-3" style="border: 1px solid black; border-radius: 10px; padding: 10px;">
                <p style="font-weight: bold; font-size: 20px">{{question}}</p>
                <div style=" border: 1px solid black; border-radius: 10px; padding: 10px; margin-top: 10px;">
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="__answer__{{id}}_1" name="__answer__{{id}}" value="1" required><label class="form-check-label" for="__answer__{{id}}_1">{{choice_1}}</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="__answer__{{id}}_2" name="__answer__{{id}}" value="2" required><label class="form-check-label" for="__answer__{{id}}_2">{{choice_2}}</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="__answer__{{id}}_3" name="__answer__{{id}}" value="3" required><label class="form-check-label" for="__answer__{{id}}_3">{{choice_3}}</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="__answer__{{id}}_4" name="__answer__{{id}}" value="4" required><label class="form-check-label" for="__answer__{{id}}_4">{{choice_4}}</label></div>
                </div>
            </div>
        {{/each}}
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</script>