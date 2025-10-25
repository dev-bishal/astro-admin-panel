# 🚀 Astro Admin Panel

A modern, responsive, and lightweight Admin Panel built with **Astro**.  
Designed for speed, simplicity, and an easy customization experience.

---

## ✨ Features

- ⚡ Blazing fast with Astro’s static-first approach
- 📱 Fully responsive layout
- 🎨 Clean and modern UI
- 🔐 Authentication-ready structure
- 🧩 Modular and scalable component architecture
- 🌙 Dark mode (In Progress)


---
## 📷 Screenshots
- 
---

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS (if included) / Custom CSS
- **Icons**: Include library name if used
- **Deployment**: GitHub Pages

---
## 📦 Installation & Setup

Clone the project:

```bash
git clone https://github.com/dev-bishal/astro-admin-panel.git
cd astro-admin-panel
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI        
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
|   │   └── AdminHeader.astro
|   │   └── CalendarWidget.astro
|   │   └── ChartLine.astro
|   │   └── ChartPie.astro
|   │   └── Sidebar.astro
│   └── Layout/
|   │   └── AdminLayout.astro
|   │   └── MainContainer.astro
│   └── pages/
│   │   └── articles/
│   │   │   └── categroies.astro
│   │   │   └── new.astro
|   │   └── 404.astro
|   │   └── articles.astro
│   │   └── index.astro
│   │   └── login.astro
│   │   └── messages.astro
│   │   └── others.astro
│   │   └── products.astro
│   │   └── profiles.astro
│   │   └── projects.astro
│   │   └── register.astro
│   │   └── schedule.astro
│   │   └── settings.astro
│   │   └── users.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.