import { Header } from "../../components/Header";
import { TaskInput } from "../../components/TaskInput";
import { Task } from "../../components/Task";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>
        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullname="Chananchida Thawornwong"
        studentId="650612080"
      ></Footer>
    </div>
  );
}
