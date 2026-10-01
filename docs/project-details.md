# Project details

Edit `src/data/projects.ts`. This is the shared source for the existing carousel
and the reusable details modal. All six original projects retain their order,
titles, descriptions, technology lists, categories, and card images.

## Adding content

Add the following optional fields directly to the relevant project record:

| Field | Content |
| --- | --- |
| `duration` | Verified duration, as a display string |
| `teamSize` | Verified team size, as a display string |
| `role` | Your actual role |
| `problem` | The challenge the project addresses |
| `solution` | How the project addresses that challenge |
| `features` | An array of verified feature descriptions |
| `githubUrl` | Absolute URL to this project's repository |
| `demoUrl` | Absolute URL to the deployed project |
| `linkedinUrl` | Absolute URL to the project post |
| `youtubeUrl` | Project video: YouTube watch, short, live, embed, or youtu.be URL |
| `videoThumbnail` | Optional local or remote thumbnail; otherwise the YouTube thumbnail is used |
| `videoTitle` | Optional preview title |
| `videoDuration` | Optional display duration, e.g. `3:24` |

Missing metadata says “To be added”; unavailable links and missing case-study
details say “Coming soon.” The solution falls back to the project's existing
description. Unavailable actions are noninteractive. Only absolute HTTP(S) URLs
become links. The old `#projects` card destinations were navigation placeholders,
not deployed demo URLs, and have been replaced by modal buttons.

The existing comma-separated `technologies` field powers both the carousel and
the technology grid. Supported technologies use the already-installed icon
library. Other entries get a styled text badge; no technologies are added
automatically.

## Hero and gallery images

Place project screenshots in `public/projects/` and reference them from the
relevant record. The paths below are examples; add the corresponding files first:

```ts
heroImage: {
  src: '/projects/your-project-desktop.webp',
  alt: 'Describe the actual project screen',
  fit: 'contain',
  position: 'center',
},
galleryImages: [
  { src: '/projects/your-project-mobile.webp', alt: 'Describe the mobile screen' },
  { src: '/projects/your-project-details.webp', alt: 'Describe the detail screen' },
],
```

Alternatively, import images from `src/assets/projects/` and use the imported
value as `src`. `contain` preserves the complete screenshot by default. Set
`fit: 'cover'` and `position: 'center top'` per image for a mockup designed to
fill the landscape banner. Images are never stretched.

The hero uses `heroImage`, then the existing `image` if it is a real screenshot,
then a warm illustrated placeholder. `galleryImages` extends the hero gallery;
duplicate paths are removed, and arrows only appear with two or more images.
Previous/next buttons wrap around and support Left/Right while focused.
Broken images fall back to the placeholder. Skill-card images are not reused.
Update `image` separately if you also want a new preview on the carousel card.

## Components and behavior

- `Projects.tsx` preserves the carousel and selects a project on card or arrow
  click. Mouse dragging uses a movement threshold to avoid accidental opens.
- `ProjectDetailsModal.tsx` contains the reusable hero, introduction, metadata,
  info cards, technologies, features, video, and links. The native modal dialog
  is portaled to the document body, keeping it above the portfolio's transforms.
- `project-details.css` contains the scoped cream/bronze presentation. Desktop
  has four metadata columns and three information columns; tablet has two and
  mobile stacks the information cards. The hero stays landscape.
- `projectMedia.ts` validates external URLs and extracts YouTube IDs.

Only the modal body scrolls. Its height is capped by the viewport, while all
content cards grow naturally with longer descriptions, features, or technology
lists. There are no fixed card heights or nested scrolling content sections.
The portfolio's scroll position and opening button's focus are restored on
close. Escape, the close button, and an outside click dismiss the dialog.
Reduced-motion preferences disable the opening animation.

YouTube playback starts only after pressing Play, using the privacy-enhanced
embed. Closing the dialog or selecting another project removes the iframe and
stops playback. Missing or invalid video URLs show a walkthrough placeholder.

## Local verification

Run `npm run dev` and open Featured Projects. Test card and arrow activation,
carousel dragging, keyboard navigation, Escape/outside/close-button dismissal,
focus restoration, scroll preservation, and narrow viewports. Add project media
and valid links to exercise the gallery and video paths. Run `npm run build` for
the TypeScript and production build checks.
