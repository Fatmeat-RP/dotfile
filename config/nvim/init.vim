if (has("nvim"))
    "For Neovim 0.1.3 and 0.1.4 < https://github.com/neovim/neovim/pull/2198 >
    let $NVIM_TUI_ENABLE_TRUE_COLOR=1
endif
if (has("termguicolors"))
    set termguicolors
endif

set	nocompatible
set	showmatch 
set clipboard=unnamedplus
set	ignorecase 
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
function! ToggleMouse()
    " check if mouse is enabled
    if &mouse == 'a'
        " disable mouse
        set mouse=r
    else
        " enable mouse everywhere
        set mouse=a
    endif
endfunc
set mouse=r
filetype plugin on
set	cursorline
set	ttyfast
set	noswapfile
set	backupdir=~/.cache/vim
colorscheme onedark
let g:airline_theme='onedark'
hi Normal guibg=NONE ctermbg=NONE

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
Plug	'PhilRunninger/nerdtree-buffer-ops'
Plug	'PhilRunninger/nerdtree-visual-selection'
Plug	'danielsaul/neon.vim'
Plug	'terryma/vim-multiple-cursors'
Plug    'sheerun/vim-polyglot'
Plug    'joshdick/onedark.vim'

call	plug#end()
