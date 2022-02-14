set	nocompatible
set	showmatch 
set	ignorecase 
set	mouse=v 
set	hlsearch 
set	incsearch
set	tabstop=4 
set	softtabstop=4
set	expandtab
set	shiftwidth=4
set	autoindent
set	number
set	wildmode=longest,list	" get bash-like ta completions
set	cc=80
"filetype	plugin indent on
syntax	on
set	mouse=a
set	clipboard=unnamedplus	" using system clipboard
filetype plugin on
set	cursorline
set	ttyfast
set	noswapfile
set	backupdir=~/.cache/vim
colorscheme neon
let	g:airline_theme='airline-neon'
set	bg=light

augroup nerdtree_open
    autocmd!
    autocmd VimEnter * NERDTree | wincmd p
augroup END

autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif
autocmd BufEnter * if winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif
autocmd BufWinEnter * if getcmdwintype() == '' | silent NERDTreeMirror | endif

let g:NERDTreeDirArrowExpandable = '>'
let g:NERDTreeDirArrowCollapsible = '<'
let g:rainbow_active = 1
let g:rainbow_load_separately = [
    \ [ '*' , [['(', ')'], ['\[', '\]'], ['{', '}']] ],
    \ [ '*.tex' , [['(', ')'], ['\[', '\]']] ],
    \ [ '*.cpp' , [['(', ')'], ['\[', '\]'], ['{', '}']] ],
    \ [ '*.{html,htm}' , [['(', ')'], ['\[', '\]'], ['{', '}'], ['<\a[^>]*>', '/[^>]*>']] ],
    \ ]

let g:rainbow_guifgs = ['RoyalBlue3', 'DarkOrange3', 'DarkOrchid3', 'FireBrick']
let g:rainbow_ctermfgs = ['lightblue', 'lightgreen', 'yellow', 'red', 'magenta']

call	plug#begin('~/.vim/plugged')

Plug	'vim-airline/vim-airline'
Plug	'vim-airline/vim-airline-themes'
Plug	'WolfgangMehner/vim-plugins'
Plug	'preservim/nerdtree'
Plug	'justinmk/vim-syntax-extra'
Plug	'frazrepo/vim-rainbow'
Plug	'Xuyuanp/nerdtree-git-plugin'
Plug	'ryanoasis/vim-devicons'
Plug	'tiagofumo/vim-nerdtree-syntax-highlight'
Plug	'scrooloose/nerdtree-project-plugin'
Plug	'PhilRunninger/nerdtree-buffer-ops'
Plug	'PhilRunninger/nerdtree-visual-selection'
Plug	'danielsaul/neon.vim'
Plug	'terryma/vim-multiple-cursors'

call	plug#end()
