export class CPU {
  start(): string {
    return "CPU started";
  }
}

export class Memory {
  load(): string {
    return "Memory loaded";
  }
}

export class Disk {
  read(): string {
    return "Disk read";
  }
}

export class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private disk = new Disk();

  boot(): string {
    return "";
  }
}
