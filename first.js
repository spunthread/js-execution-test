Promise.resolve().then(() => console.log(1));

queueMicrotask(() => console.log(2));

setTimeout(() => console.log(3), 0);

requestIdleCallback(() => () => console.log(4), { timeout: 0 });

console.log(5);

new Promise(() => console.log(6));

(async () => console.log(7))();
