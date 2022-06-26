# Setting up a new development VM

Most of these instructions apply when you're running the development environment on your bare metal operating system.  The HyperV instructions are useful if you choose to layre on a VM (virtual machine) and develop from inside the VM.  This is handy if you don't want to pollute your main machine with all the development tools.

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
    choco install -y git.install
    choco install -y nodejs-lts
    choco install -y openjdk11
    choco install -y androidstudio

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

## Fix odd npm error

When running a fresh install of react-native I regularly got an error that noted a deprecated --local sort of function.  This is the code that fixes the issue.  I expect that in future npm deployments this will be fixed.

From an administrator terminal, run:

    Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force; 
    npm install --global --production npm-windows-upgrade;
    npm-windows-upgrade --npm-version latest;
    ;
