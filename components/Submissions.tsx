export default function Submissions() {
  return (
    <main>
      <div className="py-2 px-3 font-Inter text-[14px] grid grid-cols-4 border-b border-white border-opacity-10">
        <p>Status</p>
        <p>Language</p>
        <p>Runtime</p>
        <p>Memory</p>
      </div>
      <div className="py-2 px-3 font-mono text-[14px] grid grid-cols-4 ">
        <p className="text-green-600 font-bold">Accepted</p>
        <p>Javascript</p>
        <p>39ms</p>
        <p>3.6 MB</p>
      </div>
      <div className="py-2 px-3 font-mono text-[14px] grid grid-cols-4 ">
        <p className="text-green-600 font-bold">Accepted</p>
        <p>C</p>
        <p>5ms</p>
        <p>1 MB</p>
      </div>
    </main>
  );
}
