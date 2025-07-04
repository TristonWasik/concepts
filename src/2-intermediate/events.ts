export interface EventEmitter {
  subscribe(listener: (msg: string) => void): void;
  unsubscribe(listener: (msg: string) => void): void;
  emit(msg: string): void;
}

export class SimpleEventEmitter implements EventEmitter {
  private listeners: Array<(msg: string) => void> = [];

  subscribe(listener: (msg: string) => void): void {}

  unsubscribe(listener: (msg: string) => void): void {}

  emit(msg: string): void {}
}
