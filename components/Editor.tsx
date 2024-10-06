import { Editor, useMonaco } from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as NightOwl from "monaco-themes/themes/Monokai.json";
import { editor } from "monaco-editor";
import {
  MaterialSymbolsLightOpenInFull,
  PhCaretDownBold,
  PhDotDuotone,
  PhPlayFill,
  PhTestTubeFill,
  SolarStarRingBoldDuotone,
} from "@/components/Icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Languages } from "@/utils/Language";

export default function CodeEditor() {
  const [editorText, setEditorText] = useState<string>();
  const [selectedLanguage, setSelectedLanguage] = useState<{
    id: number;
    name: string;
  }>(Languages[0]);
  const [fullscreenMode, setFullScreenMode] = useState<boolean>(false);
  const [languageSelect, setLanguageSelect] = useState<boolean>(false);
  const codeEditor = useRef<HTMLDivElement>(null);
  const languageSelector = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  const monacoEditor = useMonaco();

  monacoEditor?.editor.defineTheme(
    "NightOwl",
    NightOwl as editor.IStandaloneThemeData
  );

  useGSAP(
    () => {
      if (fullscreenMode) {
        gsap.to(codeEditor.current, {
          position: "absolute",
          height: "100vh",
          width: "100vw",
          bottom: 0,
          right: 0,
        });
      }
    },
    {
      dependencies: [fullscreenMode],
      revertOnUpdate: true,
      scope: codeEditor,
    }
  );

  useGSAP(
    () => {
      if (languageSelect) {
        gsap.to(languageSelector.current, {
          display: "block",
        });
      }
    },
    {
      dependencies: [languageSelect],
      revertOnUpdate: true,
      scope: languageSelector,
    }
  );
  return (
    <div
      ref={codeEditor}
      className="w-full editorContainer rounded-lg overflow-hidden h-full col-span-1 relative border border-white border-opacity-10"
    >
      <div className="bg-[#272822] flex items-center justify-between p-2 border-b border-white border-opacity-10 text-opacity-70 text-white ">
        <div className="flex space-x-1 items-center">
          <p className="text-sm font-mono ">{selectedLanguage.name}</p>
          <PhCaretDownBold
            className="text-xs cursor-pointer"
            onClick={() => {
              setLanguageSelect(!languageSelect);
            }}
          />
          <div
            ref={languageSelector}
            className="absolute hidden z-[10] font-mono space-y-3 top-[65px] w-[300px] left-[-5px] bg-[#24292e] p-2 border border-white border-opacity-10"
          >
            {Languages.map((L) => {
              return (
                <p
                  className="group cursor-pointer flex justify-between items-center"
                  key={L.id}
                  onClick={() => {
                    setSelectedLanguage(L);
                    setLanguageSelect(false);
                  }}
                >
                  <span className="text-sm">{L.name}</span>
                  <span className="hidden group-hover:block">
                    <PhDotDuotone className="text-xl" />
                  </span>
                </p>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => {
            setFullScreenMode(!fullscreenMode);
          }}
        >
          <MaterialSymbolsLightOpenInFull className="text-lg cursor-pointer" />
        </div>
      </div>
      <div className="absolute z-[10] bottom-0 flex my-4 w-full justify-between px-5">
        <div className="flex">
          <button className="bg-gradient-to-r from-[#4E83EF] to-[#D2667A] rounded-full">
            <SolarStarRingBoldDuotone className="text-white m-4 text-2xl" />
          </button>
        </div>
        <div className="flex space-x-3">
          <button className="bg-[#777777] rounded-full">
            <PhTestTubeFill className="text-white m-4 text-2xl" />
          </button>
          <button
            className="bg-[#02B128] rounded-full"
            onClick={async () => {
              const exResp = await (
                await fetch("/api/code/submission/submit", {
                  method: "POST",
                  body: JSON.stringify({
                    codeEx: editorText,
                  }),
                })
              ).json();

              console.log(exResp);
            }}
          >
            <PhPlayFill className="text-white m-4 text-2xl" />
          </button>
        </div>
      </div>
      <Editor
        onChange={(eV) => {
          setEditorText(eV);
        }}
        options={{
          minimap: { enabled: false },
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          scrollbar: {
            vertical: "hidden",
          },
          overviewRulerBorder: false,
        }}
        className="w-full h-full"
        defaultLanguage="javascript"
        theme="NightOwl"
        defaultValue="// Avalothan Mudichivitanga Ponga 😭"
      />
    </div>
  );
}
