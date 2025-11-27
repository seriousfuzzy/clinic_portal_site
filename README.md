# オンラインクリニックポータルサイト

オンライン診察で全国のクリニックと患者をつなぐポータルサイトです。

## 🚀 主な機能

### 患者向け機能
- **患者登録・ログイン**: メール認証による安全な登録システム
- **クリニック検索**: 地域・診療科目による絞り込み検索
- **オンライン予約**: 簡単な予約システム
- **ビデオ診察**: Whereby/Daily統合によるオンライン診察
- **処方薬管理**: 処方履歴の確認と決済
- **配送追跡**: 薬品の配送状況確認

### クリニック向け機能
- **クリニック登録**: 医師免許証等の書類審査システム
- **予約管理**: カレンダー形式の予約管理
- **患者管理**: 診察履歴・処方履歴の管理
- **薬品管理**: 取り扱い薬品の価格設定
- **売上管理**: 月次売上レポート
- **オンライン診察**: 患者とのビデオ通話機能

### 管理者向け機能
- **クリニック審査**: 登録申請の承認・却下
- **お知らせ管理**: システム全体への通知機能
- **広告管理**: バナー広告の配信管理
- **売上管理**: 全体の売上・手数料管理

## 🛠 技術スタック

- **フロントエンド**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: SQLite (開発環境) / PostgreSQL (本番環境)
- **ORM**: Prisma 5
- **認証**: NextAuth.js
- **決済**: Stripe Connect
- **ビデオ通話**: Whereby SDK
- **メール**: Resend
- **UI**: Headless UI + Heroicons

## 📋 要件

- Node.js 18.0.0 以上
- npm または yarn

## 🚀 セットアップ

1. **リポジトリのクローン**
```bash
git clone <repository-url>
cd clinic_portal_site
```

2. **依存関係のインストール**
```bash
npm install
```

3. **環境変数の設定**
```bash
cp .env.example .env
```

以下の環境変数を設定してください：
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email (Resend)
RESEND_API_KEY="re_..."

# Video Call (Whereby)
WHEREBY_API_KEY="your-whereby-api-key"

# App Settings
CLINIC_REGISTRATION_FEE=50000
CLINIC_ANNUAL_FEE=120000
```

4. **データベースのセットアップ**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. **開発サーバーの起動**
```bash
npm run dev
```

アプリケーションは `http://localhost:3000` で起動します。

## 📁 プロジェクト構造

```
clinic_portal_site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   ├── auth/              # 認証ページ
│   │   ├── patient/           # 患者向けページ
│   │   ├── clinic/            # クリニック向けページ
│   │   └── admin/             # 管理者向けページ
│   ├── components/            # 再利用可能なコンポーネント
│   │   ├── layout/           # レイアウトコンポーネント
│   │   └── home/             # ホームページコンポーネント
│   ├── lib/                  # ユーティリティ・設定
│   └── types/                # TypeScript型定義
├── prisma/
│   ├── schema.prisma         # データベーススキーマ
│   └── migrations/           # マイグレーションファイル
└── public/                   # 静的ファイル
```

## 🗄 データベース設計

### 主要テーブル
- **users**: ユーザー基本情報（患者・クリニック・管理者共通）
- **patients**: 患者詳細情報
- **clinics**: クリニック詳細情報
- **appointments**: 予約情報
- **prescriptions**: 処方箋情報
- **medications**: 薬品マスタ
- **payments**: 決済情報
- **notifications**: お知らせ情報

## 🚀 デプロイ

### Vercel（推奨）
1. Vercelアカウントを作成
2. GitHubリポジトリを接続
3. 環境変数を設定
4. 本番用データベース（PostgreSQL）を設定
5. デプロイ

### その他のプラットフォーム
- Railway
- Render
- AWS
- Google Cloud Platform

## 📝 開発ガイドライン

### コーディング規約
- TypeScriptを使用
- ESLint + Prettierでコード品質を保持
- コンポーネントは関数型で作成
- propsの型定義を必須とする

### Git運用
- feature/機能名 でブランチを作成
- コミットメッセージは日本語で記述
- プルリクエスト時はレビューを必須とする

## 🔐 セキュリティ

- パスワードはbcryptでハッシュ化
- JWTトークンによるセッション管理
- CSRF保護
- SQLインジェクション対策（Prisma ORM使用）
- XSS対策（Next.jsの自動エスケープ）

## 📞 サポート

技術的な質問やバグ報告は、GitHubのIssuesをご利用ください。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🎯 今後の開発予定

- [ ] 予約カレンダーシステムの実装
- [ ] ビデオ診察機能の統合
- [ ] 処方・薬品管理システムの完成
- [ ] Stripe Connect決済システムの実装
- [ ] 管理者パネルの完成
- [ ] モバイルアプリ対応
- [ ] 多言語対応
- [ ] アフィリエイト機能
- [ ] 保険診療対応（マイナンバーカード連携）

---

**開発者**: オンラインクリニック開発チーム  
**最終更新**: 2024年11月26日