const apiURL = document.querySelector('meta[name="API-URL"]').content;

Handlebars.registerHelper("isTrue", function (value) {
    return !!value;
});

const getSubjectSlug = () => {
    const paths = location.pathname.split("/");
    return paths[paths.length - 1];
};

const getQuestions = (subjectSlug, onSuccess, onError) => {
    $.ajax({
        url: `${apiURL}api/courses/${subjectSlug}/questions`,
        method: "GET",
        dataType: "json",
        success: onSuccess,
        error: onError,
    });
};

let data = {
    questions: [],
};
const subjectSlug = getSubjectSlug();

$(document).ready(function () {
    getQuestions(
        subjectSlug,
        (data) => {
            render({ questions: data });
            $("#form").on("submit", handleOnSubmit);
        },
        (request, status, error) => {
            alert("error connecting to server");
            console.error({ request, status, error });
        }
    );
});

const render = (source) => {
    data = {
        ...data,
        ...source,
    };
    const template = Handlebars.compile($("#template").html());
    const app = template(data);
    document.getElementById("app").innerHTML = app;
};

const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    const userId = document.querySelector('meta[name="AUTH-ID"]').content;

    const payload = {
        user_id: userId,
        ...formEntries,
    };

    getResult(
        payload,
        (data) => {
            console.log(data);
            // alert("result submitted");
        },
        (error) => {
            console.error(error);
        }
    );
};

const getResult = (data, onSuccess, onError) => {
    $.ajax({
        url: `${apiURL}api/courses/${subjectSlug}/questions/result`,
        method: "POST",
        dataType: "json",
        data,
        success: onSuccess,
        error: onError,
    });
};
