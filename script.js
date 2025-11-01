// Tutorial data structure
const tutorials = [
    { id: 0, title: "Getting Started", filename: "tutorial-00-README.md", emoji: "🚀", progress: 100 },
    { id: 1, title: "Introduction to Python", filename: "tutorial-01-introduction-to-python.md", emoji: "👋", progress: 100 },
    { id: 2, title: "Variables and Data Types", filename: "tutorial-02-variables-and-data-types.md", emoji: "📦", progress: 100 },
    { id: 3, title: "Operators and Expressions", filename: "tutorial-03-operators-and-expressions.md", emoji: "➗", progress: 100 },
    { id: 4, title: "Control Flow", filename: "tutorial-04-control-flow.md", emoji: "🔄", progress: 100 },
    { id: 5, title: "Loops", filename: "tutorial-05-loops.md", emoji: "🔁", progress: 100 },
    { id: 6, title: "Functions", filename: "tutorial-06-functions.md", emoji: "📝", progress: 100 },
    { id: 7, title: "Collections", filename: "tutorial-07-collections.md", emoji: "📚", progress: 100 },
    { id: 8, title: "Strings and Files", filename: "tutorial-08-strings-and-files.md", emoji: "📄", progress: 100 },
    { id: 9, title: "Errors and Exceptions", filename: "tutorial-09-errors-and-exceptions.md", emoji: "⚠️", progress: 100 },
    { id: 10, title: "Mini Project", filename: "tutorial-10-mini-project.md", emoji: "🎮", progress: 100 },
    { id: 11, title: "Introduction to OOP", filename: "tutorial-11-introduction-to-oop.md", emoji: "🎯", progress: 100 },
    { id: 12, title: "Advanced OOP", filename: "tutorial-12-advanced-oop.md", emoji: "🚀", progress: 100 },
    { id: 13, title: "OOP Design Patterns", filename: "tutorial-13-oop-design-patterns.md", emoji: "🏗️", progress: 100 }
];

// Function to load markdown content (simple fetch)
async function loadMarkdown(filename) {
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error loading markdown:', error);
        return '## Failed to load content\n\nAn error occurred while fetching the file. Check the browser console for details.';
    }
}

// Function to create table of contents
function createTableOfContents() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    // clear before populating (prevents duplicates on re-init)
    tocList.innerHTML = '';

    tutorials.forEach(tutorial => {
        // Create TOC entry
        const tocItem = document.createElement('li');
        tocItem.innerHTML = `<a href="#${tutorial.id}" onclick="loadTutorial('${tutorial.filename}'); return false;">
            <span class="emoji">${tutorial.emoji}</span> ${tutorial.title}
        </a>`;
        tocList.appendChild(tocItem);
    });
}

// Function to load and display a tutorial
async function loadTutorial(filename) {
    try {
        // allow preprocessing to reassign the markdown text
        let content = await loadMarkdown(filename);
        const tutorialContent = document.getElementById('tutorial-content');
        
        // Preprocess common malformed code fences:
        // If a code fence contains the language name as the first line (e.g. ```\npython\n...),
        // convert it to a proper fenced language tag (```python\n...) so highlight.js can detect it.
        try {
            content = content.replace(/(^|\n)(```+)[ \t]*\r?\n([a-zA-Z0-9_+\-#.]+)\r?\n/g, (m, p1, ticks, lang) => {
                return `${p1}${ticks}${lang}\n`;
            });
        } catch (e) {
            console.error('Error preprocessing code fences', e);
        }

        // Convert markdown to HTML using marked
        const htmlContent = marked.parse(content);

        tutorialContent.innerHTML = `
            <div class="markdown-body">
                ${htmlContent}
                <div class="article-footer">
                    <p>Last updated: November 2, 2025</p>
                </div>
            </div>
        `;

        // Re-run highlight.js on newly inserted code blocks
        try {
            // Prefer highlighting individual blocks for reliability
            const codeBlocks = tutorialContent.querySelectorAll('pre code');
            if (codeBlocks && codeBlocks.length) {
                codeBlocks.forEach((block) => {
                    try {
                        hljs.highlightElement(block);
                    } catch (e) {
                        // fallback to highlightAll if individual fails
                        console.error('hljs.highlightElement error', e);
                    }
                });
            } else {
                // fallback: highlight all
                if (typeof hljs.highlightAll === 'function') hljs.highlightAll();
            }
        } catch (e) {
            console.error('Error running highlight.js on content', e);
        }

        // If content indicates a failed load, show the banner with instructions (if present)
        const banner = document.getElementById('load-banner');
        if (banner) {
            if (content && content.startsWith('## Failed to load content')) {
                banner.style.display = 'block';
            } else {
                banner.style.display = 'none';
            }
        }
        
        // Update active state in TOC
        const tocLinks = document.querySelectorAll('.toc a');
        tocLinks.forEach(link => {
            if (link.getAttribute('onclick').includes(filename)) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });

        // Update URL hash
        const tutorial = tutorials.find(t => t.filename === filename);
        if (tutorial) {
            window.location.hash = tutorial.id;
        }
    } catch (error) {
        console.error('Error loading tutorial:', error);
    }
}

// Configure marked options (used for rendering markdown)
marked.setOptions({
    gfm: true,
    breaks: true,
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (__) {}
        }
        return code;
    }
});

// Initialize page and load content
document.addEventListener('DOMContentLoaded', () => {
    // Initialize highlighting (for any pre-rendered blocks)
    hljs.highlightAll();

    // Create table of contents
    createTableOfContents();

    // Load initial content (load first tutorial or hash)
    const hash = window.location.hash;
    if (hash) {
        const tutorialId = parseInt(hash.slice(1));
        const tutorial = tutorials.find(t => t.id === tutorialId);
        if (tutorial) {
            loadTutorial(tutorial.filename);
        } else {
            loadTutorial(tutorials[0].filename);
        }
    } else {
        loadTutorial(tutorials[0].filename);
    }

    // Wire up banner close button
    const bannerClose = document.getElementById('banner-close');
    if (bannerClose) {
        bannerClose.addEventListener('click', () => {
            const banner = document.getElementById('load-banner');
            if (banner) banner.style.display = 'none';
        });
    }
});

// Handle hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash) {
        const tutorialId = parseInt(hash.slice(1));
        const tutorial = tutorials.find(t => t.id === tutorialId);
        if (tutorial) {
            loadTutorial(tutorial.filename);
        }
    }
});

// Palette selector removed — single neutral theme is used instead.
