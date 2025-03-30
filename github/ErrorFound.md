

### Error in git usage

**Error 01**

GnuTLS recv error (-110): The TLS connection was non-properly terminated.

```bash
user@machine: git push -u origin main
fatal: unable to access 'https://github.com/vellayawning/50dayshtml.git/': Could not resolve host: github.com
```

```bashm....llbbbb ii
user@machine: git push -u origin main
fatal: unable to access 'https://github.com/vellayawning/50dayshtml.git/': GnuTLS recv error (-110): The TLS connection was non-properly terminated.
```

**Error 02**

**Error 3**

```bash
user@machine: git push -u origin main
Missing or invalid credentials.
Error: connect ENOENT /run/user/1002/vscode-git-0c90e315bc.sock
    at PipeConnectWrap.afterConnect [as oncomplete] (node:net:1495:16) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'connect',
  address: '/run/user/1002/vscode-git-0c90e315bc.sock'
}
Missing or invalid credentials.
Error: connect ENOENT /run/user/1002/vscode-git-0c90e315bc.sock
    at PipeConnectWrap.afterConnect [as oncomplete] (node:net:1495:16) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'connect',
  address: '/run/user/1002/vscode-git-0c90e315bc.sock'
}
remote: No anonymous write access.
fatal: Authentication failed for 'https://github.com/vellayawning/50dayshtml.git/'
```

On attempt to login via terminal (as issue seen in VSCodium)

```bash
user@system:~/location/50dayshtml$ git push -u origin main
Username for 'https://github.com': user
Password for 'https://emal.com@github.com':
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/vellayawning/50dayshtml.git/'

user@system:~/location/50dayshtml$ git push -u origin main
Username for 'https://github.com': user
Password for 'https://user@github.com':
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/vellayawning/50dayshtml.git/'
user@system:~/location/50dayshtml$ git push -u origin main
Username for 'https://github.com':
vellayawning
Password for 'https://github.com':
remote: No anonymous write access.
fatal: Authentication failed for 'https://github.com/vellayawning/50dayshtml.git/'
user@system:~/location/50dayshtml$ git push -u origin main
Username for 'https://github.com':
user@system:~/location/50dayshtml$ git push -u origin main
Username for 'https://github.com':
Password for 'https://user@github.com':
user@system:~/location/50dayshtml$ git push -u origin main
Username for 'https://github.com': vellayawning
Password for 'https://vellayawning@github.com':
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/vellayawning/50dayshtml.git/'

```

Action from Stackoverflow[^2] attempted

_On Github Page_

- From your _GitHub account_, go to _Settings_ -> _Developer Settings_ -> _Personal Access Token_ -> _Tokens (classic)_ -> _Generate New Token_ (Give your password) -> Fillup the form -> click _Generate token_ -> Copy the generated Token, it will be something like _ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta_

ON terminal

```bash
user@system:~/location/50dayshtml$ git config --global user.name
vellayawning
user@system:~/location/50dayshtml$ git config --global user.email
email+vellayawning@users.noreply.github.com
user@system:~/location/50dayshtml$  git config -l
user.email=email+vellayawning@users.noreply.github.com
user.name=vellayawning
core.editor=nano
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
remote.origin.url=https://github.com/vellayawning/50dayshtml.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.main.remote=origin
branch.main.merge=refs/heads/main
user@system:~/location/50dayshtml$  git config --global credential.helper cache
user@system:~/location/50dayshtml$  git push -u origin main
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 870 bytes | 870.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/vellayawning/50dayshtml.git
   f704bc1..670a8ac  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Some how this fixed the issue - need to look into this later, for today issue fixed (maybe it was due to vscodium update, and after system restart issue fix?)

**Error 04**

So, Due to some reason, was unable to connect the assert(local repo host machine) to internet. But still continued to practive and to daily regular push (even if it fails with _Error 01_).

Now when I connected to next and was able to do a succesful push - Github shows all 'green' for all the past day -- so I can conclude that the 'contributions, more specifically (commits aspect of it), depends on the if `git commit` was done or not.

```bash
user@system:~/location/50dayshtml$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   day23_drawing-app/script.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .README.md.swp
        day24_kinetic-loader/


no changes added to commit (use "git add" and/or "git commit -a")
user@system:~/location/50dayshtml$ git add day24_kinetic-loader/ day23_drawing-app/
user@system:~/location/50dayshtml$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   day23_drawing-app/script.js
        new file:   day24_kinetic-loader/index.html
        new file:   day24_kinetic-loader/needfix.md
        new file:   day24_kinetic-loader/script.js
        new file:   day24_kinetic-loader/style.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .README.md.swp


user@system:~/location/50dayshtml$ git commit -m "Day 23.2 Drawing App v0.2 & Day 24 Kinetic
 LOader v1.0 - 27-02-2024"
[main 79bc861] Day 23.2 Drawing App v0.2 & Day 24 Kinetic LOader v1.0 - 27-02-2024
 5 files changed, 139 insertions(+), 5 deletions(-)
 create mode 100644 day24_kinetic-loader/index.html
 create mode 100644 day24_kinetic-loader/needfix.md
 create mode 100644 day24_kinetic-loader/script.js
 create mode 100644 day24_kinetic-loader/style.css
user@system:~/location/50dayshtml$ git push -u origin main
fatal: unable to access 'https://github.com/vellayawning/50dayshtml.git/': Could not resolve host: github.com

user@system:~/location/50dayshtml$ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .README.md.swp
        day25_content-placeholder/

nothing added to commit but untracked files present (use "git add" to track)
user@system:~/location/50dayshtml$ git add day25_content-placeholder/
user@system:~/location/50dayshtml$ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   day25_content-placeholder/index.html
        new file:   day25_content-placeholder/needfix.md
        new file:   day25_content-placeholder/script.js
        new file:   day25_content-placeholder/style.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .README.md.swp

user@system:~/location/50dayshtml$ git commit -m "Day 25 Content Placeholder v0.1 - 28-02-20
24"
[main 0f112e6] Day 25 Content Placeholder v0.1 - 28-02-2024
 4 files changed, 116 insertions(+)
 create mode 100644 day25_content-placeholder/index.html
 create mode 100644 day25_content-placeholder/needfix.md
 create mode 100644 day25_content-placeholder/script.js
 create mode 100644 day25_content-placeholder/style.css
user@system:~/location/50dayshtml$ git push -u origin main
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 8 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (22/22), 4.61 KiB | 590.00 KiB/s, done.
Total 22 (delta 4), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 1 local object.
To https://github.com/vellayawning/50dayshtml.git
   fa76818..0f112e6  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
user@system:~/location/50dayshtml$
```

Sources:
[^1] https://stackoverflow.com/questions/62697845/git-push-origin-master-missing-or-invalid-credentials
[^2] https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed

setup improvement and in moving forgot to push
