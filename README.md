# Prerequisites
- golang
- https://gohugo.io
- https://just.systems/ (optional)
- npm
- node


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
Change the toplines in `./admin/config.yaml` to:

```yaml
local_backend: true
publish_mode: editorial_workflow
site_url: http://localhost:1313
backend:
  name: git-gateway
  branch: main
```

Run the admin

```sh
just admin
open http://localhost:8000
just admin-stop #when done

# equivalent to:

npx netlify-cms-proxy-server
python3 -m http.server --directory ./admin
```

## Test production version
```sh
just prod-test
open http://localhost:8000

# equivalent to:

python3 serve.py
```

