# NanoFrontier Careers Site

採用サイトの更新・運用ガイド

## プロジェクト概要

- **技術スタック**: Astro (静的サイトジェネレータ)
- **ホスティング**: GitHub Pages
- **URL**: https://careers.nanofrontier.jp
- **リポジトリ**: careers-site
- **Node.js**: v18.14以上

## 更新フロー

### 1. 自動デプロイ
- `main` ブランチへのプッシュで自動デプロイ
- GitHub Actions で自動ビルド・デプロイ
- 環境変数: `PUBLIC_GA_TRACKING_ID`（Google Analytics）

### 2. 手動デプロイ
- GitHub の Actions タブから `workflow_dispatch` で手動実行可能

## コンテンツ更新方法

### 求人情報の更新

#### 求人追加・編集
1. `src/content/jobs/` 以下に言語別フォルダがある
   - `ja/` - 日本語求人
   - `en/` - 英語求人

2. 各求人は `.mdx` ファイルで管理
   - ファイル名が URL スラッグになる（例: `research-scientist.mdx` → `/jobs/research-scientist`）

3. **求人のフロントマター必須項目**:
   ```yaml
   ---
   title: "求人タイトル"
   location: "勤務地"
   employmentType: "FULL_TIME" # FULL_TIME, PART_TIME, CONTRACT, INTERN
   department: "R&D" # R&D, Engineering, Business, Sales, Corporate (任意)
   description: "求人の概要"
   datePosted: "2025-01-15" # YYYY-MM-DD形式
   validThrough: "2025-03-15" # 任意、募集期限
   identifier: "NF-2025-1008" # 任意、求人ID
   tags: ["Research", "Synthesis"] # 任意、タグ配列
   ---
   ```

4. **新規求人追加手順**:
   ```bash
   # 1. 対応する言語フォルダに .mdx ファイルを作成
   touch src/content/jobs/ja/new-position.mdx
   touch src/content/jobs/en/new-position.mdx
   
   # 2. フロントマターと内容を記述
   # 3. コミット・プッシュで自動デプロイ
   ```

### メンバー紹介（People）の更新

1. `src/content/people/` に `.mdx` ファイルを配置
2. **フロントマター必須項目**:
   ```yaml
   ---
   title: "記事タイトル"
   role: "役職" # 任意
   department: "部署" # 任意
   date: "2025-01-15" # 投稿日
   summary: "概要" # 任意
   hero: "/path/to/image.jpg" # 任意、画像パス
   quote: "引用文" # 任意
   joined: "入社年月" # 任意
   name: "名前" # 任意
   link: "https://example.com" # 任意、外部リンク
   ---
   ```

### ストーリー（Stories）の更新

1. `src/content/stories/` に `.mdx` ファイルを配置
2. **フロントマター必須項目**:
   ```yaml
   ---
   title: "ストーリータイトル"
   summary: "概要" # 任意
   hero: "/path/to/image.jpg" # 任意、画像パス  
   date: "2025-01-15" # 投稿日
   ---
   ```

## ファイル構成

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── Footer.astro
│   ├── Header.astro
│   ├── JobCard.astro    # 求人カード表示
│   └── JobRow.astro     # 求人一覧表示
├── content/             # コンテンツファイル
│   ├── config.ts        # コレクション定義
│   ├── jobs/
│   │   ├── ja/          # 日本語求人
│   │   └── en/          # 英語求人
│   ├── people/          # メンバー紹介
│   └── stories/         # ストーリー
├── layouts/
│   └── DefaultLayout.astro # 基本レイアウト
├── pages/
│   ├── index.astro      # トップページ
│   ├── jobs/
│   │   ├── index.astro  # 求人一覧
│   │   └── [slug].astro # 個別求人ページ
│   └── en/              # 英語版ページ
└── styles/              # CSS
    ├── global.css
    └── tokens.css
```

## 開発・確認方法

### ローカル開発
```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:4321 でアクセス

# ビルド確認
npm run build

# ビルド結果のプレビュー
npm run preview
```

### 型チェック
```bash
npm run check
```

## 注意点

1. **画像ファイル**: `public/` フォルダに配置
2. **SEO**: 各ページに適切な `title`, `description`, `canonical` を設定
3. **多言語対応**: 日本語・英語の両方でコンテンツを用意
4. **Schema.org**: 求人情報は構造化データ（JSON-LD）で出力
5. **Analytics**: Google Analytics が設定済み

## よくある更新作業

### 新しい求人を追加する
1. `src/content/jobs/ja/` と `src/content/jobs/en/` に同名の `.mdx` ファイルを作成
2. 既存ファイルを参考にフロントマターと内容を記述
3. コミット・プッシュで自動デプロイ

### 求人を非公開にする
1. 該当の `.mdx` ファイルを削除
2. または `validThrough` を過去の日付に設定

### 会社情報を更新する
- トップページ: `src/pages/index.astro`
- レイアウト: `src/layouts/DefaultLayout.astro`
- フッター: `src/components/Footer.astro`

### スタイルを調整する
- グローバルスタイル: `src/styles/global.css`
- デザイントークン: `src/styles/tokens.css`

## 緊急時の対応

### サイトが表示されない場合
1. GitHub Actions の実行状況を確認
2. `main` ブランチの最新コミットを確認
3. 必要に応じて前のコミットにリバート

### ビルドエラーの場合
1. ローカルで `npm run build` を実行してエラーを確認
2. フロントマターの形式やファイル名を確認
3. 修正後、再度プッシュ

---

**更新頻度の目安**:
- 求人情報: 随時
- メンバー紹介: 月1-2回
- 会社情報: 四半期に1回程度
