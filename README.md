# IT Professional Portfolio

A responsive, dependency-free portfolio starter built with HTML, CSS, and a small amount of JavaScript. No build step or paid service is required to publish the static site.

## Personalize before publishing

1. Add your profile PNG as `assets/profile.png`. The hero profile card will show your initials until the image is present.
2. Add the institution and graduation year for your MS in Computer Science.
3. Confirm that the listed credential titles and issuer links remain accurate; add other verified credentials if you want to include them.
4. Add specific project outcomes or public links only when you can share them; keep confidential details out.
5. Preview `index.html` in a browser and check the mobile navigation, credential links, and contact links.

The credentials section links to ten supplied verification pages. CISSP, CISA, CISM, and CCNA entries are explicitly presented as Coursera specializations or exam-preparation coursework, not as the corresponding professional certifications.

The research section includes the 2023 *Information* article and its inclusion in MDPI's 2024 *Artificial Intelligence and Big Data Applications* reprint (pp. 66–83), with journal and book DOI links. The publication record spells the first author's name “Asif Hussian”; the portfolio notes that source spelling to make the name discrepancy transparent.

The site currently loads its typefaces from Google Fonts; system-font fallbacks are included. Remove the `@import` in `styles.css` if you prefer no external font requests.

## Free hosting recommendation

For this static portfolio, **Cloudflare Pages is my recommendation**: its free plan supports Git-based deploys, a `*.pages.dev` address, automatic HTTPS, and up to 500 builds per month. A plain HTML site has no framework or server requirement. See the [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/) and [Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/).

### Publish with Cloudflare Pages

1. Put these files in a GitHub repository and push the production branch.
2. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the repository. Leave the build command blank; set the build output directory to `.` for this root-level static site.
4. Deploy. Your site will be available at a project address such as `your-project.pages.dev`. The project name must be available.
5. Future pushes to the production branch deploy updates automatically.

You do not need to buy a domain to use the provider's subdomain. A separately purchased custom domain is optional and is not included in the free hosting plan.

## Other free options

- **Vercel Hobby** (`*.vercel.app`): a smooth alternative, especially if you later use Next.js. Its Hobby plan is intended for personal, non-commercial use; check the current [plan terms and limits](https://vercel.com/pricing) for your intended use.
- **Netlify Free** (`*.netlify.app`): also straightforward for static sites and includes deploy previews. Its current free plan uses a monthly credit allowance, so monitor usage and review the [current pricing](https://www.netlify.com/pricing/).

All three can host this kind of static portfolio at no hosting cost within their plan limits. For a simple personal portfolio, Cloudflare Pages is a strong default; choose another if its workflow better fits how you plan to build.

## Contact form note

The contact link opens the visitor's email app; it does not send a message through the website. A working on-site form would need a form provider or backend, which may have its own free-tier limits.
