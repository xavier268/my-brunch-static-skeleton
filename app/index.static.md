---
message: this is a test title
mess:
  - un
  - deux
  - trois
data: '**This is  my helper param data, from the context**'
_options:
  partials:
    - "app/partials/defpart.static.hbs"
  layouts:
---

This comes from a static.md  marked file ...
{{>defpart }}
The message is : {{message}}
Mess vaut : {{mess}} Mess2 vaut : {{mess.[2]}}
  * ( it is 0-based ! Note the ''.'' before the brackets ! )
Testing hlink helper : {{hlink data}}
  * Note : it does NOT work to pass string litteral to the helper ! (although passing numeric litteral works ?)
