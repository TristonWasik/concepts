export class Secret {
  reveal(): string {
    return "42";
  }
}

export class SecretProxy {
  private real: Secret;

  constructor(real: Secret) {
    this.real = real;
  }

  reveal(): string {
    return this.real.reveal();
  }
}
