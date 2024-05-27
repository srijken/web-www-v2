# Prerequisites
- golang
- https://gohugo.io
- https://just.systems/ (optional)
- npm
- node ^16


# Setup
```sh
npm install
```


# Local development

## Website
```sh
hugo server
open http://localhost:1313
```

## Local admin

```sh
just admin
open http://localhost:8000
just admin-stop #when done

# equivalent to:

npx decap-server
python3 -m http.server --directory ./admin/development
```

## Test production version
```sh
just prod-test
open http://localhost:8000

# equivalent to:

python3 serve.py
```
