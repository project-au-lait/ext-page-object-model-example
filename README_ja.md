# Extended Page Object Model Example

このリポジトリはend-to-endテストのデザインパターンであるExtended Page Object Modelの実装例です。このリポジトリにはパターンを適用したテストコードと、テスト対象として使用する[OpenProject](https://www.openproject.org/)のDocker composeファイルが含まれます。Extended Page Object Modelの詳しい説明は[Project Au Laitのブログ記事](https://zenn.dev/prj_au_lait_jp/articles/2db136bdb2919e)を参照してください。

## 必要なソフトウェア

このリポジトリ内のテストコードを動作させるには以下のソフトウェアが必要です。

- Docker
- Node.js
- pnpm (任意)

Node.jsのパッケージマネージャーの種類は任意ですが、環境構築のコマンドはpnpmで記載しているため、それ以外のパッケージマネージャーを使用する場合は適宜読み替えてください。

## 環境構築

テストコードの実行環境を構築するには以下のコマンドを実行します。

```sh
git clone https://github.com/project-au-lait/ext-page-object-model-example.git
cd ext-page-object-model-exampl

docker compose up -d --wait
pnpm i
pnpm playwright install
pnpm playwright test first-login
```

コマンドの実行後は、URL: http://localhost:8080 username: admin、password: newadminpassでOpenProjectにログインできます。

## 実行

テストシナリオの実装例はtests/task.spec.tsです。このシナリオを実行するには以下のコマンドを実行します。

```sh
pnpm playwright test task.spec.ts --headed --trace on
```

上記の実行結果のレポートは以下を参照してください。

- [Playwright Report + Trace Viewer](https://aulait.dev/ext-page-object-model-example/ja/)

Playwrightのテストの実行方法については[公式ドキュメント](https://playwright.dev/docs/running-tests)を参照してください。

Dry Runモードでシナリオを実行するには以下のコマンドを実行します。

```sh
pnpm dry-run task.spec.ts
```

[[English](README.md)]