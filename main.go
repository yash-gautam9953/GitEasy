package main

import (
	"bufio"
	"fmt"
	"os"
	"os/exec"
	"strings"
)

func main() {
	if len(os.Args) < 2 {
		printUsage()
		os.Exit(1)
	}

	command := os.Args[1]

	switch command {
	case "push":
		handlePush()
	case "help", "-h", "--help":
		printUsage()
	default:
		fmt.Printf("Unknown command: %s\n\n", command)
		printUsage()
		os.Exit(1)
	}
}

func handlePush() {
	reader := bufio.NewReader(os.Stdin)

	// Get commit message
	fmt.Print("Enter commit message: ")
	commitMessage, err := reader.ReadString('\n')
	if err != nil {
		fmt.Printf("Error reading input: %v\n", err)
		os.Exit(1)
	}
	commitMessage = strings.TrimSpace(commitMessage)

	if commitMessage == "" {
		fmt.Println("Commit message cannot be empty!")
		os.Exit(1)
	}

	// Get branch name (default: main)
	fmt.Print("Enter branch name (default: main): ")
	branchName, err := reader.ReadString('\n')
	if err != nil {
		fmt.Printf("Error reading input: %v\n", err)
		os.Exit(1)
	}
	branchName = strings.TrimSpace(branchName)

	if branchName == "" {
		branchName = "main"
	}

	fmt.Println("\n🚀 Starting Git automation...")

	// Step 1: Check if git is initialized
	if !isGitInitialized() {
		fmt.Println("📦 Initializing Git repository...")
		if err := runCommand("git", "init"); err != nil {
			fmt.Printf("❌ Error initializing git: %v\n", err)
			os.Exit(1)
		}
		fmt.Println("✅ Git initialized")
	} else {
		fmt.Println("✅ Git already initialized")
	}

	// Step 1.5: Ensure .gitignore exists and has *.exe
	ensureGitignore()

	// Step 2: Add all files
	fmt.Println("📝 Adding all files...")
	if err := runCommand("git", "add", "."); err != nil {
		fmt.Printf("❌ Error adding files: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("✅ Files added")

	// Step 3: Commit
	fmt.Printf("💾 Committing with message: '%s'...\n", commitMessage)
	if err := runCommand("git", "commit", "-m", commitMessage); err != nil {
		fmt.Printf("❌ Error committing: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("✅ Changes committed")

	// Step 4: Check if remote exists, if not add it
	if !hasRemote() {
		fmt.Println("\n⚠️  No remote repository found!")
		fmt.Print("Enter remote repository URL: ")
		remoteURL, err := reader.ReadString('\n')
		if err != nil {
			fmt.Printf("❌ Error reading input: %v\n", err)
			os.Exit(1)
		}
		remoteURL = strings.TrimSpace(remoteURL)

		if remoteURL == "" {
			fmt.Println("❌ Remote URL cannot be empty!")
			os.Exit(1)
		}

		fmt.Println("🔗 Adding remote repository...")
		if err := runCommand("git", "remote", "add", "origin", remoteURL); err != nil {
			fmt.Printf("❌ Error adding remote: %v\n", err)
			os.Exit(1)
		}
		fmt.Println("✅ Remote added successfully")
	}

	// Step 5: Switch/Create branch
	fmt.Printf("🌿 Switching to branch '%s'...\n", branchName)
	if err := runCommand("git", "branch", "-M", branchName); err != nil {
		fmt.Printf("❌ Error switching branch: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("✅ Branch set")

	// Step 6: Push
	fmt.Printf("🚀 Pushing to '%s'...\n", branchName)
	if err := runCommand("git", "push", "-u", "origin", branchName); err != nil {
		fmt.Printf("❌ Error pushing: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("\n✨ Successfully pushed to GitHub! ✨")
}

func isGitInitialized() bool {
	_, err := os.Stat(".git")
	return err == nil
}

func hasRemote() bool {
	cmd := exec.Command("git", "remote", "-v")
	output, err := cmd.Output()
	if err != nil {
		return false
	}
	return len(strings.TrimSpace(string(output))) > 0
}

func ensureGitignore() {
	gitignorePath := ".gitignore"

	// Check if .gitignore exists
	content, err := os.ReadFile(gitignorePath)

	if err != nil {
		// File doesn't exist, create new one
		fmt.Println("📝 Creating .gitignore file...")
		defaultContent := `# Binaries
*.exe

# OS files
.DS_Store
Thumbs.db
`
		if err := os.WriteFile(gitignorePath, []byte(defaultContent), 0644); err != nil {
			fmt.Printf("⚠️  Warning: Could not create .gitignore: %v\n", err)
			return
		}
		fmt.Println("✅ .gitignore created with *.exe")
		return
	}

	// File exists, check if *.exe is already there
	contentStr := string(content)
	if strings.Contains(contentStr, "*.exe") {
		fmt.Println("✅ .gitignore already has *.exe")
		return
	}

	// Add *.exe to existing .gitignore
	fmt.Println("📝 Adding *.exe to .gitignore...")
	newContent := contentStr
	if !strings.HasSuffix(contentStr, "\n") {
		newContent += "\n"
	}
	newContent += "\n# Binaries\n*.exe\n"

	if err := os.WriteFile(gitignorePath, []byte(newContent), 0644); err != nil {
		fmt.Printf("⚠️  Warning: Could not update .gitignore: %v\n", err)
		return
	}
	fmt.Println("✅ Added *.exe to .gitignore")
}

func runCommand(name string, args ...string) error {
	cmd := exec.Command(name, args...)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

func printUsage() {
	fmt.Print(`
╔════════════════════════════════════════════╗
║      Git Auto Push - CLI Tool             ║
╚════════════════════════════════════════════╝

A simple CLI tool to push your code to GitHub with a single command!

USAGE:
    git-autopush push        Push your code to GitHub
    git-autopush help        Show this help message

WHAT IT DOES:
    1. Initializes Git (if not already initialized)
    2. Adds all files (git add .)
    3. Commits with your message
    4. Adds remote repository (if not already added)
    5. Switches to your branch (default: main)
    6. Pushes to GitHub

EXAMPLE:
    $ git-autopush push
    Enter commit message: Added new feature
    Enter branch name (default: main): main
    
NOTE:
    If remote is not configured, the tool will ask for repository URL.
`)
}
