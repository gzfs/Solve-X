import CodeEditor from "@/components/Editor";
import Split from "react-split";
import { FileIconsTestcafe } from "./Icons";

export default function Playground() {
  return (
    <Split
      className="h-full"
      direction="vertical"
      sizes={[50, 50]}
      minSize={30}
    >
      <CodeEditor />
      <div className="bg-[#272822] w-full overflow-hidden h-full border border-white border-opacity-10 rounded-lg">
        <div className="flex items-center space-x-1 p-2 border-b border-white border-opacity-10 text-opacity-70 text-white">
          <p className="flex items-center space-x-1 font-mono cursor-pointer">
            <FileIconsTestcafe className="text-lg" />
            <span className="text-sm">Test Cases</span>
          </p>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex space-x-4 font-mono *:px-2 *:py-1 *:rounded-lg *:cursor-pointer">
            <p className="hover:bg-[#3c3836]">Case 1</p>
            <p className="hover:bg-[#3c3836]">Case 2</p>
            <p className="hover:bg-[#3c3836]">Case 3</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold">nums =</p>
            <input
              className="px-3 py-3 rounded-xl w-full bg-[#3c3836] outline-none font-mono"
              defaultValue="[2,7,11,15]"
            ></input>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold">target =</p>
            <input
              className="px-3 py-3 rounded-xl w-full bg-[#3c3836] outline-none font-mono"
              defaultValue="9"
            ></input>
          </div>
        </div>
      </div>
    </Split>
  );
}
