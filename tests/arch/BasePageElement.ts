import { expect, type Page } from '@playwright/test';
import { Action, DryRun } from '@arch/DryRun';

export default abstract class BasePageElement {
  page: Page;
  dryRun: DryRun;

  constructor(page: BasePageElement | { page: Page; dryRun: DryRun }) {
    this.page = page.page;
    this.dryRun = page.dryRun;
  }

  abstract get pageNameKey(): string;

  private async run(
    action: Action,
    itemNameKey: string,
    runAction: () => Promise<any>,
    additionalValue?: string
  ) {
    const log = this.dryRun.log(this.pageNameKey, itemNameKey, action, additionalValue);

    if (this.dryRun.isOn) {
      return;
    }

    await this.consoleLog(log);

    return await runAction();
  }

  private async consoleLog(log: string) {
    await this.page.evaluate(`console.log(\`${log}\`);`);
  }

  protected async inputText(selector: string, value: any) {
    await this.run(
      Action.INPUT,
      selector,
      () => this.page.locator(selector).fill(value.toString()),
      value
    );
  }

  protected async select(selector: string, value: any) {
    await this.run(
      Action.INPUT,
      selector,
      async () => {
        const select = this.page.locator(selector);
        await select.click();
        const ariaControls = await select
          .locator('div.ng-input > input')
          .getAttribute('aria-controls');
        await this.page.locator(`#${ariaControls}`).getByText(value.toString()).click();
      },
      value
    );
  }

  protected async open(path: string) {
    await this.run(Action.GOTO, path, () => this.page.goto(path));
  }

  protected async click(selector: string) {
    await this.run(Action.CLICK, selector, () => this.page.locator(selector).click());
  }

  protected async expectFlashMessage(message: string) {
    await this.run(Action.EXPECT_VISIBLE, message, () =>
      expect(this.page.locator('#primerized-flash-messages p.Banner-title')).toHaveText(message)
    );
  }
}
