import { describe, it, expect, vi } from "vitest";
import { loadTasks } from "../../src/scenarios/task-queue/task-loader";
import { TaskProcessor } from "../../src/scenarios/task-queue/task-processor";
import { isValidTask } from "../../src/scenarios/task-queue/type-guard";
import { ValidTask, Task } from "../../src/utils/types";

describe("Task Queue System", () => {
  it("should load tasks and parse JSON", async () => {
    const fakeTasks: Task[] = [
      { id: "1", type: "email", payload: { message: "Hello" } },
      { id: "2", type: "sms", payload: { message: "Hi" } },
    ];
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        text: async () => JSON.stringify(fakeTasks),
      })
    );

    const tasks = await loadTasks<Task>("http://fake.api/tasks");
    expect(tasks.length).toBe(2);
    expect(tasks[0].id).toBe("1");
  });

  it("should validate tasks correctly", () => {
    const valid: Task = { id: "1", type: "email", payload: { message: "Hi" } };
    const invalid: Task = { id: "2", type: "sms", payload: null };
    expect(isValidTask(valid)).toBe(true);
    expect(isValidTask(invalid)).toBe(false);
  });

  it("should process valid tasks with retry and track total", async () => {
    const processor = new TaskProcessor();
    const task: ValidTask = {
      id: "1",
      type: "email",
      payload: { message: "Hi" },
    };

    const result = await processor.process(task);
    expect(result).toBe(true);

    const total = TaskProcessor.getTotal();
    expect(total).toBeGreaterThanOrEqual(1);
  });
});
