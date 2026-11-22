# A1 Sweets — Complete Header + Animated Hero

## Install
1. Extract this ZIP into a new folder (do not merge with an older project).
2. Open that folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and visit http://localhost:3000.

## Included
- `components/HeaderTopBar.tsx` — top contact bar, social icons, red catering CTA and bottom border.
- `app/page.tsx` — correctly imports `../components/HeaderTopBar` and includes the full A1 Sweets landing page with animated 3-image hero slider, navigation, menu, gallery, catering and contact sections.
- `public/images/` — provided A1 Sweets food images and high-resolution Dawat placeholder slider photographs.

## Before publishing
- Verify the email and add your correct phone number in `components/HeaderTopBar.tsx`.
- Add actual social media profile URLs; icons are intentionally non-clickable until real links are provided.
- Replace Dawat hero photos with A1 Sweets-owned/licensed photography.
- Audit dependencies and upgrade vulnerable versions safely before deployment.

## Troubleshooting
`Module not found` errors: ensure `components/HeaderTopBar.tsx` is in the project root, beside `app/`, and that you opened this extracted folder in VS Code. The relative import in `app/page.tsx` avoids relying on the @ alias.
