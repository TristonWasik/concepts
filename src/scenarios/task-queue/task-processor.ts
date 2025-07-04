import { ValidTask } from "../../utils/types";

export class TaskProcessor {
  static totalProcessed: number = 0;

  async process(task: ValidTask): Promise<boolean> {
    try {
      await this.send(task);
      TaskProcessor.totalProcessed += 1;
      return true;
    } catch {
      return false;
    }
  }

  private async send(task: ValidTask): Promise<void> {
    if (Math.random() < 0.5) {
      throw new Error("Random failure");
    }
  }

  static getTotal(): number {
    return 0;
  }
}
