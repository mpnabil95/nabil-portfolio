# Muhammad Pangeran Nabil — Data Scientist Portfolio

A personal portfolio presenting my work in business analytics, machine learning, and Indonesian natural language processing. Each featured project has a dedicated case study covering the question, dataset, approach, results, and limitations.

The site is built with Next.js, React, TypeScript, and Tailwind CSS and exported as a static website. It includes responsive layouts, subtle motion with reduced-motion support, project navigation, contact links, and a downloadable CV.

## Featured work

| Project | Focus | Explore |
| --- | --- | --- |
| Olist E-commerce Intelligence | Commercial performance, customer behavior, and delivery analysis on historical Brazilian e-commerce data | [Project repository](https://github.com/mpnabil95/olist-ecommerce-intelligence) |
| Student Success Prediction | Retrospective dropout-risk evaluation, calibrated probabilities, and a human-review policy | [Project repository](https://github.com/mpnabil95/student-success-prediction) |
| Kurikulum Merdeka Sentiment Analysis | Indonesian sentiment classification with IndoBERT and an interactive application | [Project repository](https://github.com/mpnabil95/Analisis_Sentimen-Kurikulum_Merdeka-indoBERT) |

The case studies distinguish observed results from broader claims. The Olist figures describe a historical delivered-order sample; Student Success reports retrospective holdout performance and review workload; the IndoBERT case study does not claim a metric that has not been verified.

## Explore locally

Install [Node.js](https://nodejs.org/) 22.13 or newer, extract the ZIP, and open a terminal **inside `nabil-portfolio/`** (the directory containing `package.json`). The included `out/` directory is a ready-made build:

```sh
node scripts/serve-static.mjs
```

Visit <http://localhost:3000>. Press Ctrl+C to stop the server. This preview needs no package installation. Open the site through the local server so links and assets resolve correctly.

To make changes, install pnpm 11.25.0 and project dependencies, then start the development server:

```sh
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

On Windows PowerShell, if execution of `npm.ps1` or `pnpm.ps1` is blocked, use `npm.cmd` and `pnpm.cmd` for those commands, or use Command Prompt. You do not need to change PowerShell's execution policy.

Check and rebuild after editing:

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

`pnpm build` exports the site into `out/`. `pnpm start` serves the last build. The development server and static preview both default to port 3000, so run only one at a time.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Homepage, project index, case studies, layout, and styles |
| `components/` | Shared navigation, visualizations, and motion |
| `lib/portfolio-data.ts` | Featured project descriptions, evidence, and source links |
| `lib/profile.ts` | Contact information and CV path |
| `public/documents/` | Downloadable CV |
| `out/` | Prebuilt site for local preview; excluded from Git |
| `.github/workflows/deploy.yml` | Build and GitHub Pages deployment after a push to `main` |
| `PANDUAN-GITHUB.md` | Step-by-step publication instructions in Indonesian |

This repository contains the website's source and the owner's CV, not the underlying datasets or trained models. Two case-study figures are served from their original GitHub repositories and require an internet connection.

## Publish from GitHub

Create an empty repository under [mpnabil95](https://github.com/mpnabil95), for example `nabil-portfolio`, then commit and push the **contents of the extracted `nabil-portfolio/` directory** to its `main` branch. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions**. If the first workflow run occurred before Pages was enabled, rerun it from **Actions**.

The included workflow installs the locked dependencies, checks TypeScript and lint, builds the static site, and deploys `out/`. It chooses the correct base path for a project repository such as `mpnabil95.github.io/nabil-portfolio/`, and uses the site root if the repository is named `mpnabil95.github.io`. Later pushes to `main` redeploy automatically. See [PANDUAN-GITHUB.md](PANDUAN-GITHUB.md) for the exact commands and Windows notes.

Only the owner commits or pushes to GitHub. The ZIP contains no Git history, access tokens, or dependency installation. `out/`, `.next/`, and `node_modules/` are excluded by `.gitignore`.

## Attribution and contact

The Olist case study references the Brazilian E-Commerce Public Dataset by Olist (CC BY-NC-SA 4.0). The Student Success case study references the UCI [Predict Students' Dropout and Academic Success](https://doi.org/10.24432/C5MC89) dataset (CC BY 4.0). The underlying projects and third-party packages retain their own licenses. No open-source license has been assigned to this portfolio's source code.

**Muhammad Pangeran Nabil** · [LinkedIn](https://www.linkedin.com/in/mpnabil) · [GitHub](https://github.com/mpnabil95) · [Email](mailto:mpnabil95@gmail.com)
