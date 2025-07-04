type Listener = (msg: string) => void;

export class Observable {
  private listeners: Listener[] = [];

  subscribe(listener: Listener): void {
    this.listeners.push(listener);
  }

  notify(msg: string): void {}
}
