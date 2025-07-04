export class LegacyPrinter {
  printOld(msg: string): string {
    return `**${msg}**`;
  }
}

export class PrinterAdapter {
  private adaptee: LegacyPrinter;

  constructor(adaptee: LegacyPrinter) {
    this.adaptee = adaptee;
  }

  print(msg: string): string {
    return msg;
  }
}
