import "./index.css";
import "@fontsource/fira-sans";
import { Textbox } from "@/components/Textbox";
import { Titlebox } from "@/components/Titlebox";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  const textInputClasses = "h-full w-full";

  return (
    <main className="flex min-h-screen flex-col justify-evenly gap-1 bg-secondary">
      <Titlebox className={textInputClasses} />
      <Textbox className={textInputClasses} />
    </main>
  );
}

export default App;
