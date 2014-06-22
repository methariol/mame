# 環境設定

## git設定
```sh
// 個人の識別情報
$ git config --global user.name "USER-NAME"
$ git config --global user.email "E-MAIL"

// エディタ
$ git config --global core.editor "vim"

// コマンド保管
$ git config --global help.autocorrect true

// 出力をカラーリング
$ git config --global color.ui auto

// push時の設定
$ git config --global push.default "simple"

// 設定の確認
$ git config --list --global
 // ~/.gitconfigにgitクライアントの設定ファイルが作成される
```

## terminalにブランチ名を表示する
```sh
$ cp /opt/local/share/git-core/contrib/completion/git-prompt.sh ~/.git-promt.sh
$ cp /opt/local/share/git-core/contrib/completion/git-completion.bash ~/.git-completion.bash
$ vi ~/.bash_profile
--- 以下を追記 ----------------------------
# git設定
if [ -f ~/.git-prompt.sh ]; then
        source ~/.git-prompt.sh
fi
if [ -f ~/.git-completion.bash ]; then
        source ~/.git-completion.bash
fi
GIT_PS1_SHOWDIRTYSTATE=true
PS1="[\h@\u:\W\$(__git_ps1)]\$ "
------------------------------------------
$ source ~/.bashrc
```

## 開発環境
```sh
$ mkdir ~/Documents/git
$ cd ~/Documents/git
$ git clone https://github.com/methariol/mame.git

$ cd ~/Sites
$ ln -s ~/Documents/git/mame/public mame
// 各ディレクトリの第三者権限にrとxを付与
// Apacheの設定ファイルに、Options MultiViews FollowSymlinksないなら追記
```