<div id="app" class="px-4 mt-5 pt-5">
    Loading . . .
</div>

<script id="template" type="text/x-handlebars-template">
    <div class="questions px-4">
        <h1>Exam</h1>
        <form id="form" method="post">
        {{#each questions}}
            <div class="question" style=" border: 1px solid black; border-radius: 10px; padding: 10px;">
                <p style="font-weight: bold; font-size: 20px">{{question}}</p>
                <div style=" border: 1px solid black; border-radius: 10px; padding: 10px; margin-top: 10px;">
                <input type="radio" name="__answer__{{id}}" value="1" required>{{choice_1}}<br>
                <input type="radio" name="__answer__{{id}}" value="2" required>{{choice_2}}<br>
                <input type="radio" name="__answer__{{id}}" value="3" required>{{choice_3}}<br>
                <input type="radio" name="__answer__{{id}}" value="4" required>{{choice_4}}<br>
                </div>
            </div>
        {{/each}}
        <button type="submit">Submit</button>
        </form>
     
        {{#if (isTrue subject.completion_date)}}
            <a href="./certificate.php/{{subject.slug}}">Certificate</a>
        {{/if}}
    </div>
</script>