build:
  npm install
  hugo --minify
  npm run postbuild

serve:
  npm install
  echo "Server will be running on http://0.0.0.0:1313"
  hugo server
  npm run postbuild

admin:
  npx decap-server &
  python3 -m http.server --directory ./admin/development &

admin-stop:
  pkill -f "decap-server"
  pkill -f "http.server"

fresh:
  rm -rf ./public/*
  hugo

prod_test:
  ./serve.py