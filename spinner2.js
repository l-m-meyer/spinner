const animations = ['|', '/', '-', '\\', '|'];

let ms = 100;
for (const ele of animations) {
  setTimeout(() => {
    process.stdout.write(`\r${ele}    `)
  }, ms += 200);
}

setTimeout(() => console.log(), ms + 100);