import { JudgeResponse } from "@/utils/Types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { codeEx } = await req.json();

  if (process.env.JUDGE0_URL && codeEx) {
    const submissionResp = await fetch(
      `${process.env.JUDGE0_URL}/submissions/?base64_encoded=false&wait=false`,
      {
        method: "POST",
        headers: {
          "X-Auth-Token": "f6583e60-b13b-4228-b554-2eb332ca64e7",
          "X-Auth-User": "a1133bc6-a0f6-46bf-a2d8-6157418c6fe2",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_code: codeEx,
          language_id: 63,
        }),
      }
    );

    const { token } = await submissionResp.json();

    setTimeout(async () => {
      if (token) {
        const fetchSub: JudgeResponse = await (
          await fetch(
            `${process.env.JUDGE0_URL}/submissions/${token}/?base64_encoded=false&wait=false`
          )
        ).json();

        console.log(fetchSub);

        return NextResponse.json({
          data: fetchSub,
          error: fetchSub.stderr,
        });
      }
    }, 5000);
  }
  return NextResponse.json({});
}
