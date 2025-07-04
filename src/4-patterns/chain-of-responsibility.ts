export abstract class Handler {
  protected next?: Handler;

  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }

  handle(request: string): string | undefined {
    if (this.next) {
      return this.next.handle(request);
    }
    return undefined;
  }
}

export class SpamHandler extends Handler {
  handle(request: string): string | undefined {
    if (request === "spam") return "Blocked spam";
    return super.handle(request);
  }
}

export class ImportantHandler extends Handler {
  handle(request: string): string | undefined {
    if (request === "important") return "Handled important";
    return super.handle(request);
  }
}
