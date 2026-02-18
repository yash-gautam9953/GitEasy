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

1. [**Download GitEasy Installer**](https://github.com/yash-gautam9953/GitEasy/releases/latest/download/GitEasy-Setup-1.0.exe) (or from [Releases](https://github.com/yash-gautam9953/GitEasy/releases))
2. Run `GitEasy-Setup-1.0.exe`
3. Click through the installer (it will automatically add to PATH)
4. Open new terminal and use from anywhere:

```bash
giteasy push
```

### Option 2: Quick Download

Open your project folder in terminal and run:

#### Windows

**PowerShell:**

```powershell
Invoke-WebRequest -Uri "https://github.com/yash-gautam9953/GitEasy/releases/latest/download/giteasy.exe" -OutFile "giteasy.exe"
```

**Command Prompt:**

```cmd
curl -L -o giteasy.exe https://github.com/yash-gautam9953/GitEasy/releases/latest/download/giteasy.exe
```

Now use it:

```bash
./giteasy push
```

#### Linux

```bash
curl -L -o giteasy https://github.com/yash-gautam9953/GitEasy/releases/latest/download/giteasy
chmod +x giteasy
```

Now use it:

```bash
./giteasy push
```

### Option 3: Install Globally (Use from Any Project)

#### Windows

**PowerShell (as Administrator):**

```powershell
# Download to C:\Tools
New-Item -ItemType Directory -Force -Path C:\Tools
Invoke-WebRequest -Uri "https://github.com/yash-gautam9953/GitEasy/releases/latest/download/giteasy.exe" -OutFile "C:\Tools\giteasy.exe"

# Add to PATH permanently
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Tools", "Machine")
```

Restart terminal, then use from anywhere:

```bash
giteasy push
```

#### Linux

```bash
sudo curl -L -o /usr/local/bin/giteasy https://github.com/yash-gautam9953/GitEasy/releases/latest/download/giteasy
sudo chmod +x /usr/local/bin/giteasy
```

Now use from anywhere:

```bash
giteasy push
```

### Option 4: Build from Source (For Developers)

**Windows:**

```bash
go build -o giteasy.exe
```

**Linux:**

```bash
go build -o giteasy
```

## 🎯 Usage

### If in Project Folder

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

That's it! Just download the binary (`.exe` for Windows, `giteasy` for Linux) and start using it. The tool will handle everything else, including adding remote repository.

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

- Download the binary (`.exe` for Windows, `giteasy` for Linux) once, use it in any project
- Works on both **Windows** and **Linux**
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
