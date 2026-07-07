# helesmichal.github.io

Personal portfolio site for **Michal Heleš** — AI & Software Developer, studying Creative Technologies & AI at Howest.

**Live:** [helesmichal.github.io](https://helesmichal.github.io/)

## Stack

Plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies.

## Structure

```
index.html              Home page (hero, about, experience, skills, projects, contact)
css/style.css            All styling
js/script.js              Shared behavior (nav, scroll reveal, spotlight hover, header)
js/project-detail.js     Video modal + image carousel, used on detail pages

projects/                Case-study pages for individual projects
experience/               Detail pages for each work/education entry, with photos

assets/                  Images, favicon, resume PDF
  reftrack/                Photos for the RefTrack project
  experience/<company>/    Photos for each experience entry
```

## Deployment

Served via GitHub Pages directly from the `master` branch. Pushing to `master` redeploys automatically:

```
git add -A
git commit -m "..."
git push
```
