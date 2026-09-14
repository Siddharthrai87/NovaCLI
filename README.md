# 🚀 NovaCLI

> An AI-powered command-line application built with **TypeScript** and the **Bun runtime**, featuring interactive terminal experiences, intelligent workflows, and a modular architecture.

**NovaCLI** is also available as an npm package:

[NovaCLI on npm](https://www.npmjs.com/package/@siddharth_rai87/novacli?utm_source=chatgpt.com)

---

## 📖 Overview

**NovaCLI** is a modern command-line application that demonstrates how AI can be seamlessly integrated into developer tools. Built with **TypeScript** and powered by the **Bun runtime**, it provides an interactive terminal interface while leveraging AI models and web data retrieval for intelligent workflows.

The project demonstrates scalable software architecture, type-safe development, modular design, and modern CLI development principles.

---

## ✨ Features

### 🤖 AI-Powered Workflows

* Integrates **OpenRouter AI SDK** for Large Language Model capabilities
* Uses **Firecrawl** for intelligent web content retrieval
* Supports AI-driven command execution and responses
* Designed for extensible AI-powered workflows

### 💻 Interactive Command Line Interface

* Built using **@clack/core**
* Interactive prompts using **@clack/prompts**
* Rich terminal output with colors and formatting
* User-friendly command execution
* Designed for an interactive developer experience

### 🏗️ Modular Architecture

* Clean separation of concerns
* Feature-based project structure
* Easily extendable components
* Maintainable and scalable codebase
* Separate modules for AI, modes, and terminal UI

### 🛡️ Type Safety

* Developed entirely in **TypeScript 5.x**
* Strong static typing
* Improved code reliability
* Better developer experience and maintainability

---

# 📦 npm Package

NovaCLI has been published as an npm package and can be installed directly using npm.

### Install globally

```bash
npm install -g @siddharth_rai87/novacli
```

After installation, the CLI can be used from the terminal according to the commands supported by the application.

### npm Package

[https://www.npmjs.com/package/@siddharth_rai87/novacli](https://www.npmjs.com/package/@siddharth_rai87/novacli?utm_source=chatgpt.com)

---

# 📂 Project Structure

```text
NovaCLI/
│
├── index.ts                # Application entry point
├── ai/                     # AI modules and integrations
├── modes/                  # Application modes
├── tui/                    # Text User Interface components
├── yellow-landing/         # Landing interface
│
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
├── bun.lock                # Bun dependency lock file
└── README.md               # Project documentation
```

---

# 🧩 Core Components

| Component         | Description                               |
| ----------------- | ----------------------------------------- |
| `index.ts`        | Entry point and command initialization    |
| `ai/`             | AI providers, prompts, and workflow logic |
| `modes/`          | Different operational modes               |
| `tui/`            | Terminal UI and interactive components    |
| `yellow-landing/` | Landing interface and startup experience  |

---

# ⚙️ Technology Stack

## Runtime

* **Bun**

## Language

* **TypeScript 5.x**

## AI

* `@openrouter/ai-sdk-provider`
* `ai`
* `@mendable/firecrawl-js`

## CLI

* `@clack/core`
* `@clack/prompts`
* `commander`

## Terminal UI

* `chalk`
* `figlet`

## Utilities

* `marked`
* `marked-terminal`
* `diff`

---

# 🚀 Technical Highlights

### ⚡ Bun Runtime

NovaCLI uses the **Bun runtime** to provide a fast development environment, efficient dependency management, and modern JavaScript/TypeScript execution.

### 🤖 AI Integration

NovaCLI combines modern AI SDKs with web data retrieval to enable intelligent terminal-based interactions and AI-assisted workflows.

The AI layer is designed to communicate with supported language models through **OpenRouter**, while **Firecrawl** can be used for retrieving and processing web content.

### 💻 Interactive Terminal Experience

NovaCLI provides an interactive terminal experience through:

* Interactive prompts
* Command parsing
* Styled console output
* Markdown rendering
* Terminal-friendly formatting
* Responsive command-line interactions

### 🏛️ Scalable Architecture

The application follows a modular architecture that separates AI integrations, application modes, business logic, and terminal interface components.

This structure makes it easier to maintain the project and introduce additional features in the future.

---

# 🛠️ Development

## Requirements

Before developing NovaCLI, make sure the following are installed:

* **Bun**
* **TypeScript 5.x**

## Clone the Repository

```bash
git clone <your-repository-url>
cd NovaCLI
```

## Install Dependencies

```bash
bun install
```

## Run the Application

```bash
bun run index.ts
```

---

# 🔐 Environment Configuration

NovaCLI uses API-based services for AI and web data retrieval. API credentials should be stored securely using environment variables rather than being directly written into source code.

Create a `.env` file in the project root and configure the required API credentials.

```env
OPENROUTER_API_KEY=your_openrouter_api_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
```

> **Important:** Never commit `.env` files or API keys to a public repository.

Add `.env` to `.gitignore`:

```text
.env
```

---

# 📈 Future Enhancements

The project can be extended with several additional capabilities:

* Multi-agent AI workflows
* Plugin architecture
* Conversation history
* Custom command extensions
* Configuration profiles
* Improved TUI experience
* Additional AI provider support
* Persistent user configuration
* Advanced command automation

---

# 🤝 Contributing

Contributions and suggestions are welcome.

When contributing to NovaCLI:

* Follow TypeScript best practices
* Keep the architecture modular
* Write clean and maintainable code
* Avoid committing API credentials
* Update documentation when adding new features
* Test new functionality before submitting changes

---

# 🎯 Key Learning Outcomes

This project demonstrates practical experience with:

* TypeScript application development
* Modern CLI design
* AI SDK integration
* OpenRouter integration
* Web data retrieval
* Bun runtime ecosystem
* Modular software architecture
* Interactive terminal applications
* Clean project organization
* npm package publishing

---

# 📦 Project Distribution

NovaCLI is publicly distributed through npm, allowing users to install the CLI as a package rather than cloning the source repository.

**npm Package:**
[@siddharth_rai87/novacli](https://www.npmjs.com/package/@siddharth_rai87/novacli?utm_source=chatgpt.com)

---

# 📄 License

This project is published as an npm package under the license specified in the project repository and package configuration.

---

## 👨‍💻 Author

**Siddharth Rai**

NovaCLI is developed as a practical project demonstrating the integration of artificial intelligence, web data retrieval, and interactive command-line interfaces using modern TypeScript tooling.
