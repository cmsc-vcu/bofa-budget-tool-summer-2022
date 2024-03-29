# Setting up a new development VM

REACT-NATIVE has prepared a very good guide for getting started:

<https://reactnative.dev/docs/environment-setup>

The instructions on the link above work. Some notes - we're using the react-native CLI, we're NOT using EXPO.

I found the instructions at the URL above a bit confusing, expecially since I wanted to use virtual machine (VM) for my development
environment.  The instructions below document what I learned to get everything working.

## Running in a virtual machine

Most of these instructions apply when you're running the development environment on your bare metal operating system.  The HyperV instructions are useful if you choose to layer on a VM (virtual machine) and develop from inside the VM.  This is handy if you don't want to pollute your main machine with all the development tools.

## Install Hyper-V

This is the magic command, run from an administrator command project OUTSIDE Hyper-V, substitute the name of your VM for "Windows 11 dev environment"

    Set-VMProcessor -VMName "Windows 11 dev environment" -ExposeVirtualizationExtensions $true

This command permits the HyperV to next HyperV VMs, thus the emulator created within the HyperV VM can leverage HyperV.  See:  <https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization>

## Download and install Chocolatey

[Chocolatey](https://chocolatey.org/install#individual) is a cross-platform
package manager.  The chocolatey community maintains a large catalog of
software packages and scripts to install them.  Chocolatey downloads and installs entire applications, so you don't need to visit their /downloads section on the web site and install the application manually.

However we do need to "bootstrap" the process by first "manually" download chocolatey and then using it to download and install all the
remaining software tools.

Instructions to download and install Chocolatey can be found here: <https://chocolatey.org/install#individual>.  There a plenty of steps, so it's best to provide a link to the site so that you can read the instructions.

If you're comfy from a windows command prompt, cut and paste this powershell script into an **administrator window** to do it all:

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

## Download and install mobile and other development tools

    choco install -y make
    choco install -y grep
    choco install -y vscode
    choco install -y git.install --params "/GitAndUnixToolsOnPath /Editor:VisualStudioCode"
    choco install -y nodejs-lts
    choco install -y openjdk11
    choco install -y androidstudio
    choco install -y jq

After installing, open android studio and walk through the completion screens.  Make sure that the Android SDK is installed.  Visit the site <https://reactnative.dev/docs/environment-setup> for more instructions on properly installing Android SDK.

## Useful extensions for visual studio code

Here is a listing of useful extensions to help make the use Visual Studio Code more enjoyable.

- yzhang.markdown-all-in-one
- DavidAnson.vscode-markdownlint
- dsznajder.es7-react-js-snippets
- msjsdiag.vscode-react-native
- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- ms-vscode.makefile-tools

To install one of these extensions:

    Open Visual Studio Code
    Press Ctrl+P/⌘P to open the Quick Open dialog
    Type ext install yzhang.markdown-all-in-one
    Click the Install button, then the Enable button (if not already enabled)

## Get GIT setup for commits

    git config --global user.email "jdleonard@vcu.edu"
    git config --global user.name "John Leonard"
    git config --global core.editor "code --wait"

## Fix ugly npm error

When running a fresh install of react-native I regularly got an error that noted a deprecated --local sort of function.  This is the code that fixes the issue.  I expect that in future npm deployments this will be fixed.

From an administrator terminal, run:

    Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force; 
    npm install --global --production npm-windows-upgrade;
    npm-windows-upgrade --npm-version latest;
    ;

## Windows terminal

Rather than open a terminal within Visual Studio Code, I regularly open a free-standing windows terminal.  The height and width can be adjusted from the settings screen, but the initial position must be modified by directly editing the configuration file.

Open the windows terminal configuration file with visual studio code.  It's a JSON file, and yes, it's a pretty ugly location.

    code %LOCALAPPDATA%\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json

Look for the section with one or more of these variables. The "initialPosition" is usually missing and needs to be added.

    "initialCols": 120,
    "initialPosition": "300,100",
    "initialRows": 40,

Initial position is codes "X,Y" in pixels.  You'll want to play with it to get it right for your machine.
