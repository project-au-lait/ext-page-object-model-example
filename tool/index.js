import fs from 'fs';

fs.readFile(
  '../test-results/task-Register-a-task-chromium/trace/test.trace',
  'utf8',
  (err, data) => {
    const lines = data.split('\n');

    lines.forEach((line) => {
      const trace = JSON.parse(line);
      const apiName = trace.apiName;
      if (apiName) {
        if (apiName == 'page.goto') {
          console.log(`await page.goto('${trace.params.url}');`);
        } else if (apiName == 'locator.fill') {
          console.log(
            `await page.locator('${trace.params.selector}').fill('${trace.params.value}');`
          );
        } else if (apiName == 'locator.click') {
          console.log(`await page.locator('${trace.params.selector}').click();`);
        } else {
          // console.log(apiName);
        }
      }
    });
  }
);
