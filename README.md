# 🚀 GitEasy - CLI Tool

A simple CLI tool that pushes your code to GitHub with **just one command**!

## ✨ Features

- ✅ Automatically initializes Git (if not already initialized)
- ✅ Adds all files (`git add .`)
- ✅ Commits with your message
- ✅ Automatically adds remote repository (if not configured)
- ✅ Switches to your branch
- ✅ Pushes to GitHub
- ✅ All commands run automatically!

## 📦 Installation

### Option 1: Windows Installer (Recommended - One-Click Install) 🎯

Download and run the installer - it automatically adds GitEasy to PATH!

1. **[Download GitEasy Installer](https://yash-gautam9953.github.io/GIT-AUTOMATION-TOOL/)** (or from [Releases](https://github.com/yash-gautam9953/GIT-AUTOMATION-TOOL/releases))
2. Run `GitEasy-Setup-1.0.exe`
3. Click through the installer (it will automatically add to PATH)
4. Open **new terminal** and use from anywhere:

```bash
giteasy push
```

**That's it!** 🚀 No manual PATH setup needed!

### Option 2: Direct EXE (Use in Project Folder)

Download the `.exe` file directly and use it in your project folder:

**PowerShell:**

```powershell
Invoke-WebRequest -Uri "https://github.com/yash-gautam9953/GIT-AUTOMATION-TOOL/releases/latest/download/giteasy.exe" -OutFile "giteasy.exe"
```

**Command Prompt:**

```cmd
curl -L -o giteasy.exe https://github.com/yash-gautam9953/GIT-AUTOMATION-TOOL/releases/latest/download/giteasy.exe
```

Now use it:

```bash
./giteasy push
```

### Option 3: Build from Source (For Developers)

```bash
go build -o giteasy.exe
```

## 🎯 Usage

### If Using Installer (Recommended)

After installing, use from any project folder:

```bash
giteasy push
```

### If Using Direct EXE

```bash
./giteasy push
```

### If Installed Globally

```bash
giteasy push
```

### Example

```bash
PS D:\MyProject> ./giteasy push
Enter commit message: Added new feature
Enter branch name (default: main): main

🚀 Starting Git automation...
📦 Initializing Git repository...
✅ Git initialized
📝 Adding all files...
✅ Files added
💾 Committing with message: 'Added new feature'...
✅ Changes committed

⚠️  No remote repository found!
Enter remote repository URL: https://github.com/username/repo.git
🔗 Adding remote repository...
✅ Remote added successfully

🌿 Switching to branch 'main'...
✅ Branch set
🚀 Pushing to 'main'...
✨ Successfully pushed to GitHub! ✨
```

## 📋 Prerequisites

Only **Git** must be installed - [Download Git](https://git-scm.com/downloads)

That's it! Just download the `.exe` file and start using it. The tool will handle everything else, including adding remote repository.

## 🔧 Commands

| Command        | Description              |
| -------------- | ------------------------ |
| `giteasy push` | Push your code to GitHub |
| `giteasy help` | Show help message        |

## 💡 How It Works

When you run `giteasy push`, the tool automatically:

1. Initializes Git (if not already initialized)
2. Runs `git add .` to add all files
3. Commits with your message using `git commit`
4. Adds remote repository (if not configured) by asking for URL
5. Switches to your specified branch (default: main)
6. Pushes using `git push -u origin <branch>`

## 🎨 What Makes It Special?

**Before:**

```bash
git init
git add .
git commit -m "my changes"
git remote add origin <url>
git branch -M main
git push -u origin main
```

**Now:**

```bash
giteasy push
```

Just one command does everything!

## ⚠️ Important Notes

- Download the `.exe` file once, use it in any project
- The tool will ask for remote repository URL if not configured
- Create a `.gitignore` file before running if you want to exclude files
- Make sure you have a GitHub repository created first

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Open issues
- Submit pull requests
- Suggest new features

## 📄 License

MIT License - Free to use and modify!

## 👨‍💻 Author

**Yash Gautam**

- GitHub: [@yash-gautam9953](https://github.com/yash-gautam9953)

## 🙏 Support

If you find this tool helpful, please give it a star ⭐ on GitHub!

---

**Happy Coding! 🎉**
