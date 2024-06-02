const baseURL = document.querySelector('meta[name="BASE-URL"]').content;

let data = {
  subject: {
    id: "",
    title: "",
    description: "",
    prof: "",
    image_source: "",
    progress: "",
    completion_date: "",
  },
  lectures: [],
  unlock: 1,
};

const getSubjectSlug = () => {
  const paths = location.pathname.split("/");
  return paths[paths.length - 1];
};

const getData = (userId, subjectSlug, onSuccess, onError) => {
  $.ajax({
    url: `${baseURL}api/course.json.php?user_id=${userId}&slug=${subjectSlug}`,
    method: "GET",
    dataType: "json",
    success: onSuccess,
    error: onError,
  });
};

const render = (source, unlock) => {
  data = {
    ...data,
    ...source,
    unlock,
  };
  const template = Handlebars.compile($("#template").html());
  const app = template(data);
  document.getElementById("app").innerHTML = app;
};

const updateProgress = (id, progress, onSuccess, onError) => {
  $.ajax({
    url: `${baseURL}api/enrolled-subject.json.php`,
    method: "POST",
    data: {
      id,
      progress,
    },
    dataType: "json",
    success: onSuccess,
    error: onError,
  });
};

const completeSubject = (id, onSuccess, onError) => {
  return $.ajax({
    url: `${baseURL}api/complete-subject.json.php`,
    method: "POST",
    data: {
      id,
    },
    dataType: "json",
    success: onSuccess,
    error: onError,
  });
};

const updateProgressBar = (progressValue, progressMaxIter) => {
  const progressBarContainer = document.querySelector(".bar-container");
  const progressBar = document.getElementsByClassName("bar-5")[0];

  const currentWidth = parseInt(progressBar.style.width) || 0;
  const progressTotalWidth = progressBarContainer.offsetWidth;

  const newWidth = (progressTotalWidth / progressMaxIter) * progressValue;
  if (currentWidth > newWidth) return;
  progressBar.style.width = newWidth + "px";
};

const processResponse = (data, unlock) => {
  render(data, unlock);
  updateProgressBar(data.subject.progress, data.lectures.length);
  data.lectures.forEach((lecture, index) => {
    if (index + 1 === parseInt(data.subject.progress))
      $(`#lec-${lecture.id} > .content`).toggle("open");
  });
};

const handleLectureClick = async (id, index) => {
  const currentProgressState = parseInt(data.subject.progress);
  const lecturesLength = data.lectures.length;
  console.log(currentProgressState === lecturesLength);

  const progress = index + (currentProgressState === lecturesLength ? 1 : 2);
  if (index + 1 >= currentProgressState) {
    updateProgress(
      data.subject.id,
      progress,
      (data) => processResponse(data, progress),
      (request, status, error) => console.error({ request, status, error })
    );
  }

  if (index + 1 === lecturesLength && !data.subject.completion_date) {
    await completeSubject(
      data.subject.id,
      (data) => processResponse(data, progress),
      (request, status, error) => console.error({ request, status, error })
    );
  }
  updateProgressBar(data.subject.progress, lecturesLength);
  $(`#lec-${id} > .content`).toggle("open");
};

Handlebars.registerHelper("isDisabled", function (index) {
  return index + 1 > parseFloat(data.unlock);
});

Handlebars.registerHelper("isTrue", function (value) {
  return !!value;
});

$(document).ready(function () {
  const userId = document.querySelector('meta[name="AUTH-ID"]').content;
  const subjectSlug = getSubjectSlug();

  getData(
    userId,
    subjectSlug,
    (data) => processResponse(data, data.subject.progress),
    (request, status, error) => {
      if (request.status === 404) {
        return (window.location = `${baseURL}404`);
      }
      alert("error connecting to server");
      console.error({ request, status, error });
    }
  );
});

function redirectToPrint(subjectId) {
  window.location.href = `${baseURL}certificate?subject_id=${subjectId}`;
}
