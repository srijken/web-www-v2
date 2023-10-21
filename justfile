build:
  npm install
  hugo --minify
  npm run postbuild

admin:
  npx netlify-cms-proxy-server &
  python3 -m http.server --directory ./admin &

admin-stop:
  pkill -f "netlify-cms-proxy-server"
  pkill -f "http.server"

fresh:
  rm -rf ./public/*
  hugo

prod_test:
  ./serve.py