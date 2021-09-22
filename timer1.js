const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('No alarms set, try again');
}

for (const alarm of args) {
  if (Number.isNaN(Number(alarm)) || Number(alarm) < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`alarm at ${alarm} second(s)`);
  }, Number(alarm) * 1000);
}