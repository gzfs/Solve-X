import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export default function Editorial() {
  const renderMarkdown = `
  <style>
  * {
    color: white;
  }
  </style>

  <h2 style="color:white;margin-top:20px">Video Solution</h2>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/KLlXCFG5TnA?si=T00e-BaVXz-8Qy2V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  <h2 style="color:white;margin-top:20px">Solution Article</h2>
  <h3 style="color:white;margin-top:-10px">Algorithm 1:</h3>
  <p>The brute force approach is simple. Loop through each element x and find if there is another value that equals to <code style="color:white">target - x</code>.</p>
  <h3 style="color:white;margin-top:-10px">Complexity Analysis</h3>
  
  Time Complexity: $O(n^2)$
  <br />
  For each element, we try to find its complement by looping through the rest of the array which takes $O(n^2)$ time. Therefore, the time complexity is $O(n^2)$.
  <br />
  <br />
  Space Complexity: $O(1)$
  <br />
  The space required does not depend on the size of the input array, so only constant space is used.
  `;

  return (
    <div className="prose px-4">
      <Markdown
        className="font-Inter leading-tight"
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        children={renderMarkdown}
      />
    </div>
  );
}

{
  /* <style>
  * {
    color: white;
  }
  </style>

  <h2 style="color:white;margin-top:20px">Video Solution</h2>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/KLlXCFG5TnA?si=T00e-BaVXz-8Qy2V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  <h2 style="color:white;margin-top:20px">Solution Article</h2>
  <h3 style="color:white;margin-top:-10px">Algorithm 1:</h3>
  <p>The brute force approach is simple. Loop through each element x and find if there is another value that equals to <code style="color:white">target - x</code>.</p>
  <h3 style="color:white;margin-top:-10px">Complexity Analysis</h3>
  $ O $ */
}
