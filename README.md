# vladkhambir.com

Personal blog of Vlad Khambir, built with Jekyll and a custom design.

## Structure

- `_posts/` articles in Markdown
- `_layouts/` page templates: `default`, `home`, `post`
- `_includes/` shared parts: newsletter block, tags
- `assets/css/main.css` all styles, dark and light themes
- `assets/js/main.js` theme switch
- `assets/img/` avatar, favicons, post images

Each post needs `title`, `date`, `tags` and a short `description` for the home page card.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

## Deploy

A push to `master` builds the site with GitHub Actions and publishes it to the `gh-pages` branch (`tools/deploy.sh`).
