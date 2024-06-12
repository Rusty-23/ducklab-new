import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getCourseLecturesBySlug } from "@/service/course";
import CourseLectureList from "./CourseLectureList";

export default async function CourseLecture({ params }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) redirect("/login");

    const { given_name, family_name } = user;
    const name = `${given_name} ${family_name}`;
    const lectures = await getCourseLecturesBySlug(params.slug, name);
    const {
        subject_name: subjectName,
        subject_year_level: yearLevel,
        subject_duration: duration,
        subject_description: description,
    } = lectures.length ? lectures[0] : {};
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">
                {lectures.length ? subjectName : "No Lectures yet"}
            </h1>
            {lectures.length && (
                <>
                    <h2 className="text-xl font-semibold mb-5">
                        {yearLevel} Year - {duration}
                    </h2>
                    <p className="mb-10">{description}</p>
                </>
            )}
            <CourseLectureList lectures={lectures} />
        </div>
    );
}
