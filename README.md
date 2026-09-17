# Chelsea Pejic — acting website

Existing Next.js App Router site for `cpejic/chelsea-pejic-website`, deployed through the existing Vercel project `chelsea-pejic-website`.

## Local development

`npm ci`, then `npm run dev`. Run `npm run build` before deploying.

## Updating approved materials

Edit `app/content.js` to add Chelsea's approved email, PDF résumé, portraits and media links. Put local assets in `public/` and use paths such as `/headshots/chelsea.jpg`. The hero supports a focal point through `position`. Portraits use responsive Next Image rendering. Gallery images need descriptive alt text and a look label. Media links open the original approved clip in a new tab. Upload only material approved for public display.

Unprovided materials remain null or empty and show intentional pending states, without fake downloads, fake contact forms or invented credits. Résumé categories can grow independently. Update the dated production feature in `app/page.js` after the run. Content is static and requires no database or client-side component state.

## Deployment and domains

Continue using the existing GitHub → Vercel connection. Branch deployments can be reviewed before merging into main. **Do not change Wix, DNS, or connect chelseapejic.com until Chelsea approves the finished replacement.** No custom-domain configuration is included in this update.
