export default class ServerError extends Error {
  code: number;

  adminMessage?: string;

  constructor(code: number, message: string, adminMessage?: string) {
    super(message);
    this.code = code;
    this.adminMessage = adminMessage;
  }

}
