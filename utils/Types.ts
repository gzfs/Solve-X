export interface JudgeResponse {
  stdout: any;
  time: any;
  memory: any;
  stderr: any;
  token: string;
  compile_output: any;
  message: any;
  status: Status;
}

export interface Status {
  id: number;
  description: string;
}
