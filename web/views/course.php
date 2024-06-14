<br />
<br />
<br />
<br />
<br />

<div id="app">
    Loading . . .
</div>


<script id="template" type="text/x-handlebars-template">
    <!-- <h1>{{subject.title}}</h1> -->
    <section class="math" id="math" style="background-image: url({{subject.image_source}})">
        <div class="math-text" style="text-shadow: 0px 1px 0px white;">
            <h6>PTC online learning platform</h6>
			<h1 style="color: black; text-shadow: 0px 4px 4px white;"><b>{{subject.title}}</b></h1>
           <p>{{subject.prof}}</p>
        </div>
    </section>
    <section class="video" id="video-lectures">
        <p>{{subject.description}}</p>

        <div class="progress-bar" >
            <div class="side">
                <div>Progress</div>
            </div>
            <div class="middle">
                <div class="bar-container">
                    <div class="bar-5"></div>
                </div>
            </div>
            <div class="side right">
                <div>{{subject.progress}}/{{lectures.length}}</div>
            </div>
        </div>

        <div class="video-section">
            {{#each lectures}}
            <div id="lec-{{id}}" class="lecture">
                {{#if (isDisabled @index)}}
                    <button type="button" class="collapsible" style="color: black" disabled>{{title}}<i class="fas fa-lock"></i></button>
                {{else}}
                    <button type="button" class="collapsible" style="color: black"  onclick="handleLectureClick({{id}}, {{@index}})">{{title}}</button>
                {{/if}}
                <div class="content" style="text-align: center;">
                    <iframe width="660" height="415" src="{{lecture_video_url}}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            {{/each}}
            {{#if (isTrue subject.completion_date)}}
            <!-- test exam section -->
            <div id="lec-{{id}}" class="lecture">
                <button type="button" class="collapsible" style="color: black" onclick="window.location.href='/exam/{{subject.slug}}'" >Exam in {{subject.title}}</i></button>
            
            {{/if}}
        </div>
    </section>


</script>

