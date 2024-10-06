import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Description() {
  const renderMarkdown = `
  <style>
  * {
    color: white;
  }
  </style>

  <h1 style="color:white">1. Two Sum</h1>

  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  <p style="font-size:18px;margin-bottom:-10px"><b>Example 1:</b></p>
  <p style="margin-bottom:-20px"><b style="font-size:16px;font-weight:600">Input:</b></p>
  <pre style="font-size:16px;margin-bottom:-10px">nums = [3,2,4], target = 6</pre> 
  <p style="margin-bottom:-20px"><b style="font-size:16px;font-weight:600">Output:</b></p>
  <pre style="font-size:16px">[1,2]</pre> 

  <p style="font-size:18px;margin-bottom:-10px"><b>Example 2:</b></p>
  <p style="margin-bottom:-20px"><b style="font-size:16px;font-weight:600">Input:</b></p>
  <pre style="font-size:16px;margin-bottom:-10px">nums = [2,7,11,15], target = 9</pre> 
  <p style="margin-bottom:-20px"><b style="font-size:16px;font-weight:600">Output:</b></p>
  <pre style="font-size:16px">[0,1]</pre> 

  <p style="margin-bottom:-20px"><b style="font-size:16px;font-weight:600">Constraints:</b></p>
  <pre style="font-size:16px;margin-bottom:-15px">2 <= nums.length <= 104</pre>
  <pre style="font-size:16px;margin-bottom:-15px">-109 <= nums[i] <= 109</pre>
  <pre style="font-size:16px">-109 <= target <= 109</pre>

  <p style="font-size:16px"><b>Follow-up:</b> Can you come up with an algorithm that is less than O(n2) time complexity?
`;

  return (
    <div className="prose p-4">
      <Markdown
        className="font-Inter leading-tight"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        children={renderMarkdown}
      />
    </div>
  );
}
