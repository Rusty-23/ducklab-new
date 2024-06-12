import Button from "@/components/Button";
import { getLectures } from "@/service/lectures";
import { HiPlus } from "react-icons/hi";
import LecturesList from "./LectureList";

export default async function Lectures() {
    const lectures = await getLectures();

    return (
        <main className="overflow-auto w-full p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Lectures</h1>
                <Button href="/lectures/add">
                    <HiPlus />
                </Button>
            </div>
            <LecturesList lectures={lectures} />
        </main>
    );
}
