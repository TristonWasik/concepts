export class SecretBox {
  secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  reveal(): string {
    return "";
  }
}
