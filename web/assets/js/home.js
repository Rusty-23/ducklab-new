const baseURL = document.querySelector('meta[name="BASE-URL"]').content;

function handleEnrollClick(subjectId, courseSlug) {
  const userId = document.querySelector('meta[name="AUTH-ID"]').content;
  enrollToSubject(
    userId,
    subjectId,
    (data) => {
      if (data) return (window.location = `${baseURL}course/${courseSlug}`);
    },
    (request, status, error) => {
      alert("error connecting to server");
      console.error({ request, status, error });
    }
  );
}

const enrollToSubject = (userId, subjectId, onSuccess, onError) => {
  $.ajax({
    url: `${baseURL}api/enroll.json.php`,
    method: "POST",
    data: {
      user_id: userId,
      subject_id: subjectId,
      progress: 1,
    },
    dataType: "json",
    success: onSuccess,
    error: onError,
  });
};
