# 🧪 API Testing with Playwright

Automated API tests built with [Playwright](https://playwright.dev/) and TypeScript.  
Tests are running against [ReqRes](https://reqres.in/) — a fake REST API for testing purposes.

---

## 🚀 Tech Stack

- [Playwright](https://playwright.dev/) — test framework
- [TypeScript](https://www.typescriptlang.org/) — language
- [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline

---

## 📁 Project Structure

```
api_testing/
├── tests/
│   ├── some_api_tests.spec.ts   # API test suite
│   └── example.spec.ts
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions workflow
├── playwright.config.ts         # Playwright configuration
├── package.json
└── .env                         # 🔒 local only, NOT committed
```

---

## ⚙️ Setup & Installation

**1. Clone the repository:**

```bash
git clone https://github.com/LudmilaWiorek/api-testing.git
cd api-testing
```

**2. Install dependencies:**

```bash
npm install
```

**3. Create `.env` file in root directory:**

```
API_KEY=your_api_key_here
```

---

## ▶️ Running Tests

**Run all tests:**

```bash
npx playwright test
```

**Run with UI mode:**

```bash
npx playwright test --ui
```

**Run specific test file:**

```bash
npx playwright test tests/some_api_tests.spec.ts
```

---

## 🧪 Test Cases

| Method | Endpoint | Expected Status | Description           |
| ------ | -------- | --------------- | --------------------- |
| GET    | /users   | 200             | Returns list of users |
| POST   | /users   | 201             | Creates a new user    |

---

## 🔄 CI/CD

Tests are automatically triggered on every push via **GitHub Actions**.  
Check the [Actions tab](../../actions) to see the results.

---

## 👩‍💻 Author

**Ludmiła Wiorek** — [@LudmilaWiorek](https://github.com/LudmilaWiorek)
