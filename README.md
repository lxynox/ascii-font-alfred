# ascii-font-alfred

![cover image](icon.png)

🍭 Alfred workflow converts plain texts to ascii style texts

### Demo
What you type in alfred window:

`af hello world!`

What you get on your system clipboard:

```
  _          _ _                            _     _ _ 
 | |__   ___| | | ___   __      _____  _ __| | __| | |
 | '_ \ / _ \ | |/ _ \  \ \ /\ / / _ \| '__| |/ _` | |
 | | | |  __/ | | (_) |  \ V  V / (_) | |  | | (_| |_|
 |_| |_|\___|_|_|\___/    \_/\_/ \___/|_|  |_|\__,_(_)
                                                                                                          
```

### Alfred keyword
| `af` | `aff` |
| --- | --- |
| trigger this workflow from alfred | reset the font style('Standard') by default |

### Usage
1. Download the `Ascii Font.workflow` from this page
2. Import to your Alfred
3. Rock with it!

### Caution
As the output of this workflow goes into your system clipboard(whose encoding is system and env dependent, mac is `lang=en_US.UTF-8` for example).

It works fine when you paste into mac OS built-in `TextEdit.app` or some 3rd party editors like `MacVim.app`, but may have some format/encoding issues with other 3rd party softwares.

### Thanks
The scripts have dependency on **awesome** [patorjk/figlet.js](https://github.com/patorjk/figlet.js), check that for more detail.

And unluckily ¯\_(⊙︿⊙)_/¯, **node.js** installation is a prerequisite(recommend using `$brew install node`)
